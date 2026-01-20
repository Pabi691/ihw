// MetaData.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import MetaContentConfig from '../content/MetaContentConfig';

// Inside MetaData.jsx
const routeToPageMap = {
    'about': 'about',
    'contact-us': 'contact',
    'home': 'home',
    '': 'home',
  };
  

const MetaData = ({ title, description, keywords, image, url, page }) => {
  const location = useLocation();

  // Auto detect page from URL path if not manually passed
  const currentPath = location.pathname.replace(/^\/|\/$/g, '') ;
  const pageKey = page || routeToPageMap[currentPath] || 'default';

  const config = MetaContentConfig[pageKey] || MetaContentConfig.default;

  const metaTitle = title || config.title;
  const metaDescription = description || config.description;
  const metaKeywords = keywords || config.keywords;
  const metaImage = image || config.image || MetaContentConfig.default.image;
  const metaUrl = url || config.url || MetaContentConfig.default.url;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      {/* Canonical */}
      <link rel="canonical" href={metaUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />

    </Helmet>
  );
};

export default MetaData;
