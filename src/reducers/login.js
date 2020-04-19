import { POST_LOGIN } from "../actions";

export const login = (events = {}, action) => {
  switch (action.type) {
    case POST_LOGIN:
      return action.response.data;
    default:
      return events;
  }
};
