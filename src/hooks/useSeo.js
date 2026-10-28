import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export function useSeo(title, description) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = title + " | Credit Score Monitoring Offers";
    const set = (selector, attrs) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement(
          selector.startsWith("link") ? "link" : "meta",
        );
        document.head.appendChild(element);
      }
      Object.entries(attrs).forEach(([attribute, value]) =>
        element.setAttribute(attribute, value),
      );
    };
    set('meta[name="description"]', {
      name: "description",
      content: description,
    });
    set('link[rel="canonical"]', {
      rel: "canonical",
      href: "https://creditscoremonitoringoffers.com" + pathname,
    });
    set('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    set('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    set('meta[property="og:url"]', {
      property: "og:url",
      content: "https://creditscoremonitoringoffers.com" + pathname,
    });
    set('meta[property="og:type"]', {
      property: "og:type",
      content: pathname.startsWith("/education/") ? "article" : "website",
    });
    window.scrollTo(0, 0);
  }, [title, description, pathname]);
}
