import { useSanityClient } from "@sanity/astro";

export async function getLearnMoreContent() {
  const client = useSanityClient();
  const query = `
    *[_type == "learnMore"] 
  `;

  return await client.fetch(query);
}
