import { useSanityClient } from "@sanity/astro";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "../../typings";

const client = useSanityClient();
const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
  return builder.image(source);
}
