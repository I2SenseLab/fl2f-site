import { useSanityClient } from "@sanity/astro";
import { PeopleList } from "../../typings";

export async function getPeopleList() {
  const client = useSanityClient();
  const query = `
    *[_type == "peopleList"]{
      ...,
      futured[]->{
        _id,
        name,
        title,
        testimony,
        image,
        order
      },
      testimonials[]->{
        _id,
        name,
        title,
        testimony,
        image,
        order
      },
      recommendations[]->{
        _id,
        name,
        title,
        testimony,
        image,
        order
      }
    }
  `;
  const res = await client.fetch(query);
  const peopleList = res;

  return peopleList;
}
