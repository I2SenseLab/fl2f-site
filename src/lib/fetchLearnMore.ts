import { useSanityClient } from "@sanity/astro";
import { LearnMore } from "../../typings";

export async function getLearnMoreContent() {
  const client = useSanityClient();
  const query = `
    *[_type == "learnMore"] 
  `;
  const res = await client.fetch(query);
  const learnMore: LearnMore = res[0];
  return learnMore;
}
