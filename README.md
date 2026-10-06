# Talha AI

An AI-powered coding assistant with support for CLI, Ask, Plan, and Agent modes.

## Installation

### Install from NPM (Recommended)

```bash
npm install -g talha-ai
```

### Or Clone from GitHub

```bash
git clone https://github.com/realTalha/Talha-AI.git
cd Talha-AI
npm install
npm run build
```

## Setup

Create a `.env` file in your home directory or project root:

```env
OPENROUTER_API_KEY=your_api_key_here
OPENROUTER_DEFAULT_MODEL=openai/gpt-4o-mini
```

**Get your free OpenRouter API key:** https://openrouter.ai/keys

## Usage

### Run the application

```bash
talha-ai wakeup
```

Or if installed locally:

```bash
npm run wakeup
```

### Available Modes

- **Agent Mode** 🤖 - Full autonomous coding agent with approval workflow
- **Plan Mode** 📋 - Generate and execute step-by-step plans
- **Ask Mode** 💬 - Question-answering mode with web search capabilities

## Environment Variables

Create a `.env` file in the root directory:

```env
OPENROUTER_API_KEY=your_api_key_here
OPENROUTER_DEFAULT_MODEL=openai/gpt-4o-mini
FIRECRAWL_API_KEY=your_firecrawl_key_here  # Optional, for web search in Plan mode
```

## Development Scripts

- `npm run build` - Compile TypeScript
- `npm run dev` - Build and run the application
- `npm start` - Run the compiled application
- `npm run wakeup` - Build and run the wakeup command

## About

Talha AI is your personal AI coding assistant that can analyze, modify, and interact with your codebase through natural language commands.

## Project Structure

```
.
├── ai/                 # AI model configuration
├── modes/
│   ├── agent/         # Agent mode implementation
│   ├── ask/           # Ask mode implementation
│   ├── plan/          # Plan mode implementation
│   └── cli.ts         # CLI mode orchestrator
├── tui/               # Terminal UI utilities
├── index.ts           # Main entry point
└── dist/              # Compiled JavaScript (after build)
```

## What is Talha AI?

Talha AI is an AI agent framework that acts as an intelligent coding assistant. It can:
- 💬 Answer questions about your codebase (Ask Mode)
- ✍️ Automatically modify code with approval workflow (Agent Mode)
- 📋 Generate and execute step-by-step plans (Plan Mode)

Think of it as your personal AI developer that understands your code and can help you build features, refactor code, and answer technical questions - all through an interactive CLI interface.

