/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateCategoryInput = {
  id?: string | null;
  name: string;
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateCategoryInput = {
  id: string;
  name?: string | null;
};

export type DeleteCategoryInput = {
  id?: string | null;
};

export type CreateCommentInput = {
  id?: string | null;
  postID: string;
  content: string;
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateCommentInput = {
  id: string;
  postID?: string | null;
  content?: string | null;
};

export type DeleteCommentInput = {
  id?: string | null;
};

export type CreateEventInput = {
  id?: string | null;
  name: string;
  description: string;
  actors: string;
  genre: string;
  venue: string;
  startDate: string;
  endDate: string;
  time: string;
};

export type ModelEventConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  actors?: ModelStringInput | null;
  genre?: ModelStringInput | null;
  venue?: ModelStringInput | null;
  startDate?: ModelStringInput | null;
  endDate?: ModelStringInput | null;
  time?: ModelStringInput | null;
  and?: Array<ModelEventConditionInput | null> | null;
  or?: Array<ModelEventConditionInput | null> | null;
  not?: ModelEventConditionInput | null;
};

export type UpdateEventInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  actors?: string | null;
  genre?: string | null;
  venue?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  time?: string | null;
};

export type DeleteEventInput = {
  id?: string | null;
};

export type CreatePostInput = {
  id?: string | null;
  subID: string;
  title: string;
  content: string;
};

