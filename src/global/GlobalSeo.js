import { useLocation } from "react-router-dom";
import useSeo from "../hooks/useSeo";
import SeoHelmet from "../components/SeoHelmet";
import SeoHeadContent from "../components/SeoHeadContent";
import useGlobalContent from "../hooks/useGlobalContent";

const getSlugFromPath = (pathname) => {
  if (pathname === "/") return "home";
  // console.log("Pathname:", pathname);

  const parts = pathname.split("/").filter(Boolean);

  if (parts[0] === "product" && parts[1]) {
    return parts[1];
  }

  // return parts[0];
  return parts[parts.length - 1];
};

const GlobalSeo = () => {
  const location = useLocation();
  const slug = getSlugFromPath(location.pathname);
  const { seo } = useSeo(slug);
  const { globalContentData } = useGlobalContent();

  return (
    <>
      <SeoHelmet seo={seo} />           {/* standard meta tags */}
      <SeoHeadContent headContent={globalContentData?.head ?? ""} /> {/* dynamic scripts/meta */}
    </>
  );
};

export default GlobalSeo;
