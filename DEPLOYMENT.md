# Deployment Guide

This guide provides step-by-step instructions for deploying the Khushboo By Noor Arts website to various platforms.

## Pre-Deployment Checklist

- [done ] Update all business information (phone, email, address, social media links)
- [done ] Replace placeholder images with actual product photos
- [pending ] Configure EmailJS for contact form
- [ done] Update Google Maps embed with exact location
- [ done ] Test all links and functionality
- [ pending ] Optimize images for web (compress, use WebP format)
- [ ] Update SEO meta tags with actual business details
- [ ] Create OG image (1200x630px) for social sharing

## Build the Project

Before deploying, build the production version:

```bash
npm run build
```

This creates an optimized `dist` folder ready for deployment.

## Deployment Options

### Option 1: Netlify (Recommended)

**Pros**: Easy drag-and-drop, free SSL, automatic deployments, form handling

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy via Netlify Drop**:
   - Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder
   - Your site will be live in seconds!

3. **Or connect Git repository**:
   - Sign up/login to Netlify
   - Click "New site from Git"
   - Connect your repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Configure Environment Variables** (for EmailJS):
   - Go to Site settings → Environment variables
   - Add:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`
   - Redeploy the site

5. **Custom Domain** (optional):
   - Go to Domain settings
   - Add your custom domain
   - Follow DNS configuration instructions

### Option 2: Vercel

**Pros**: Fast global CDN, automatic HTTPS, great for React apps

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow prompts**:
   - Set up and deploy? Yes
   - Which scope? Your account
   - Link to existing project? No
   - Project name: khushboo-by-noor-arts
   - Directory: `./`
   - Override settings? No

5. **Configure Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add EmailJS credentials
   - Redeploy

### Option 3: GitHub Pages

**Pros**: Free hosting, integrates with GitHub

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/khushboo-by-noor-arts",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: gh-pages branch
   - Save

### Option 4: Traditional Web Hosting (cPanel, etc.)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload contents of `dist` folder** to your web hosting:
   - Via FTP (FileZilla, etc.)
   - Or via cPanel File Manager

3. **Upload to public_html or www folder**

4. **Configure .htaccess** (for Apache servers):
   Create `.htaccess` in the root with:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## Post-Deployment

### 1. Test Everything

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact form submits successfully
- [ ] All images load
- [ ] Mobile responsiveness works
- [ ] Dark mode toggle works
- [ ] Google Maps displays correctly

### 2. SEO Setup

1. **Submit to Google Search Console**:
   - Add your site
   - Verify ownership
   - Submit sitemap: `https://yoursite.com/sitemap.xml`

2. **Submit to Bing Webmaster Tools**:
   - Add your site
   - Verify ownership
   - Submit sitemap

3. **Test Social Sharing**:
   - Use [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - Test Open Graph tags

### 3. Analytics (Optional)

Add Google Analytics:

1. Create account at [Google Analytics](https://analytics.google.com/)
2. Get tracking ID
3. Add to `index.html` before `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### 4. Performance Optimization

- [ ] Enable Gzip compression on server
- [ ] Set up CDN (Cloudflare, etc.)
- [ ] Optimize images (use WebP, compress)
- [ ] Enable browser caching
- [ ] Test with [PageSpeed Insights](https://pagespeed.web.dev/)

## Troubleshooting

### Contact Form Not Working

- Check EmailJS credentials are correct
- Verify environment variables are set in deployment platform
- Check browser console for errors
- Ensure EmailJS service is active

### Images Not Loading

- Check image URLs are correct
- Verify images are uploaded to correct paths
- Check CORS settings if using external images

### Routing Issues (404 on refresh)

- Ensure server is configured for SPA routing
- Add `.htaccess` for Apache (see above)
- Configure redirects in Netlify/Vercel settings

### Build Errors

- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (v16+ required)
- Review error messages in terminal

## Support

For deployment issues, refer to:
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
