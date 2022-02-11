export default function(url) {
  const config = useRuntimeConfig();
    // Check if URL is a local path
  if (url.startsWith("/")) {
    // Prepend Strapi address
    return `${config.strapiBaseUri}${url}`;
  }
  // Otherwise return full URL
  return url;
}
