# Architecture: Chat-like Self File Hosting App

## Overview
A self-hosted app that organizes files and notes in a chat-like interface. Each "group" is a topic (e.g., coding, sports, work) and acts as a folder for files/notes. The UI mimics WhatsApp for familiarity and privacy.

## Components
- **Frontend**: React or Next.js (chat UI, group/topic navigation, file upload)
- **Backend**: Node.js/Express (file storage, authentication, API)
- **Database**: SQLite (metadata for files, groups, users)
- **Desktop Option**: Electron (for local file access)

## System Diagram
```
[User] <-> [React/Next.js UI] <-> [Node.js API] <-> [SQLite DB & File Storage]
```

## Key Features
- Create/delete groups (topics)
- Upload/view/download files in groups
- Add notes/messages to groups
- Search and filter
- Authentication (local)
- Optional: Encryption, desktop app
