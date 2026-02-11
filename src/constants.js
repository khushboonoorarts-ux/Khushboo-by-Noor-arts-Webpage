// Business Information
export const BUSINESS_NAME = 'Khushboo By Noor Arts'
export const TAGLINE = 'The Fragrance of Elegance'
export const BUSINESS_DESCRIPTION = 'Bulk Stitched & Unstitched Ladies\' Wear from Azam Market, Lahore'

// Contact Information
export const CONTACT = {
  phone: '+92 321 4757537',
  whatsapp: '923214757537',
  email: 'Khushboobynoorarts@gmail.com',
  address: {
    shopNumber: 'Shop No. [6 A]',
    street: 'Chuna Mandi chowk',
    city: 'Azam Market Lahore',
    province: 'Punjab',
    country: 'Pakistan',
    full: 'Shop No. [6 A], Chuna Mandi chowk, Azam Market Lahore, Punjab, Pakistan',
    directions: 'Near Ichhra Bazaar, accessible from Mall Road',
  },
  hours: {
    daily: '11:00 AM - 8:00 PM',
    description: 'Open all week including weekends',
  },
  coordinates: {
    lat: 31.585597405768794,
    lng: 74.32015053553629,
  },
}

// Social Media Links
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/khusboobynoorarts?utm_source=qr&igsh=MWp2YzBydng2ZWcwMQ==',
  facebook: 'https://www.facebook.com/share/1D5H2MNb1F/',
  twitter: 'https://x.com/KhusbooA20985',
  tiktok: 'https://www.tiktok.com/@noor_artss?_r=1&_t=ZS-932cfF7jrJy',
}

// Navigation Items
export const NAV_ITEMS = [
  { name: 'Home', to: 'hero' },
  { name: 'Bulk Offerings', to: 'bulk-offerings' },
  { name: 'About', to: 'about' },
  { name: 'Collaborations', to: 'collaborations' },
  { name: 'Location', to: 'location' },
  { name: 'Contact', to: 'contact' },
]

// Hero Section
export const HERO = {
  tagline: 'The Fragrance of Elegance',
  description: 'Bulk Stitched & Unstitched Ladies\' Wear from Azam Market, Lahore',
  buttonText: 'Contact Us',
  buttonLink: 'contact',
  images: [
    '/assets/Hero-sec-img-3.webp',
    '/assets/Hero-sec-img-2.webp',
    '/assets/Hero-sec-img-1.webp',
    '/assets/Hero-sec-img-4.webp',
    '/assets/Hero-sec-img-5.webp',
  ],
}

// About Section
export const ABOUT = {
  heading: 'About Us <br /> Khushboo By Noor Arts',
  content: [
    {
      paragraph: `Welcome to <strong>Khushboo By Noor Arts</strong>, a family-owned boutique nestled in the vibrant heart of Azam Market, Lahore. For years, we have been dedicated to providing premium bulk supplies of stitched and unstitched ladies' clothing to wholesale buyers and fashion enthusiasts.`,
    },
    {
      paragraph: `Our passion lies in curating high-quality ethnic wear that celebrates the rich heritage of Pakistani fashion. From intricately embroidered lawn suits to elegant organza kurtas, from traditional shalwar kameez to festive collections, we offer an extensive range that caters to every occasion and style.`,
    },
    {
      paragraph: `What sets us apart is our commitment to <strong>affordability without compromising on quality</strong>. We understand the needs of bulk buyers and ensure that every piece reflects the intricate craftsmanship and attention to detail that Pakistani fashion is renowned for.`,
    },

  ],
  metrics: [
    { value: '10000', label: 'Happy Customers', suffix: '+' },
    { value: '6000', label: 'Products Available', suffix: '+' },
  ],
  image: '/assets/about-image.jpeg',
}

// Bulk Offerings Section
export const BULK_OFFERINGS = {
  heading: 'Our Bulk Offerings',
  description: 'Specializing in high-quality bulk stitched and unstitched ladies\' wear, we provide a diverse range of exquisite designs and premium fabrics for wholesale buyers.',
  offerings: [
    {
      title: 'Stitched Elegance',
      description: 'Ready-to-wear outfits crafted with precision and intricate designs, perfect for immediate retail.',
      image: '/assets/bulkofering-stitched.webp',
    },
    {
      title: 'Unstitched Masterpieces',
      description: 'Premium fabrics and embroidered sets, offering versatility for custom tailoring and bulk purchases.',
      image: '/assets/Unstiched-bg.webp',
    },
    {
      title: 'Diverse Fabric Range',
      description: 'A wide selection of high-quality fabrics including lawn, organza, silk, and cotton for all seasons.',
      image: '/assets/bulkofering-fabric.webp',
    },
  ],
  cta: {
    text: 'Ready to explore our wholesale options or have a custom inquiry?',
    buttonText: 'Inquire Now',
    link: '#contact',
  },
}

