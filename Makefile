# Makefile for Vocs documentation project

# Variables
NPM := npm
DOCS_DIR := docs
PAGES_DIR := $(DOCS_DIR)/pages
NODE_MODULES := node_modules
VOCS := $(NODE_MODULES)/.bin/vocs
PORT := 5173

# Default target
.PHONY: all
all: install init build

# Install dependencies
.PHONY: install
install:
	$(NPM) install vocs

# Initialize project structure
.PHONY: init
init:
	mkdir -p $(PAGES_DIR)
	@if [ ! -f "$(PAGES_DIR)/index.mdx" ]; then \
		echo '# Hello, World!\n\n[This is my first page]\n\nWelcome to my docs.' > $(PAGES_DIR)/index.mdx; \
	fi
	@if [ ! -f "package.json" ]; then \
		echo '{\n  "name": "vocs-docs",\n  "version": "0.0.0",\n  "scripts": {\n    "docs:dev": "vocs dev",\n    "docs:build": "vocs build",\n    "docs:preview": "vocs preview"\n  }\n}' > package.json; \
	fi

# Development server
.PHONY: dev
dev:
	$(NPM) run docs:dev

# Build documentation
.PHONY: build
build:
	$(NPM) run docs:build

# Preview built documentation
.PHONY: preview
preview:
	$(NPM) run docs:preview

# Clean build artifacts
.PHONY: clean
clean:
	rm -rf dist
	rm -rf .vocs

# Deep clean (including node_modules)
.PHONY: clean-all
clean-all: clean
	rm -rf $(NODE_MODULES)

# Help target
.PHONY: help
help:
	@echo "Available targets:"
	@echo "  all        - Install dependencies, initialize project, and build docs"
	@echo "  install    - Install required dependencies"
	@echo "  init       - Create project structure and configuration"
	@echo "  dev        - Start development server"
	@echo "  build      - Build documentation site"
	@echo "  preview    - Preview built documentation"
	@echo "  clean      - Remove build artifacts"
	@echo "  clean-all  - Remove all generated files and dependencies"
	@echo "  help       - Show this help message"

push:
	@echo "Pushing to GitHub..."
	git add .
	@read -p "Enter commit message: " commit_msg; \
	git commit -m "$$commit_msg"; \
	git push