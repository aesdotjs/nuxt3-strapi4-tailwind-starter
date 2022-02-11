import getStrapiMedia from "./getStrapiMedia";
function removeHttp(url) {
  return url.replace(/^https?:\/\//, "");
}
export default function(seo, path = "") {
  const config = useRuntimeConfig();
  const tags = [];

  if (seo.metaTitle) {
    tags.push(
      {
        hid: "og:title",
        property: "og:title",
        content: seo.metaTitle,
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: seo.metaTitle,
      }
    );
  }
  if (seo.metaDescription) {
    tags.push(
      {
        hid: "description",
        name: "description",
        content: seo.metaDescription,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: seo.metaDescription,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: seo.metaDescription,
      }
    );
  }
  if (seo.shareImage) {
    const imageUrl = getStrapiMedia(seo.shareImage.data.attributes.url);
    tags.push(
      {
        hid: "image",
        name: "image",
        content: imageUrl,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: imageUrl,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: imageUrl,
      }
    );
  }
  if (seo.article) {
    tags.push({
      property: "og:type",
      content: "article",
    });
  }
  tags.push({
    hid: "twitter:card",
    name: "twitter:card",
    content: "summary_large_image",
  });
  tags.push({
    hid: "og:url",
    property: "og:url",
    content: config.baseUrl + path,
  });
  tags.push({
    hid: "og:type",
    property: "og:type",
    content: "website",
  });
  tags.push({
    hid: "twitter:domain",
    property: "twitter:domain",
    content: removeHttp(config.baseUrl),
  });
  tags.push({
    hid: "twitter:url",
    property: "twitter:url",
    content: config.baseUrl + path,
  });

  return tags;
}
