import { Helmet } from 'react-helmet-async'
import { SEO_DATA, BUSINESS_NAME, CONTACT, SOCIAL_LINKS } from '../constants'

const SEO = () => {
  const { description, keywords, url, image } = SEO_DATA
  const businessName = BUSINESS_NAME

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{businessName} | Bulk Ladies' Clothes in Azam Market Lahore</title>
      <meta name="title" content={`${businessName} | Bulk Ladies' Clothes in Azam Market Lahore`} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={businessName} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="geo.region" content={SEO_DATA.geo.region} />
      <meta name="geo.placename" content={SEO_DATA.geo.placename} />
      <meta name="geo.position" content={SEO_DATA.geo.position} />
      <meta name="ICBM" content={SEO_DATA.geo.icbm} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`${businessName} | Bulk Ladies' Clothes in Azam Market Lahore`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={businessName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={`${businessName} | Bulk Ladies' Clothes in Azam Market Lahore`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      <link rel="canonical" href="https://khushboobynoorarts.vercel.app/" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": businessName,
          "description": description,
          "url": url,
          "telephone": CONTACT.phone,
          "email": CONTACT.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": `${CONTACT.address.shopNumber}, ${CONTACT.address.street}`,
            "addressLocality": CONTACT.address.city,
            "addressRegion": CONTACT.address.province,
            "postalCode": "54000",
            "addressCountry": "PK"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": CONTACT.coordinates.lat,
            "longitude": CONTACT.coordinates.lng
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "11:00",
            "closes": "20:00"
          },
          "priceRange": "$$",
          "image": image,
          "sameAs": Object.values(SOCIAL_LINKS)
        })}
      </script>
    </Helmet>
  )
}

export default SEO
