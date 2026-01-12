# Khushboo By Noor Arts - Premium Ladies' Clothing Boutique Website

A modern, elegant single-page React application for **Khushboo By Noor Arts**, a premium ladies' clothing boutique specializing in bulk stitched and unstitched women's ethnic wear, located in Azam Market, Lahore, Pakistan.

## 🌟 Features

- **Modern Design**: Elegant, feminine luxury aesthetic with glassmorphism effects and smooth animations
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Dark Mode**: Toggle between light and dark themes for better user experience
- **Smooth Scrolling**: Seamless navigation between sections using react-scroll
- **SEO Optimized**: Complete meta tags, Schema.org markup, and Open Graph tags for better search visibility
- **Performance**: Lazy-loaded images and optimized for fast loading on Pakistani networks
- **Interactive Elements**: Hover effects, micro-animations, and engaging user interactions
- **Contact Form**: Integrated EmailJS for form submissions without backend

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or extract the project**

```bash
cd KhushbuuWebsite
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📧 EmailJS Setup (Contact Form)

The contact form uses EmailJS to send emails without a backend. Follow these steps:

1. **Create an EmailJS account** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Create a service** (Gmail, Outlook, etc.)

3. **Create an email template** with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`

4. **Get your credentials**:
   - Service ID
   - Template ID
   - Public Key

5. **Update the Contact component** (`src/components/Contact.jsx`):

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your service ID
  'YOUR_TEMPLATE_ID',     // Replace with your template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  },
  'YOUR_PUBLIC_KEY'       // Replace with your public key
)
```

Alternatively, you can use environment variables:

1. Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update `Contact.jsx` to use environment variables:

```javascript
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
```

## 🎨 Customization

### Updating Business Information

1. **Contact Details**: Update phone, WhatsApp, and email in:
   - `src/components/Contact.jsx`
   - `src/components/Footer.jsx`
   - `src/components/Location.jsx`

2. **Address**: Update the exact shop number and address in:
   - `src/components/Location.jsx`
   - `src/components/Footer.jsx`
   - `src/components/SEO.jsx` (for Schema markup)

3. **Social Media Links**: Update Instagram, Facebook, and Twitter URLs in:
   - `src/components/Contact.jsx`
   - `src/components/Footer.jsx`
   - `src/components/SEO.jsx`

4. **Operating Hours**: Update in `src/components/Location.jsx` and `src/components/Footer.jsx`

### Replacing Images

1. **Hero Images**: Update the `heroImages` array in `src/components/Hero.jsx`
2. **Collection Images**: Update the `collections` array in `src/components/Collections.jsx`
3. **About Section**: Update the image URL in `src/components/About.jsx`
4. **Brand Logos**: Update the `brands` array in `src/components/Collaborations.jsx`

**Recommended Image Sources:**
- [Unsplash](https://unsplash.com/) - Free high-quality images
- [Pexels](https://www.pexels.com/) - Free stock photos and videos
- Professional photography of your products

### Google Maps Integration

1. **Get your exact location coordinates** from Google Maps
2. **Update the iframe URL** in `src/components/Location.jsx`:
   - Go to Google Maps
   - Find your location
   - Click "Share" → "Embed a map"
   - Copy the iframe code and replace the existing one

3. **Update coordinates** in:
   - `src/components/Location.jsx` (Get Directions link)
   - `src/components/SEO.jsx` (Schema markup geo coordinates)

### Color Scheme

The color palette is defined in `tailwind.config.js`. You can customize:

- `blush-pink`: #F5E1E9
- `ivory`: #FFFFF0
- `magenta`: #D81B60
- `emerald`: #006400
- `gold`: #C9A96E

## 📱 Deployment

### Netlify

1. **Build the project**:
```bash
npm run build
```

2. **Deploy to Netlify**:
   - Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or connect your Git repository for continuous deployment

3. **Configure environment variables** (if using EmailJS):
   - Go to Site settings → Environment variables
   - Add your EmailJS credentials

### Vercel

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Add environment variables** in Vercel dashboard

### GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**:
```json
"homepage": "https://yourusername.github.io/khushboo-by-noor-arts",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. **Deploy**:
```bash
npm run deploy
```

## 🔍 SEO Best Practices

The site includes comprehensive SEO optimization:

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Schema.org JSON-LD markup (LocalBusiness)
- ✅ Semantic HTML structure
- ✅ Alt text for images
- ✅ Sitemap.xml
- ✅ Robots.txt

### Additional SEO Tips

1. **Update meta tags** in `src/components/SEO.jsx` with your actual business details
2. **Add more keywords** relevant to your business
3. **Create an OG image** (1200x630px) and update the image URL in SEO.jsx
4. **Submit sitemap** to Google Search Console
5. **Add Google Analytics** if needed
6. **Optimize images** before uploading (compress, use WebP format)

## 📦 Project Structure

```
KhushbuuWebsite/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Collaborations.jsx
│   │   ├── Collections.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Location.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── SEO.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Scroll** - Smooth scrolling navigation
- **React Slick** - Carousel/slider component
- **React Helmet Async** - SEO meta tags management
- **EmailJS** - Contact form email service
- **React Icons** - Icon library

## 📝 License

This project is created for Khushboo By Noor Arts. All rights reserved.

## 🤝 Support

For questions or support, please contact:
- Email: info@khushboobynoorarts.com
- Phone: +92 300 1234567
- WhatsApp: +92 300 1234567

## 🎯 Future Enhancements

Potential features to add:
- Product detail modals
- Image gallery with lightbox
- Blog section for fashion tips
- Newsletter subscription
- Customer testimonials section
- Multi-language support (Urdu/English)
- WhatsApp quick order feature

---

**Built with ❤️ for Khushboo By Noor Arts**

*The Fragrance of Elegance – Bulk Stitched & Unstitched Ladies' Wear from Azam Market, Lahore*
