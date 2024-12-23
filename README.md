# Dalog TODO APP

Developed by Sergio Andres Oquendo

## Overview

This Todo Application implements basic CRUD functionality on “todos”:

- Add new todos
- Edit todo title
- Remove todos
- Mark them as Todo, Doing, or Done

## Architecture and Technology Choices

- React 18
- TypeScript
- Vite
- Zustand: Manage global state
- JSON Server: Works as a fake REST API to manage todos

### UI Components

- Shadcn + Radix UI Components
- Tailwind CSS
- Motion: For transitions and AnimatePresence when adding/removing items

## Run Locally

Clone the project

```bash
  git clone https://github.com/darkseid7/dalog-test-todo.git
```

Go to the project directory

```bash
  cd dalog-test-todo
```

Install dependencies

```bash
  npm install
```

## Start the APP and the Mock Server

Start json-server

```bash
    npm run json-server
```

Start the development server (Vite)

```bash
  npm run dev
```
