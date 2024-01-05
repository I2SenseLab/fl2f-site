import { useSanityClient } from "@sanity/astro";
import { FAQ } from "../../typings";

export async function getFAQ() {
  const client = useSanityClient();
  const query = `
    *[_type == "faq"] 
  `;
  const res = await client.fetch(query);
  const faq: FAQ[] = res;

  return faq;
}