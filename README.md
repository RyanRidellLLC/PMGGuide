# PMG Guide

Premium stone and granite services website showcasing collections, projects, and enabling customer consultations.

## Overview

PMG Guide is a web application designed for a premium stone and granite business. The application helps showcase stone series, completed projects, and facilitates customer engagement through consultations and quotes.

## Current Implementation

The current application is built with:
- **Vite** - Fast build tool and dev server
- **React** - UI framework
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Architecture

For detailed information about the planned architecture and content model, see [ARCHITECTURE.md](./ARCHITECTURE.md).

Key features of the planned architecture:
- Next.js App Router for enhanced performance and SEO
- TypeScript-first content models (see `src/types/content.ts`)
- Server-side filtering and pagination utilities (see `src/lib/filters.ts`)
- Headless CMS integration
- Component-driven design with shadcn/ui

## Development

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Route-level page components
├── types/          # TypeScript type definitions
│   └── content.ts  # Content model types (StoneSeries, Project, etc.)
├── lib/            # Utility functions and helpers
│   └── filters.ts  # Query building and filtering utilities
├── App.tsx         # Main application component with routing
└── main.tsx        # Application entry point
```

## Types and Models

The application uses strongly-typed content models defined in `src/types/content.ts`:

- **StoneSeries**: Stone collection information with specs, gallery, and availability
- **Project**: Completed project showcases with location, industry, and stone usage
- **Asset**: Media assets used across the application
- **Tag**: Categorization and organization

See the [ARCHITECTURE.md](./ARCHITECTURE.md) for complete documentation.

## Contributing

This project follows minimal change principles. When making modifications:
1. Maintain type safety throughout
2. Follow existing code patterns and conventions
3. Keep components small and focused
4. Run linter and build before committing
5. Update documentation as needed
