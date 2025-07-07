# West Wind Electric Power Ltd - Company Website

## Overview

This is a professional website for West Wind Electric Power Ltd, a Nigerian engineering company registered under the Corporate Affairs Commission on July 26th, 2011. The company specializes in electrical, electronics, and instrumentation services, particularly in the marine and industrial sectors. The website serves as a comprehensive digital presence showcasing their services, expertise, and company information.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend, backend, and shared components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Radix UI primitives with custom styling
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with structured error handling

### Shared Components
- **Schema**: Centralized database schema definitions using Drizzle
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Validation**: Zod for runtime type validation

## Key Components

### 1. Frontend Pages
- **Home Page**: Hero section with company overview and service highlights
- **About Page**: Company history, mission, and credentials
- **Products & Services**: Detailed service offerings with expandable sections
- **Partnerships**: Information about subsidiary relationships
- **Contact Page**: Contact form with validation and submission handling

### 2. UI Components
- **Header**: Navigation with responsive mobile menu
- **Hero**: Reusable hero section with customizable content
- **Footer**: Company information and contact details
- **Cards**: Service and content display components
- **Forms**: Contact form with validation and error handling

### 3. Backend Services
- **Contact Form API**: Handles form submissions with validation
- **User Management**: Basic user schema (extensible for future features)
- **Storage Layer**: Abstracted storage interface for data operations

## Data Flow

1. **Frontend Requests**: React components make API calls using TanStack Query
2. **Backend Processing**: Express routes handle requests with validation
3. **Database Operations**: Drizzle ORM manages database interactions
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: TanStack Query manages caching and synchronization

## External Dependencies

### Frontend Libraries
- **UI Framework**: React with TypeScript support
- **Component Library**: Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Zod validation resolvers

### Backend Services
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod for schema validation
- **Session Management**: Connect-pg-simple for PostgreSQL sessions

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint and Prettier (implied by setup)
- **Development**: Hot module replacement and error overlay

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot reloading
- **Database**: Uses DATABASE_URL environment variable
- **API Proxy**: Vite proxies API requests to Express server
- **Asset Handling**: Vite handles static assets and bundling

### Production Build
- **Frontend**: Vite builds optimized static assets
- **Backend**: ESBuild compiles TypeScript to JavaScript
- **Database Migrations**: Drizzle Kit handles schema migrations
- **Environment**: Uses NODE_ENV for environment detection

### Hosting Configuration
- **Static Assets**: Frontend builds to `dist/public`
- **Server**: Express serves both API and static files
- **Database**: PostgreSQL connection via environment variables
- **SSL/Security**: Configured for production deployment

## User Preferences

Preferred communication style: Simple, everyday language.

## Email Service Configuration

The contact form now includes a complete SMTP email service with the following features:

### Environment Variables
- `SMTP_HOST`: SMTP server hostname (e.g., smtp.gmail.com)
- `SMTP_PORT`: SMTP server port (587 for TLS, 465 for SSL)
- `EMAIL_USER`: Sender email address
- `EMAIL_PASS`: SMTP password (use app-specific password for Gmail)
- `EMAIL_TO`: Recipient email address

### Features
- Professional HTML email templates with company branding
- Fallback text content for email clients that don't support HTML
- Comprehensive error handling and validation
- Easy switching between email providers by updating environment variables only
- Connection testing endpoint at `/api/email-status`
- Security features including TLS/SSL support and reply-to headers

### Gmail Setup
1. Enable 2-factor authentication on your Google account
2. Generate an app-specific password
3. Use the app password in `EMAIL_PASS` (not your regular password)
4. Set `SMTP_HOST=smtp.gmail.com` and `SMTP_PORT=587`

### Company SMTP Setup
Simply update the environment variables with your company's SMTP settings. No code changes required.

## Changelog

Changelog:
- July 07, 2025: Initial setup
- July 08, 2025: Added comprehensive SMTP email service with professional templates and error handling