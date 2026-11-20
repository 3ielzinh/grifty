import { useEffect } from "react";
import useTranslation from "../../i18n/useTranslation";

const setMetaContent = (selector, content) => {
  const element = document.querySelector(selector);
  if (element && content) element.setAttribute("content", content);
};

export default function PageMetadata({ page }) {
  const { t } = useTranslation();
  const title = t(`meta.${page}.title`);
  const description = t(`meta.${page}.description`);
  const socialDescription = t(`meta.${page}.socialDescription`);

  useEffect(() => {
    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', socialDescription);
    setMetaContent('meta[property="twitter:title"]', title);
    setMetaContent('meta[property="twitter:description"]', socialDescription);
  }, [description, socialDescription, title]);

  return null;
}
