import { GET_USERS } from "../actions";

export const users = (events = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.response.data;
    default:
      return events;
  }
};
