# Cloudflare Pages Deployment Guide

This guide will help you deploy your Next.js portfolio to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account (free tier works)
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Step 1: Install Required Dependencies

Install the Cloudflare adapter for Next.js:

```bash
npm install --save-dev @cloudflare/next-on-pages wrangler
```

## Step 2: Build Configuration

The project is already configured with:
- `next.config.ts` - Next.js configuration
- `wrangler.toml` - Cloudflare Pages configuration
- Build scripts in `package.json`

## Step 3: Deploy via Cloudflare Dashboard (Recommended)

### Option A: Connect via Git Repository

1. **Log in to Cloudflare Dashboard**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**

2. **Connect Your Repository**
   - Select your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Cloudflare to access your repositories
   - Select the `danilo04-portafolio` repository

3. **Configure Build Settings**
   - **Framework preset**: `Next.js (Static HTML Export)` or `None`
   - **Build command**: `npm run pages:build`
   - **Build output directory**: `.vercel/output/static`
   - **Root directory**: `/` (or leave empty)
   - **Node.js version**: `18` or `20`

4. **Environment Variables** (if needed)
   - Add any environment variables your app requires
   - Click **Save and Deploy**

### Option B: Deploy via Wrangler CLI

1. **Install Wrangler globally** (if not already installed):
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**:
   ```bash
   npx wrangler login
   ```

3. **Build and Deploy**:
   ```bash
   npm run pages:build
   npx wrangler pages deploy .vercel/output/static --project-name=danilo04-portafolio
   ```

   Or use the combined script:
   ```bash
   npm run pages:deploy
   ```

## Step 4: Custom Domain (Optional)

1. In Cloudflare Pages dashboard, go to your project
2. Click **Custom domains**
3. Add your domain and follow DNS configuration instructions

## Local Development with Cloudflare

To test your build locally with Cloudflare Pages:

```bash
npm run pages:build
npm run preview
```

This will start a local server that mimics Cloudflare Pages environment.

## Troubleshooting

### Build Fails

- Ensure Node.js version is 18+ in Cloudflare Pages settings
- Check that all dependencies are listed in `package.json`
- Review build logs in Cloudflare dashboard

### API Routes Not Working

- Cloudflare Pages supports Next.js API routes through the adapter
- Ensure `@cloudflare/next-on-pages` is installed
- Check that your API routes are compatible with Cloudflare Workers runtime

### Static Assets Not Loading

- Verify `public/` folder is included in the build
- Check that asset paths are relative, not absolute

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [@cloudflare/next-on-pages GitHub](https://github.com/cloudflare/next-on-pages)

## Notes

- Cloudflare Pages provides free SSL certificates
- Global CDN is included automatically
- Preview deployments are created for every pull request
- Custom domains are free

