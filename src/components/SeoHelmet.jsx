import { Helmet } from "react-helmet-async";
import useGlobalContent from "../hooks/useGlobalContent";

const SeoHelmet = ({ seo }) => {
    const {globalContentData} = useGlobalContent();
    if (!seo) return null;
    console.log("Rendering SeoHelmet with SEO:", seo);

    return (
        <>
        <Helmet>
                <title>{seo.meta_title}</title>
                <link rel="canonical" href={seo.canonical_url} />
                <meta name="description" content={seo.meta_description} />
                <meta name="keywords" content={seo.meta_keywords} />

                {/* Open Graph */}
                <meta property="og:title" content={seo.og_title} />
                <meta property="og:description" content={seo.og_description} />
                <meta property="og:image" content={seo.og_image} />
                <meta property="og:url" content={seo.og_url} />
                <meta property="og:type" content={seo.og_type} />
                {/* Twitter */}
                {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.meta_title} />
      <meta name="twitter:description" content={seo.meta_description} />
      <meta name="twitter:image" content={seo.og_image} /> */}
            </Helmet>
               <div
                dangerouslySetInnerHTML={{
                    __html: globalContentData?.body || "",
                }}
                />

        </>
            
    );
};

export default SeoHelmet;
