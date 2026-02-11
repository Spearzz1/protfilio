# Deployment Steps for Portfolio

This guide explains how to deploy your portfolio to Vercel.

## Prerequisites

- **GitHub Account**: You need a GitHub account to host your code.
- **Vercel Account**: You need a Vercel account linked to your GitHub.
- **Vercel CLI (Optional)**: Useful for debugging, but not strict required if deploying via Git integration.

## Steps

1.  **Push to GitHub**:
    - Ensure your latest changes are committed and pushed to your GitHub repository.
    - `git add .`
    - `git commit -m "Fix deployment config"`
    - `git push origin main`

2.  **Import to Vercel**:
    - Go to https://vercel.com/new
    - Select your `portfolio` repository.
    - Vercel should automatically detect **Vite** as the framework.
    - **Build Command**: `npm run build` (or `vite build`)
    - **Output Directory**: `dist`
    - **Install Command**: `npm install`

3.  **Environment Variables**:
    - If you are using Firebase, ensure you add your Firebase configuration variables in the Vercel project settings (Settings > Environment Variables).
    - Refer to `.env.example` or your local `.env` file for the required variable names.

4.  **Deploy**:
    - Click **Deploy**.
    - Vercel will build your project and deploy it.

## Troubleshooting

-   **404 on Refresh**: This is fixed by the `vercel.json` file we added, which rewrites all routes to `index.html`.
-   **Build Errors**: Run `npm run build` locally to see if there are any TypeScript or linting errors before pushing.
