# Jackal Protocol Documentation

Welcome to the Jackal Documentation! Here, you'll explore a secure, user-friendly, and self-custodial digital ecosystem.
Whether you're looking to dive into the protocol, build innovative applications with Jackal storage, or simply satisfy
your curiosity, you've come to the right place.

This documentation is built with [Vocs](https://vocs.dev) - a modern, React-based static documentation
generator powered by Vite. Vocs's documentation system is designed to be maintainable, extensible, and developer-friendly.

Furthermore, we've simplified the commands over a Makefile. Here's how you can get started interacting with the docs in development.

## Installation

Clone this repository and install dependencies:

```bash
git clone https://github.com/JackalLabs/book.git
cd book.
make install
```

To start the development server, run:

```bash
make dev
```

This will launch the documentation site at [http://localhost:5173](http://localhost:5173). 

### Building for Production

To build the documentation for production:

```bash
make build
```

To preview the production build:

```bash
make preview
```

## Project Structure

```
.
├── docs/
│   └── pages/
│       └── index.mdx    # Main documentation page
├── Makefile            # Build automation
├── package.json        # Project configuration
└── README.md          # This file
```

## Available Make Commands

Our Makefile provides several useful commands to help you work with the documentation:

| Command          | Description                                |
|------------------|--------------------------------------------|
| `make all`       | Complete setup (install, init, build)      |
| `make install`   | Install project dependencies               |
| `make init`      | Create project structure and initial files |
| `make dev`       | Start development server                   |
| `make build`     | Build documentation site                   |
| `make preview`   | Preview built documentation                |
| `make clean`     | Remove build artifacts                     |
| `make clean-all` | Deep clean (including node_modules)        |
| `make help`      | Show available commands                    |

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