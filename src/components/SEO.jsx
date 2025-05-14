// src/components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, author, image, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content={
          description ||
          "CrownMekk – Your one-stop shop for premium hair care products and accessories in Ghana."
        }
      />
      <meta
        name="keywords"
        content={
          keywords ||
          "CrownMekk, hair care, natural hair, Ghana hair products, hair oils, protective styles"
        }
      />

      <meta name="author" content={author || "CrownMekk"} />

      {/* Open Graph for social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;
