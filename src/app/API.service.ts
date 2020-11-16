/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

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

@Injectable({
  providedIn: "root"
})
export class APIService {
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
}
