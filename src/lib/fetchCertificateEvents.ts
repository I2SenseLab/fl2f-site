import { useSanityClient } from "@sanity/astro";
import { CertificateEvent } from "../../typings";

export async function getCertificateEvents() {
  const client = useSanityClient();
  const query = `
    *[_type == "certificateEvent"] 
  `;
  const res = await client.fetch(query);
  const certificateEvents: CertificateEvent[] = res;

  return certificateEvents;
}
