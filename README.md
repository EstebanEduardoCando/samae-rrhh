# SAMAE RRHH

## Initial Commit

This project was initialized on July 24, 2025. The initial commit includes:

- Basic project structure setup
- Core dependencies configuration
- Initial README documentation

### Project Description
SAMAE RRHH is a Human Resources Management System designed to streamline HR processes and employee management.

---

## Frontend Setup

The `hr-app` directory contains a simple React + TypeScript frontend built with Vite.
To start developing:

```bash
cd hr-app
npm install
echo "PORT=5173" > .env
npm run dev
```

The dev server reads the port from a `.env` file. By default it runs on port 5173.
This repository defines `/login` as a public route and `/dashboard` as a private route.

