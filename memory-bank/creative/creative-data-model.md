# 🗃️ CREATIVE PHASE: Data Model Design

## 1️⃣ PROBLEM

**Description:** Design comprehensive data models for the Menhausen Telegram Mini App that support all current and planned features while ensuring data privacy, security, and efficient storage.

**Requirements:**
- Client-side encryption for sensitive user responses
- Support for mood tracking with historical data
- Structure for therapeutic card content
- User progress and badge tracking
- Multi-language content support
- Efficient storage and retrieval patterns

**Constraints:**
- Must work within localStorage limitations
- Need to balance data richness with storage efficiency
- Security requirements for sensitive information
- Performance considerations for mobile devices

## 2️⃣ OPTIONS

**Option A: Normalized Data Model with Encryption**
- Separate collections for different data types
- Referential integrity through IDs
- Encryption at the field level for sensitive data
- Efficient querying through indexes

**Option B: Denormalized Data Model**
- Embedded documents for related data
- Reduced need for joins
- Simplified querying
- Larger document sizes

**Option C: Hybrid Approach**
- Normalized for reference data
- Denormalized for user-specific data
- Selective encryption
- Mixed storage strategies

## 3️⃣ ANALYSIS

| Criterion | Option A | Option B | Option C |
|-----------|----------|----------|----------|
| Storage Efficiency | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ |
| Query Performance | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Security | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Development Complexity | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Scalability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Maintainability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

## 4️⃣ DECISION

**Selected Approach: Option A - Normalized Data Model with Encryption**

**Justification:**
This approach provides the best balance of security, maintainability, and scalability for the Menhausen application. The normalized structure supports the application's complex data relationships while enabling efficient storage and retrieval. Field-level encryption ensures sensitive user data is protected, which is critical for a mental health application. This approach also aligns with the Firebase backend structure and supports future features like analytics and reporting.

**Key Data Model Elements:**
- Normalized structure with clear relationships
- Field-level encryption for sensitive data
- Efficient indexing for common queries
- Support for multi-language content

## 5️⃣ IMPLEMENTATION GUIDELINES

### User Data Model

```typescript
interface User {
  id: string;                    // Telegram user ID
  createdAt: Date;              // Account creation timestamp
  lastActive: Date;             // Last app usage timestamp
  language: string;             // User's preferred language
  onboardingCompleted: boolean; // Whether onboarding was completed
  encryptionKey: string;        // Encrypted encryption key
  preferences: {
    notifications: boolean;     // Notification preferences
    theme: 'light' | 'dark';    // UI theme preference
  };
}
```

### Mood Tracking Data Model

```typescript
interface MoodCheckin {
  id: string;                   // Unique check-in ID
  userId: string;               // Reference to user
  date: Date;                   // Date of check-in
  mood: 0 | 1 | 2 | 3 | 4;      // Mood value (0-4)
  timestamp: Date;              // Exact submission time
  encryptedNotes: string;       // Encrypted user notes (optional)
}

interface MoodHistory {
  userId: string;               // Reference to user
  weeklyAverages: number[];     // 7-day mood averages
  trends: {
    daily: number[];            // Daily mood changes
    weekly: number[];           // Weekly mood changes
  };
}
```

### Card System Data Model

```typescript
interface Card {
  id: string;                   // Unique card ID
  title: {                      // Multi-language title
    [language: string]: string;
  };
  content: {                    // Multi-language content
    [language: string]: string;
  };
  category: string;             // Card category/theme
  estimatedTime: number;        // Estimated completion time (minutes)
  difficulty: 'easy' | 'medium' | 'hard'; // Difficulty level
  interactionType: 'quiz' | 'reflection' | 'exercise' | 'journal'; // Type of interaction
  tags: string[];               // Searchable tags
  createdAt: Date;              // Creation timestamp
  updatedAt: Date;              // Last update timestamp
}

interface UserCardProgress {
  userId: string;               // Reference to user
  cardId: string;               // Reference to card
  status: 'not_started' | 'in_progress' | 'completed'; // Progress status
  startedAt?: Date;             // When user started card
  completedAt?: Date;           // When user completed card
  encryptedResponse?: string;   // Encrypted user response (if applicable)
  timeSpent: number;            // Time spent on card (seconds)
}
```

### Emergency Help Data Model

```typescript
interface EmergencyTechnique {
  id: string;                   // Unique technique ID
  title: {                      // Multi-language title
    [language: string]: string;
  };
  description: {                // Multi-language description
    [language: string]: string;
  };
  steps: {                      // Multi-language steps
    [language: string]: string[];
  };
  category: string;             // Technique category
  tags: string[];               // Searchable tags
}

interface UserEmergencyUsage {
  userId: string;               // Reference to user
  techniqueId: string;          // Reference to technique
  usedAt: Date;                 // When technique was used
  duration: number;             // How long user engaged (seconds)
}
```

### Badge and Progress Data Model

```typescript
interface Badge {
  id: string;                   // Unique badge ID
  name: {                       // Multi-language badge name
    [language: string]: string;
  };
  description: {                // Multi-language description
    [language: string]: string;
  };
  criteria: {                   // Conditions for earning badge
    action: string;             // Action required
    count: number;              // Number of times action must be performed
  };
  icon: string;                 // Badge icon identifier
}

interface UserBadge {
  userId: string;               // Reference to user
  badgeId: string;              // Reference to badge
  earnedAt: Date;               // When badge was earned
  progress: number;             // Progress toward earning (0-100%)
}
```

### Storage Structure

```
localStorage/
├── user/                      # User profile data
│   ├── profile                 # Basic user information
│   └── preferences            # User preferences
├── mood/                      # Mood tracking data
│   ├── checkins/              # Individual mood check-ins
│   └── history/               # Mood history and trends
├── cards/                     # Card system data
│   ├── progress/              # User progress on cards
│   └── responses/             # Encrypted card responses
├── emergency/                 # Emergency help data
│   └── usage/                 # Emergency technique usage
├── badges/                    # Badge and progress data
│   └── earned/                # Badges earned by user
├── encryption/                # Encryption keys and settings
│   ├── keys/                  # Encrypted encryption keys
│   └── settings/              # Encryption settings
└── app/                      # Application state
    ├── onboarding/            # Onboarding progress
    └── settings/              # App settings
```

### Encryption Strategy

1. **Key Management**
   - Master encryption key derived from user credentials
   - Separate keys for different data types
   - Key rotation every 90 days
   - Secure key storage using Telegram's secure storage

2. **Data Encryption**
   - AES-256-GCM for sensitive user data
   - Field-level encryption for mood notes and card responses
   - Metadata stored unencrypted for indexing
   - Secure random IV generation for each encryption

3. **Performance Considerations**
   - Encrypt/decrypt operations offloaded to Web Workers
   - Caching of decrypted data for active sessions
   - Batch operations for multiple records
   - Lazy decryption for non-critical data

### Success Metrics
- Storage efficiency (data size vs. value)
- Query performance for common operations
- Security audit results
- Data consistency and integrity
- User privacy compliance

This data model provides a comprehensive structure for the Menhausen application that supports all current and planned features while ensuring data privacy and security. The normalized approach with field-level encryption creates a solid foundation for future enhancements and analytics capabilities.
