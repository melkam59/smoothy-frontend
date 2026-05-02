# Smoothy Frontend (smoothy-fe)

Smoothy Frontend is a modern TypeScript monorepo built using Turborepo. It powers the user interfaces for the Smoothy platform, including the main web application, admin dashboard, and vendor portal.

## Features

- **Turborepo** - High-performance build system for TypeScript monorepos
- **Next.js** - React framework for production (App Router)
- **TailwindCSS** - Utility-first CSS framework
- **Shared UI package** - `shadcn/ui` based component library
- **Biome** - Fast formatter and linter
- **Lefthook** - Fast and powerful Git hooks manager
- **Docker** - Containerized deployment support

## Project Structure

```text
smoothy-fe/
├── apps/
│   ├── admin/       # Internal administrator dashboard (Next.js)
│   ├── vendor/      # Vendor management portal (Next.js)
│   └── web/         # Main customer-facing application (Next.js)
├── packages/
│   ├── api-client/  # API client generation and utilities
│   ├── auth-client/ # Authentication client logic
│   ├── config/      # Shared configurations (TS, Vitest, etc.)
│   ├── env/         # Environment variable validation
│   ├── hooks/       # Shared React hooks
│   ├── i18n/        # Internationalization utilities
│   ├── test-utils/  # Testing utilities and fixtures
│   ├── types/       # Shared TypeScript definitions
│   ├── ui/          # Shared shadcn/ui components and styles
│   ├── utils/       # Shared utility functions
│   └── validators/  # Zod schemas and validation logic
└── tooling/         # Workspace scripts and tooling
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (Package manager)
- Docker (Optional, for containerized development/deployment)

### Installation

First, install the dependencies from the root directory:

```bash
bun install
```

### Development Server

To run the development server for all apps concurrently:

```bash
bun run dev
```

### UI Customization

React web apps in this stack share `shadcn/ui` primitives through the `packages/ui` package.

- Change design tokens and global styles in `packages/ui/src/styles/globals.css`
- Update shared primitives in `packages/ui/src/components/*`
- Adjust shadcn aliases or style config in `packages/ui/components.json`

#### Add more shared components

Run this from the project root to add more primitives to the shared UI package:

```bash
npx shadcn@latest add accordion dialog popover sheet table -c packages/ui
```

Import shared components into apps like this:

```tsx
import { Button } from "@smoothy-fe/ui/components/button";
```

## Available Scripts

- `bun run dev`: Start all applications in development mode
- `bun run build`: Build all applications
- `bun run check-types`: Check TypeScript types across all apps
- `bun run lint`: Run Biome linter across the workspace
- `bun run format`: Run Biome formatter across the workspace
