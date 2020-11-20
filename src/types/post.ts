import {Comment} from './comment';

export type Post = {
  id: string,
  title: string,
  content: string,
  comments: [Comment]
};