export type ModelPostConditionInput = {
  subID?: ModelIDInput | null;
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type UpdatePostInput = {
  id: string;
  subID?: string | null;
  title?: string | null;
  content?: string | null;
};

export type DeletePostInput = {
  id?: string | null;
};

export type CreateSubcategoryInput = {
  id?: string | null;
  catID: string;
  name: string;
};

export type ModelSubcategoryConditionInput = {
  catID?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelSubcategoryConditionInput | null> | null;
  or?: Array<ModelSubcategoryConditionInput | null> | null;
  not?: ModelSubcategoryConditionInput | null;
};

export type UpdateSubcategoryInput = {
  id: string;
  catID?: string | null;
  name?: string | null;
};

export type DeleteSubcategoryInput = {
  id?: string | null;
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  actors?: ModelStringInput | null;
  genre?: ModelStringInput | null;
  venue?: ModelStringInput | null;
  startDate?: ModelStringInput | null;
  endDate?: ModelStringInput | null;
  time?: ModelStringInput | null;
  and?: Array<ModelEventFilterInput | null> | null;
  or?: Array<ModelEventFilterInput | null> | null;
  not?: ModelEventFilterInput | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  subID?: ModelIDInput | null;
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelSubcategoryFilterInput = {
  id?: ModelIDInput | null;
  catID?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelSubcategoryFilterInput | null> | null;
  or?: Array<ModelSubcategoryFilterInput | null> | null;
  not?: ModelSubcategoryFilterInput | null;
};

export type CreateCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  subCategories: {
    __typename: "ModelSubcategoryConnection";
    items: Array<{
      __typename: "Subcategory";
      id: string;
      catID: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  subCategories: {
    __typename: "ModelSubcategoryConnection";
    items: Array<{
      __typename: "Subcategory";
      id: string;
      catID: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  subCategories: {
    __typename: "ModelSubcategoryConnection";
    items: Array<{
      __typename: "Subcategory";
      id: string;
      catID: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateEventMutation = {
  __typename: "Event";
  id: string;
  name: string;
  description: string;
  actors: string;
  genre: string;
  venue: string;
  startDate: string;
  endDate: string;
  time: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEventMutation = {
  __typename: "Event";
  id: string;
  name: string;
  description: string;
  actors: string;
  genre: string;
  venue: string;
  startDate: string;
  endDate: string;
  time: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteEventMutation = {
  __typename: "Event";
  id: string;
  name: string;
  description: string;
  actors: string;
  genre: string;
  venue: string;
  startDate: string;
  endDate: string;
  time: string;
  createdAt: string;
  updatedAt: string;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  subID: string;
  title: string;
  content: string;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  subID: string;
  title: string;
  content: string;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  subID: string;
  title: string;
  content: string;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateSubcategoryMutation = {
  __typename: "Subcategory";
  id: string;
  catID: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      subID: string;
      title: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSubcategoryMutation = {
  __typename: "Subcategory";
  id: string;
  catID: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      subID: string;
      title: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSubcategoryMutation = {
  __typename: "Subcategory";
  id: string;
  catID: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      subID: string;
      title: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetCategoryQuery = {
  __typename: "Category";
  id: string;
  name: string;
  subCategories: {
    __typename: "ModelSubcategoryConnection";
    items: Array<{
      __typename: "Subcategory";
      id: string;
      catID: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCategorysQuery = {
  __typename: "ModelCategoryConnection";
  items: Array<{
    __typename: "Category";
    id: string;
    name: string;
    subCategories: {
      __typename: "ModelSubcategoryConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items: Array<{
    __typename: "Comment";
    id: string;
    postID: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetEventQuery = {
  __typename: "Event";
  id: string;
  name: string;
  description: string;
  actors: string;
  genre: string;
  venue: string;
  startDate: string;
  endDate: string;
  time: string;
  createdAt: string;
  updatedAt: string;
};

export type ListEventsQuery = {
  __typename: "ModelEventConnection";
  items: Array<{
    __typename: "Event";
    id: string;
    name: string;
    description: string;
    actors: string;
    genre: string;
    venue: string;
    startDate: string;
    endDate: string;
    time: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  subID: string;
  title: string;
  content: string;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    subID: string;
    title: string;
    content: string;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetSubcategoryQuery = {
  __typename: "Subcategory";
  id: string;
  catID: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      subID: string;
      title: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListSubcategorysQuery = {
  __typename: "ModelSubcategoryConnection";
  items: Array<{
    __typename: "Subcategory";
    id: string;
    catID: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  subCategories: {
    __typename: "ModelSubcategoryConnection";
    items: Array<{
      __typename: "Subcategory";
      id: string;
      catID: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  subCategories: {
    __typename: "ModelSubcategoryConnection";
    items: Array<{
      __typename: "Subcategory";
      id: string;
      catID: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  subCategories: {
    __typename: "ModelSubcategoryConnection";
    items: Array<{
      __typename: "Subcategory";
      id: string;
      catID: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateEventSubscription = {
  __typename: "Event";
  id: string;
  name: string;
  description: string;
  actors: string;
  genre: string;
  venue: string;
  startDate: string;
  endDate: string;
  time: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateEventSubscription = {
  __typename: "Event";
  id: string;
  name: string;
  description: string;
  actors: string;
  genre: string;
  venue: string;
  startDate: string;
  endDate: string;
  time: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteEventSubscription = {
  __typename: "Event";
  id: string;
  name: string;
  description: string;
  actors: string;
  genre: string;
  venue: string;
  startDate: string;
  endDate: string;
  time: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  subID: string;
  title: string;
  content: string;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  subID: string;
  title: string;
  content: string;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  subID: string;
  title: string;
  content: string;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      postID: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateSubcategorySubscription = {
  __typename: "Subcategory";
  id: string;
  catID: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      subID: string;
      title: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSubcategorySubscription = {
  __typename: "Subcategory";
  id: string;
  catID: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      subID: string;
      title: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSubcategorySubscription = {
  __typename: "Subcategory";
  id: string;
  catID: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      subID: string;
      title: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCategory(
    input: CreateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<CreateCategoryMutation> {
    const statement = `mutation CreateCategory($input: CreateCategoryInput!, $condition: ModelCategoryConditionInput) {
        createCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          subCategories {
            __typename
            items {
              __typename
              id
              catID
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCategoryMutation>response.data.createCategory;
  }
  async UpdateCategory(
    input: UpdateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<UpdateCategoryMutation> {
    const statement = `mutation UpdateCategory($input: UpdateCategoryInput!, $condition: ModelCategoryConditionInput) {
        updateCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          subCategories {
            __typename
            items {
              __typename
              id
              catID
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCategoryMutation>response.data.updateCategory;
  }
  async DeleteCategory(
    input: DeleteCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<DeleteCategoryMutation> {
    const statement = `mutation DeleteCategory($input: DeleteCategoryInput!, $condition: ModelCategoryConditionInput) {
        deleteCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          subCategories {
            __typename
            items {
              __typename
              id
              catID
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCategoryMutation>response.data.deleteCategory;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async CreateEvent(
    input: CreateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<CreateEventMutation> {
    const statement = `mutation CreateEvent($input: CreateEventInput!, $condition: ModelEventConditionInput) {
        createEvent(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          actors
          genre
          venue
          startDate
          endDate
          time
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEventMutation>response.data.createEvent;
  }
  async UpdateEvent(
    input: UpdateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<UpdateEventMutation> {
    const statement = `mutation UpdateEvent($input: UpdateEventInput!, $condition: ModelEventConditionInput) {
        updateEvent(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          actors
          genre
          venue
          startDate
          endDate
          time
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEventMutation>response.data.updateEvent;
  }
  async DeleteEvent(
    input: DeleteEventInput,
    condition?: ModelEventConditionInput
  ): Promise<DeleteEventMutation> {
    const statement = `mutation DeleteEvent($input: DeleteEventInput!, $condition: ModelEventConditionInput) {
        deleteEvent(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          actors
          genre
          venue
          startDate
          endDate
          time
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEventMutation>response.data.deleteEvent;
  }
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          subID
          title
          content
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          subID
          title
          content
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          subID
          title
          content
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateSubcategory(
    input: CreateSubcategoryInput,
    condition?: ModelSubcategoryConditionInput
  ): Promise<CreateSubcategoryMutation> {
    const statement = `mutation CreateSubcategory($input: CreateSubcategoryInput!, $condition: ModelSubcategoryConditionInput) {
        createSubcategory(input: $input, condition: $condition) {
          __typename
          id
          catID
          name
          posts {
            __typename
            items {
              __typename
              id
              subID
              title
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSubcategoryMutation>response.data.createSubcategory;
  }
  async UpdateSubcategory(
    input: UpdateSubcategoryInput,
    condition?: ModelSubcategoryConditionInput
  ): Promise<UpdateSubcategoryMutation> {
    const statement = `mutation UpdateSubcategory($input: UpdateSubcategoryInput!, $condition: ModelSubcategoryConditionInput) {
        updateSubcategory(input: $input, condition: $condition) {
          __typename
          id
          catID
          name
          posts {
            __typename
            items {
              __typename
              id
              subID
              title
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSubcategoryMutation>response.data.updateSubcategory;
  }
  async DeleteSubcategory(
    input: DeleteSubcategoryInput,
    condition?: ModelSubcategoryConditionInput
  ): Promise<DeleteSubcategoryMutation> {
    const statement = `mutation DeleteSubcategory($input: DeleteSubcategoryInput!, $condition: ModelSubcategoryConditionInput) {
        deleteSubcategory(input: $input, condition: $condition) {
          __typename
          id
          catID
          name
          posts {
            __typename
            items {
              __typename
              id
              subID
              title
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSubcategoryMutation>response.data.deleteSubcategory;
  }
  async GetCategory(id: string): Promise<GetCategoryQuery> {
    const statement = `query GetCategory($id: ID!) {
        getCategory(id: $id) {
          __typename
          id
          name
          subCategories {
            __typename
            items {
              __typename
              id
              catID
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCategoryQuery>response.data.getCategory;
  }
  async ListCategorys(
    filter?: ModelCategoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCategorysQuery> {
    const statement = `query ListCategorys($filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String) {
        listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            subCategories {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCategorysQuery>response.data.listCategorys;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          postID
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            postID
            content
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  async GetEvent(id: string): Promise<GetEventQuery> {
    const statement = `query GetEvent($id: ID!) {
        getEvent(id: $id) {
          __typename
          id
          name
          description
          actors
          genre
          venue
          startDate
          endDate
          time
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEventQuery>response.data.getEvent;
  }
  async ListEvents(
    filter?: ModelEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEventsQuery> {
    const statement = `query ListEvents($filter: ModelEventFilterInput, $limit: Int, $nextToken: String) {
        listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            actors
            genre
            venue
            startDate
            endDate
            time
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEventsQuery>response.data.listEvents;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          subID
          title
          content
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            subID
            title
            content
            comments {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async GetSubcategory(id: string): Promise<GetSubcategoryQuery> {
    const statement = `query GetSubcategory($id: ID!) {
        getSubcategory(id: $id) {
          __typename
          id
          catID
          name
          posts {
            __typename
            items {
              __typename
              id
              subID
              title
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSubcategoryQuery>response.data.getSubcategory;
  }
  async ListSubcategorys(
    filter?: ModelSubcategoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSubcategorysQuery> {
    const statement = `query ListSubcategorys($filter: ModelSubcategoryFilterInput, $limit: Int, $nextToken: String) {
        listSubcategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            catID
            name
            posts {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSubcategorysQuery>response.data.listSubcategorys;
  }
  OnCreateCategoryListener: Observable<
    SubscriptionResponse<OnCreateCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCategory {
        onCreateCategory {
          __typename
          id
          name
          subCategories {
            __typename
            items {
              __typename
              id
              catID
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCategorySubscription>>;

  OnUpdateCategoryListener: Observable<
    SubscriptionResponse<OnUpdateCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCategory {
        onUpdateCategory {
          __typename
          id
          name
          subCategories {
            __typename
            items {
              __typename
              id
              catID
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCategorySubscription>>;

  OnDeleteCategoryListener: Observable<
    SubscriptionResponse<OnDeleteCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCategory {
        onDeleteCategory {
          __typename
          id
          name
          subCategories {
            __typename
            items {
              __typename
              id
              catID
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCategorySubscription>>;

  OnCreateCommentListener: Observable<
    SubscriptionResponse<OnCreateCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment {
        onCreateComment {
          __typename
          id
          postID
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCommentSubscription>>;

  OnUpdateCommentListener: Observable<
    SubscriptionResponse<OnUpdateCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
          __typename
          id
          postID
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCommentSubscription>>;

  OnDeleteCommentListener: Observable<
    SubscriptionResponse<OnDeleteCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
          __typename
          id
          postID
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCommentSubscription>>;

  OnCreateEventListener: Observable<
    SubscriptionResponse<OnCreateEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateEvent {
        onCreateEvent {
          __typename
          id
          name
          description
          actors
          genre
          venue
          startDate
          endDate
          time
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateEventSubscription>>;

  OnUpdateEventListener: Observable<
    SubscriptionResponse<OnUpdateEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEvent {
        onUpdateEvent {
          __typename
          id
          name
          description
          actors
          genre
          venue
          startDate
          endDate
          time
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateEventSubscription>>;

  OnDeleteEventListener: Observable<
    SubscriptionResponse<OnDeleteEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEvent {
        onDeleteEvent {
          __typename
          id
          name
          description
          actors
          genre
          venue
          startDate
          endDate
          time
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteEventSubscription>>;

  OnCreatePostListener: Observable<
    SubscriptionResponse<OnCreatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost {
        onCreatePost {
          __typename
          id
          subID
          title
          content
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePostSubscription>>;

  OnUpdatePostListener: Observable<
    SubscriptionResponse<OnUpdatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePost {
        onUpdatePost {
          __typename
          id
          subID
          title
          content
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePostSubscription>>;

  OnDeletePostListener: Observable<
    SubscriptionResponse<OnDeletePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          id
          subID
          title
          content
          comments {
            __typename
            items {
              __typename
              id
              postID
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePostSubscription>>;

  OnCreateSubcategoryListener: Observable<
    SubscriptionResponse<OnCreateSubcategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSubcategory {
        onCreateSubcategory {
          __typename
          id
          catID
          name
          posts {
            __typename
            items {
              __typename
              id
              subID
              title
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateSubcategorySubscription>>;

  OnUpdateSubcategoryListener: Observable<
    SubscriptionResponse<OnUpdateSubcategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSubcategory {
        onUpdateSubcategory {
          __typename
          id
          catID
          name
          posts {
            __typename
            items {
              __typename
              id
              subID
              title
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateSubcategorySubscription>>;

  OnDeleteSubcategoryListener: Observable<
    SubscriptionResponse<OnDeleteSubcategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSubcategory {
        onDeleteSubcategory {
          __typename
          id
          catID
          name
          posts {
            __typename
            items {
              __typename
              id
              subID
              title
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteSubcategorySubscription>>;
}
