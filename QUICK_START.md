# Quick Start Guide

Get your Khushboo By Noor Arts website up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Start Development Server

```bash
npm run dev
```

Your site will open at `http://localhost:3000`

## Step 3: Customize Your Information

### Essential Updates (Before Going Live)

1. **Contact Information** - Update in these files:
   - `src/components/Contact.jsx` (lines 60-80)
   - `src/components/Footer.jsx` (lines 50-70)
   - `src/components/Location.jsx` (line 61)

2. **Address** - Update shop number:
   - `src/components/Location.jsx` (line 61)
   - `src/components/Footer.jsx` (line 50)
   - `src/components/SEO.jsx` (line 30)

3. **Social Media Links** - Update URLs:
   - `src/components/Contact.jsx` (lines 50-54)
   - `src/components/Footer.jsx` (lines 20-24)
   - `src/components/SEO.jsx` (line 60)

4. **Google Maps** - Get your exact location:
   - Go to Google Maps
   - Find your shop location
   - Click "Share" → "Embed a map"
   - Copy iframe code
   - Replace in `src/components/Location.jsx` (line 32)

5. **EmailJS Setup** (For Contact Form):
   - Sign up at [emailjs.com](https://www.emailjs.com/)
   - Create service and template
   - Create `.env` file:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

## Step 4: Replace Images

1. **Hero Images**: `src/components/Hero.jsx` (lines 21-27)
2. **Collection Images**: `src/components/Collections.jsx` (lines 15-80)
3. **About Image**: `src/components/About.jsx` (line 20)
4. **Brand Logos**: `src/components/Collaborations.jsx` (lines 8-40)

**Tip**: Use high-quality images (1920px width for hero, 800px for collections)

## Step 5: Build & Deploy

```bash
npm run build
```

Then deploy the `dist` folder to:
- **Netlify**: Drag & drop `dist` folder
- **Vercel**: Run `vercel` command
- **GitHub Pages**: Run `npm run deploy`

## That's It! 🎉

Your website is ready. For detailed instructions, see:
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Deployment guide

## Need Help?

- Check the console for errors
- Review component files for comments
- See README.md for detailed explanations
