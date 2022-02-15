import getStrapiMedia from "./getStrapiMedia";
export default function (global, page) {
  const { seo } = page;
  const { defaultSeo, favIcon, siteName } = global;
  const fullSeo = {
    ...defaultSeo,
    ...seo
  };
  return useMeta({
    title: `${fullSeo.metaTitle} | ${siteName}`,
    meta: getMetaTags(fullSeo),
    link: [
      {
        rel: "favicon",
        href: getStrapiMedia(favIcon.data.attributes.url),
      },
    ],
  });
}