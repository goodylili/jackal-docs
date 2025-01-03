# Contributing to Our Documentation

Thank you for your interest in contributing to our documentation! This guide will help you get started with contributing and make sure it's a smooth collaboration.

## Getting Started

1. Fork the repository.
2. Create a new branch for your changes:

```bash
   git checkout -b feature/your-feature-name
```

3. Make your changes to the documentation.
4. Test your changes locally using `make dev`
5. Submit a pull request.

## Development Environment Setup

1. Ensure you have all prerequisites installed:
    - Node.js (v14 or higher).
    - npm, yarn, or bun.
    - Make.

2. Clone your forked repository:

   ```bash
   git clone <your-forked-repo-url>
   cd <repo-name>
   ```

3. Set up the development environment:

```bash
    npm i vocs
    npm run docs:dev
```

## Writing Guidelines

### Style Guide

- Write in clear, concise language.
- Use active voice.
- Keep sentences and paragraphs short and focused.
- Use headings and subheadings to organize content.
- Include relevant examples and code snippets.

### Markdown Formatting

- Use proper Markdown syntax.
- Include code examples where appropriate:
- Use appropriate heading levels (start with h2 `##`).
- Add alt text to images.
- Link to other relevant documentation pages.

### Code Examples

- Test all code examples thoroughly.
- Include comments explaining complex logic.
- Use consistent formatting.
- Provide context for when and how to use the code.

## File Organization

### Directory Structure

- Place all documentation pages in the `docs/pages` directory.
- Use meaningful file names that reflect the content.
- Maintain a logical hierarchy in the documentation structure.

### File Naming Conventions

- Use kebab-case for file names (e.g., `getting-started.md`).
- Group related files in subdirectories.
- Include relevant extensions (`.md`, `.mdx`).

## Troubleshooting

If you encounter issues during development:

1. Reinstall dependencies.
2. Reinitialize the project.
3. Start the development server.

If problems persist:
- Check the [Vocs documentation](https://vocs.dev).
- Search existing issues in our repository.
- Open a new issue with:
    - A clear description of the problem.
    - Steps to reproduce.
    - Expected vs. actual behavior.
    - Your environment details.

## Pull Request Process

1. Update the documentation.
2. Test your changes locally.
3. Push to your fork.
4. Submit a pull request with:
    - Clear description of changes.
    - Screenshots (if applicable).
    - Reference to any related issues.

## Need Help?

If you need help with anything:
- Check our documentation.
- Search existing issues.
- Open a new issue.
- Contact the maintainers.

Thank you for contributing to making our documentation better!
