# Development Guide - How to Run the Project

This guide provides detailed step-by-step instructions to set up and run the Neuroglass project locally.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation Steps](#installation-steps)
3. [Running the Development Server](#running-the-development-server)
4. [Accessing the Application](#accessing-the-application)
5. [Available Scripts](#available-scripts)
6. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### 1. Node.js
- **Required Version:** Node.js 18 or higher
- **Check if installed:** Open your terminal/PowerShell and run:
  ```bash
  node --version
  ```
- **Install Node.js:** If not installed, download and install from [nodejs.org](https://nodejs.org/)

### 2. pnpm Package Manager
- **Required:** pnpm is the package manager used for this project
- **Check if installed:** Run:
  ```bash
  pnpm --version
  ```
- **Install pnpm:** If not installed, run:
  ```bash
  npm install -g pnpm
  ```
  Or using PowerShell on Windows:
  ```powershell
  npm install -g pnpm
  ```

---

## Installation Steps

### Step 1: Clone/Navigate to the Project

If you have the project already, navigate to the project directory:

```bash
cd /path/to/neuroglass
```

Or if you're cloning from a repository:
```bash
git clone <repository-url>
cd neuroglass
```

### Step 2: Install Project Dependencies

Install all required dependencies using pnpm:

```bash
pnpm install
```

This will:
- Install all npm packages listed in `package.json`
- Create a `node_modules` folder with all dependencies
- Generate necessary lock files

**Expected time:** 2-5 minutes depending on your internet speed

---

## Running the Development Server

### Step 3: Start the Frontend Development Server

Navigate to the project directory and run:

```bash
pnpm dev
```

**What happens:**
- Vite will start the development server
- The server typically starts on `http://localhost:5173`
- You'll see the local URL in the terminal output
- The app will automatically reload when you make changes to the code

**Expected output:**
```
  VITE v6.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

## Accessing the Application

### Step 4: Open in Browser

1. Open your web browser (Chrome, Firefox, Edge, etc.)
2. Navigate to the URL shown in your terminal (usually `http://localhost:5173`)
3. You should see the application homepage

### Step 5: Test Authentication

1. Navigate to `/auth` in your browser or click the auth link
2. Test the authentication flow:
   - Email OTP login/signup (frontend-only mock mode)
   - Anonymous user authentication
3. The auth page is located at `src/pages/Auth.tsx`

**Note:** This is a frontend-only application. Authentication and data storage are handled client-side using localStorage. In production, you would integrate with your backend API.

### Available Routes:
- `/` - Home page
- `/contact` - Contact page
- `/auth` - Authentication page
- `/*` - 404 Not Found page

---

## Available Scripts

Run these commands in the project root directory:

### Development
```bash
pnpm dev
```
Starts the Vite development server with hot-reload.

### Build
```bash
pnpm build
```
Builds the application for production. Outputs to `dist/` folder.

### Preview Production Build
```bash
pnpm preview
```
Preview the production build locally before deploying.

### Linting
```bash
pnpm lint
```
Runs ESLint to check for code quality issues.

### Format Code
```bash
pnpm format
```
Formats all code using Prettier.

---

## Troubleshooting

### Issue: `pnpm: command not found`
**Solution:** Install pnpm globally:
```bash
npm install -g pnpm
```

### Issue: `Cannot find module` errors
**Solution:** Reinstall dependencies:
```bash
rm -rf node_modules
pnpm install
```

### Issue: Port 5173 already in use
**Solution:** Kill the process using the port or use a different port:
```bash
pnpm dev --port 3000
```

### Issue: Environment variables not loading
**Solution:**
1. Ensure the file is named `.env.local` (not `.env`)
2. Restart the dev server after changing environment variables
3. Check that variable names start with `VITE_` for client-side variables

### Issue: TypeScript errors
**Solution:**
1. Run the build command to see all errors:
   ```bash
   pnpm build
   ```
2. Check `tsconfig.json` for configuration issues
3. Ensure all dependencies are installed

### Issue: Authentication not working
**Solution:**
1. This is a frontend-only application using localStorage
2. Clear browser localStorage if you encounter issues:
   ```javascript
   localStorage.clear()
   ```
3. In production, integrate with your backend authentication API

### Issue: CORS errors
**Solution:**
1. Ensure you're accessing the app from the URL shown in the terminal
2. If integrating with a backend API, configure CORS on your backend server

---

## Quick Start Summary

For a quick reference, here's the minimal setup:

```bash
# 1. Install dependencies
pnpm install

# 2. Start frontend development server
pnpm dev

# 3. Open browser to http://localhost:5173
```

---

## Additional Resources

- **Vite Documentation:** [vitejs.dev](https://vitejs.dev/)
- **React Documentation:** [react.dev](https://react.dev/)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com/)
- **Shadcn UI:** [ui.shadcn.com](https://ui.shadcn.com/)

---

## Project Structure

Key directories:
- `src/` - Source code
  - `src/pages/` - Page components
  - `src/components/` - Reusable components
  - `src/components/ui/` - Shadcn UI components
  - `src/hooks/` - Custom React hooks
  - `src/assets/` - Static assets (images, fonts, etc.)
- `public/` - Public static assets

---

## Frontend-Only Notes

This is a **frontend-only application**. The following features work client-side:

- **Authentication:** Uses localStorage for session management (mock mode)
- **Contact Forms:** Data is stored in localStorage (for demo purposes)
- **User Data:** Stored in browser localStorage

**For Production:**
- Integrate with your backend API for authentication
- Connect contact forms to your backend service
- Replace localStorage with proper backend data storage

---

## Need Help?

If you encounter issues not covered in this guide:
1. Check the main `README.md` for project conventions
2. Review error messages in the terminal carefully
3. Verify all prerequisites are installed correctly

---

**Happy Coding! 🚀**