// Collaborations Section
export const COLLABORATIONS = {
  heading: 'Our Esteemed Collaborators',
  description: 'We proudly partner with leading fashion brands, providing bulk supplies for their exquisite stitched and unstitched collections.',
  brands: [
    { name: 'Khaadi', description: 'Exclusive bulk supplier for Khaadi designs.', logo: '/assets/brand-logo-1.png' },
    { name: 'Sana Safinaz', description: 'Bulk orders and premium collections.', logo: '/assets/brand-logo-2.png' },
    { name: 'Maria B', description: 'Featured designer wear in bulk quantities.', logo: '/assets/brand-logo-3.png' },
    { name: 'Gul Ahmed', description: 'Authorized distributor for unstitched collections.', logo: '/assets/brand-logo-4.png' },
    { name: 'Sapphire', description: 'Exclusive wholesale partner.', logo: '/assets/brand-logo-5.png' },
    { name: 'Limelight', description: 'Bulk supplier for Limelight fashion.', logo: '/assets/brand-logo-6.png' },
    { name: 'Alkaram Studio', description: 'Premium bulk supplier for Alkaram.', logo: '/assets/brand-logo-7.png' },
    { name: 'Asim Jofa', description: 'Exclusive bulk orders for Asim Jofa designs.', logo: '/assets/brand-logo-8.png' },
    { name: 'Nishat Linen', description: 'Wholesale of Nishat Linen fabrics.', logo: '/assets/brand-logo-9.png' },
    { name: 'Ethnic ', description: 'Bulk supply of Ethnic by Outfitters collections.', logo: '/assets/brand-logo-10.png' },
    { name: 'BIBA', description: 'Wholesale partner for BIBA apparel.', logo: '/assets/brand-logo-11.png' },
    { name: 'Libas', description: 'Bulk orders for Libas fashion.', logo: '/assets/brand-logo-12.png' },
    { name: 'Tawakkal', description: 'Providing bulk supplies from Tawakkal.', logo: '/assets/brand-logo-13.png' },
    { name: 'Dressline', description: 'Bulk distribution for Dressline collections.', logo: '/assets/brand-logo-14.png' },
    { name: 'Alif', description: 'Wholesale supplier of Alif apparel.', logo: '/assets/brand-logo-15.png' },
    { name: 'Fantak', description: 'Bulk fashion from Fantak.', logo: '/assets/brand-logo-16.png' },
    { name: 'Faria', description: 'Partnered for bulk Faria orders.', logo: '/assets/brand-logo-17.png' },
    { name: 'Mi Dr Harris', description: 'Bulk supplies from Mi Dr Harris.', logo: '/assets/brand-logo-18.png' },
    { name: 'Noor Fatima', description: 'Wholesale for Noor Fatima designs.', logo: '/assets/brand-logo-19.png' },
    { name: 'Ayat', description: 'Bulk fashion solutions from Ayat.', logo: '/assets/brand-logo-20.png' },
    { name: 'Chasni', description: 'Collaborating for Chasni collections.', logo: '/assets/brand-logo-21.png' },
    { name: 'Palwasha', description: 'Bulk distribution for Palwasha.', logo: '/assets/brand-logo-22.png' },
    { name: 'Chawla', description: 'Wholesale partner for Chawla.', logo: '/assets/brand-logo-23.png' },
    { name: 'Patel', description: 'Bulk orders and supplies from Patel.', logo: '/assets/brand-logo-24.png' },
  ],
}

// Location Section
export const LOCATION = {
  heading: 'Visit Our Store',
  description: 'Located in the heart of Azam Market, Lahore - easily accessible and welcoming',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d270.5529117894514!2d74.31988242991066!3d31.585737488370466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b66f76c33ab%3A0xf0ac94e11b6a4670!2sKhushboo%20by%20Noor%20arts!5e0!3m2!1sen!2s!4v1768037805682!5m2!1sen!2s',
  directionsLink: `https://www.google.com/maps/dir/?api=1&destination=${CONTACT.coordinates.lat},${CONTACT.coordinates.lng}`,
  parkingInfo: 'Street parking available near Azam Market\nEasily accessible via Mall Road\nPublic transport: Multiple bus routes available',
}

// Contact Section
export const CONTACT_SECTION = {
  heading: 'Get In Touch',
  description: 'Have questions about our bulk collections? We\'d love to hear from you!',
  formLabels: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
  },
  formMessages: {
    success: 'Thank you! Your message has been sent successfully.',
    error: 'There was an error sending your message. Please try again or contact us directly.',
    sending: 'Sending...',
    sendButton: 'Send Message',
  },
}

// Footer
export const FOOTER = {
  tagline: 'The Fragrance of Elegance – Bulk Stitched & Unstitched Ladies\' Wear from Azam Market, Lahore',
  links: {
    privacy: '/privacy-policy',
    terms: '/terms',
  },
  copyright: (year) => `© ${year} ${BUSINESS_NAME}. All rights reserved.`,
}

// SEO
export const SEO_DATA = {
  title: `${BUSINESS_NAME} | Bulk Ladies' Clothes in Azam Market Lahore`,
  description: "Premium bulk stitched & unstitched ladies' wear in Azam Market, Lahore. High-quality embroidered lawn suits, organza kurtas, shalwar kameez, and festive outfits. Wholesale supplier for elegant women's ethnic wear.",
  keywords: "Khushboo By Noor Arts, khushboobynoorarts, khushbooarts, khushboonoorarts, khushboo by noor, noor arts,noorarts, bulk stitched ladies clothes, unstitched ladies clothes Lahore, Azam Market wholesale, Pakistani women's clothing wholesale, embroidered lawn suits, organza kurtas, shalwar kameez, asian boutique, ladies fashion Lahore,tawakkal,dressline,laiba,gulahmed,maria B,sapphire,limelight,fantak,faria,zarameer,lala,noorfatima,gulrukh,alakramstudio,asimjofa,ethnicbyoutfitters,Arhamnoor,noormuhammad,arhamsheikh",
  url: 'https://khushboobynoorarts.vercel.app/',
  image: 'https://khushboobynoorarts.com/og-image.jpg',
  geo: {
    region: 'PK-PB',
    placename: 'Lahore',
    position: '31.5204;74.3587',
    icbm: '31.5204, 74.3587',
  },
}
