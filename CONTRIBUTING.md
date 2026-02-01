# Contributing to Focused Writer

Thank you for your interest in contributing to Focused Writer! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful, inclusive, and professional in all interactions.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/YOUR_USERNAME/focused-writer/issues)
2. If not, create a new issue using the bug report template
3. Provide detailed information: steps to reproduce, expected vs actual behavior, screenshots if applicable

### Suggesting Features

1. Check if the feature has already been suggested
2. Create a new issue using the feature request template
3. Explain the feature, its benefits, and potential implementation

### Pull Requests

1. Fork the repository
2. Create a new branch from `develop`:
   ```bash
   git checkout -p develop
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following our coding standards
4. Commit using conventional commits:
   ```
   feat(editor): add focus mode paragraph centering
   fix(encryption): resolve decryption error on large files
   docs(readme): update installation instructions
   ```
5. Push to your fork and create a pull request to `develop`

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/focused-writer.git
cd focused-writer

# Install dependencies
npm install

# Run development server
npm run dev

# Run linter
npm run lint
```

## Coding Standards

### TypeScript
- Use TypeScript for all new code
- Enable strict mode
- Provide proper type annotations

### Code Style
- Follow ESLint configuration
- Use Prettier for formatting
- 2 spaces for indentation
- Single quotes for strings

### Components
- Use functional components with hooks
- Follow shadcn/ui patterns for UI components
- Keep components focused and reusable
- Add proper TypeScript types

### Naming Conventions
- Components: PascalCase (e.g., `EditorComponent.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_FILE_SIZE`)

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(editor): implement focus mode
fix(storage): handle IndexedDB quota errors
docs(security): document encryption model
```

## Branch Strategy

- `main`: Production branch (protected)
- `develop`: Development branch
- `feature/*`: Feature branches
- `bugfix/*`: Bug fix branches
- `release/*`: Release preparation branches

## Testing

- Test your changes thoroughly
- Ensure the app builds successfully: `npm run build`
- Check for TypeScript errors: `npx tsc --noEmit`
- Run linter: `npm run lint`

## Questions?

Feel free to ask questions by opening an issue with the "question" label.

Thank you for contributing! 🎉
