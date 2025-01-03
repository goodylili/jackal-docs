# Jackal Protocol Documentation

Welcome to the Jackal Documentation! Here, you'll explore a secure, user-friendly, and self-custodial digital ecosystem.
Whether you're looking to dive into the protocol, build innovative applications with Jackal storage, or simply satisfy
your curiosity, you've come to the right place.

This documentation is built with [Vocs](https://vocs.dev) - a modern, React-based static documentation
generator powered by Vite. Vocs's documentation system is designed to be maintainable, extensible, and developer-friendly.

## Installation

Clone this repository and install dependencies:

```bash
git clone https://github.com/JackalLabs/book.git
cd book
npm i vocs
```

Then add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "docs:dev": "vocs dev",
    "docs:build": "vocs build",
    "docs:preview": "vocs preview"
  }
}
```

To start the development server, run:

```bash
npm run docs:dev
```

This will launch the documentation site at [http://localhost:5173](http://localhost:5173).

### Building for Production

To build the documentation for production:

```bash
npm run docs:build
```

To preview the production build:

```bash
npm run docs:preview
```

## Project Structure

```
.
├── docs/
│   └── pages/
│       └── index.mdx    # Main documentation page
├── package.json        # Project configuration
└── README.md          # This file
```

## Available Commands

The following commands are available for working with the documentation:

| Command                | Description                                |
|-----------------------|--------------------------------------------|
| `npm run docs:dev`    | Start the development server               |
| `npm run docs:build`  | Build the documentation site               |
| `npm run docs:preview`| Preview the built documentation            |

## Contributing

We welcome contributions to improve our documentation! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed
guidelines on how to:

- Submit changes
- Set up your development environment
- Follow our writing style and file organization guidelines
- Troubleshoot common issues

## License

[Add your license information here]

## Contact

[Add your contact information here]

---

Built with [Vocs](https://vocs.dev) 📚