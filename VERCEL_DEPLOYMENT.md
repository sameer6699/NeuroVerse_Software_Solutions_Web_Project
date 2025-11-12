# Vercel Deployment Guide

This guide will help you deploy your NeuroVerse project to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)
3. Your Convex deployment URL ready

## Deployment Steps

### 1. Connect Your Repository to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will automatically detect it's a Vite project

### 2. Configure Build Settings

Vercel should auto-detect these settings from `vercel.json`, but verify:

- **Framework Preset:** Vite
- **Build Command:** `pnpm build`
- **Output Directory:** `dist`
- **Install Command:** `pnpm install`
- **Root Directory:** `./` (leave as default)

### 3. Set Environment Variables

In your Vercel project settings, go to **Settings → Environment Variables** and add:

#### Required Environment Variables:

```
VITE_CONVEX_URL=your_convex_deployment_url_here
```

**Example:**
```
VITE_CONVEX_URL=https://your-project.convex.cloud
```

#### How to find your Convex URL:

1. Go to your [Convex Dashboard](https://dashboard.convex.dev)
2. Select your project
3. Copy the deployment URL from the dashboard
4. Paste it as the value for `VITE_CONVEX_URL`

### 4. Deploy

1. Click "Deploy" in Vercel
2. Wait for the build to complete
3. Your site will be live at `your-project.vercel.app`

## Important Notes

### SPA Routing

The `vercel.json` file includes a rewrite rule that ensures all routes serve `index.html`. This is essential for React Router to work correctly. All client-side routes (like `/products`, `/careers`, etc.) will work properly.

### Environment Variables

- **Never commit** `.env.local` files to Git
- All environment variables must be set in Vercel's dashboard
- Variables starting with `VITE_` are exposed to the client-side code
- After adding/changing environment variables, you need to redeploy

### Convex Backend

- Make sure your Convex deployment is active
- Update Convex environment variables if needed (like `SITE_URL` to match your Vercel domain)
- The Convex backend runs separately from Vercel

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to **Domains**
3. Add your custom domain
4. Follow the DNS configuration instructions

## Build Configuration

### Build Scripts Warning (Fixed)

The project includes `.npmrc` configuration to allow build scripts from:
- `@tailwindcss/oxide` - Required for Tailwind CSS v4
- `esbuild` - Required for Vite builds

These are automatically allowed via the `.npmrc` file, so you won't see the "Ignored build scripts" warning.

### Chunk Size Warning (Fixed)

The `vite.config.ts` includes optimized chunk splitting and increased chunk size warning limit (1000kb) to prevent warnings during build. Large dependencies are automatically split into separate chunks for better caching.

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json`
- Verify the build command works locally: `pnpm build`
- Check build logs in Vercel dashboard for specific errors
- Ensure `.npmrc` file is committed to your repository

### Routes Return 404

- Verify `vercel.json` is in the root directory
- Check that the rewrite rule is correct
- Ensure you're using client-side routing (React Router)

### Environment Variables Not Working

- Make sure variable names start with `VITE_` for client-side variables
- Redeploy after adding/changing environment variables
- Check that variables are set for the correct environment (Production, Preview, Development)

### Convex Connection Issues

- Verify `VITE_CONVEX_URL` is set correctly in Vercel
- Check that your Convex deployment is active
- Update Convex `SITE_URL` environment variable to match your Vercel domain

## Post-Deployment Checklist

- [ ] Test all routes work correctly
- [ ] Verify environment variables are set
- [ ] Test authentication flow
- [ ] Check that Convex backend is accessible
- [ ] Test on mobile devices
- [ ] Set up custom domain (if needed)
- [ ] Configure analytics (optional)

## Continuous Deployment

Once connected, Vercel will automatically deploy:
- Every push to the main/master branch → Production
- Every pull request → Preview deployment
- Every push to other branches → Preview deployment

## Support

For more information:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
- [Convex Documentation](https://docs.convex.dev)

