import {Post} from "./post";

export type Subcategory = {
  id: string,
  name: string,
  posts: [Post]
};
