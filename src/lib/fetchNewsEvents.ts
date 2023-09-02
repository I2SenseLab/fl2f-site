import { useSanityClient } from "@sanity/astro";
import { NewsEvent } from "../../typings";

export async function getNewsEvents() {
  const client = useSanityClient();
  const query = `
    *[_type == "newsEvent"] 
  `;
  const res = await client.fetch(query);
  const newsEvents: NewsEvent[] = res;

  return newsEvents;
}
