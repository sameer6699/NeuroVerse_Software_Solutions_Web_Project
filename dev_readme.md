# Development Guide - How to Run the Project

This guide provides detailed step-by-step instructions to set up and run the Neuroglass project locally.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation Steps](#installation-steps)
3. [Environment Variables Setup](#environment-variables-setup)
4. [Running the Development Server](#running-the-development-server)
5. [Running Convex Backend](#running-convex-backend)
6. [Accessing the Application](#accessing-the-application)
7. [Available Scripts](#available-scripts)
8. [Troubleshooting](#troubleshooting)

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

### 3. Convex CLI (for backend)
- **Install Convex CLI:** Run:
  ```bash
  npm install -g convex
  ```
  Or:
  ```bash
  pnpm add -g convex
  ```

---

## Installation Steps

### Step 1: Clone/Navigate to the Project

If you have the project already, navigate to the project directory:

```bash
cd D:\project\neuroglass
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

## Environment Variables Setup

The project requires environment variables to connect to the Convex backend.

### Step 3: Create Environment File

Create a `.env.local` file in the root directory of the project (same level as `package.json`).

**On Windows PowerShell:**
```powershell
New-Item -Path .env.local -ItemType File
```

**On Windows Command Prompt:**
```cmd
type nul > .env.local
```

**On Linux/Mac:**
```bash
touch .env.local
```

### Step 4: Configure Environment Variables

Open the `.env.local` file and add the following variables:

```env
VITE_CONVEX_URL=your_convex_url_here
CONVEX_DEPLOYMENT=your_deployment_id_here
```

**Where to find these values:**

1. **If using an existing Convex deployment:**
   - Check your Convex dashboard at [dashboard.convex.dev](https://dashboard.convex.dev)
   - Find your deployment URL and deployment ID

2. **If setting up a new Convex project:**
   - Run `npx convex dev` (see Step 5 below)
   - This will prompt you to create a new project or use an existing one
   - The Convex CLI will provide you with the necessary URL

### Example `.env.local` file:
```env
VITE_CONVEX_URL=https://your-project.convex.cloud
CONVEX_DEPLOYMENT=your-deployment-id-abc123
```

**Important:** 
- Never commit `.env.local` to version control (it should be in `.gitignore`)
- These are client-side environment variables
- The Convex backend has separate environment variables (configured in Convex dashboard)

---

## Running Convex Backend

### Step 5: Start Convex Development Server

The project uses Convex for backend and database. You need to run the Convex development server.

**Option A: Using Convex CLI directly**
```bash
npx convex dev
```

**Option B: If Convex CLI is installed globally**
```bash
convex dev
```

**What happens:**
- If this is your first time, Convex will prompt you to:
  - Login to Convex (or create an account)
  - Create a new project or select an existing one
  - Configure your deployment
- The CLI will watch for changes in `src/convex/` directory
- It will automatically sync your functions to Convex
- You'll see deployment logs in the terminal

**Keep this terminal open** - Convex needs to run continuously in the background.

### Step 6: Configure Convex Backend Environment Variables

If you need to set backend environment variables (like `JWKS`, `JWT_PRIVATE_KEY`, `SITE_URL`), you can do so in the Convex dashboard or using the CLI:

```bash
npx convex env set VARIABLE_NAME "value"
```

Or set multiple variables:
```bash
npx convex env set JWKS "your_jwks_value"
npx convex env set JWT_PRIVATE_KEY "your_private_key"
npx convex env set SITE_URL "http://localhost:5173"
```

---

## Running the Development Server

### Step 7: Start the Frontend Development Server

Open a **new terminal window** (keep the Convex terminal running), navigate to the project directory, and run:

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

### Step 8: Open in Browser

1. Open your web browser (Chrome, Firefox, Edge, etc.)
2. Navigate to the URL shown in your terminal (usually `http://localhost:5173`)
3. You should see the application homepage

### Step 9: Test Authentication

1. Navigate to `/auth` in your browser or click the auth link
2. Test the authentication flow:
   - Email OTP login/signup
   - Anonymous user authentication
3. The auth page is located at `src/pages/Auth.tsx`

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

### Issue: Convex connection errors
**Solution:** 
1. Verify your `.env.local` file has the correct `VITE_CONVEX_URL`
2. Ensure Convex dev server is running (`npx convex dev`)
3. Check that you're logged into Convex:
   ```bash
   npx convex login
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
1. Verify Convex backend is running
2. Check that Convex auth environment variables are set (JWKS, JWT_PRIVATE_KEY, SITE_URL)
3. Ensure the auth configuration files are not modified:
   - `src/convex/auth.config.ts`
   - `src/convex/auth.ts`
   - `src/convex/auth/emailOtp.ts`

### Issue: CORS errors
**Solution:**
1. Verify `VITE_CONVEX_URL` matches your Convex deployment URL
2. Check that SITE_URL in Convex matches your local URL
3. Ensure you're accessing the app from the URL shown in the terminal

---

## Quick Start Summary

For a quick reference, here's the minimal setup:

```bash
# 1. Install dependencies
pnpm install

# 2. Set up environment variables (create .env.local)
# Add: VITE_CONVEX_URL=your_url

# 3. Start Convex backend (in one terminal)
npx convex dev

# 4. Start frontend (in another terminal)
pnpm dev

# 5. Open browser to http://localhost:5173
```

---

## Additional Resources

- **Vite Documentation:** [vitejs.dev](https://vitejs.dev/)
- **React Documentation:** [react.dev](https://react.dev/)
- **Convex Documentation:** [docs.convex.dev](https://docs.convex.dev/)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com/)
- **Shadcn UI:** [ui.shadcn.com](https://ui.shadcn.com/)

---

## Project Structure

Key directories:
- `src/` - Source code
  - `src/pages/` - Page components
  - `src/components/` - Reusable components
  - `src/components/ui/` - Shadcn UI components
  - `src/convex/` - Backend functions and schema
  - `src/hooks/` - Custom React hooks
- `public/` - Static assets
- `.env.local` - Environment variables (create this)

---

## Need Help?

If you encounter issues not covered in this guide:
1. Check the main `README.md` for project conventions
2. Review error messages in the terminal carefully
3. Check the Convex dashboard for backend status
4. Verify all prerequisites are installed correctly

---

**Happy Coding! 🚀**


