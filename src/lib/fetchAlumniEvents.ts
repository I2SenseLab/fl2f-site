import { useSanityClient } from "@sanity/astro";
import { AlumniEvent } from "../../typings";

export async function getAlumniEvents() {
  const client = useSanityClient();
  const query = `
    *[_type == "alumniEvent"] 
  `;
  const res = await client.fetch(query);
  const alumniEvents: AlumniEvent[] = res;

  return alumniEvents;
}
