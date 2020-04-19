import axios from "axios";

export const POST_LOGIN = "POST_LOGIN";
export const GET_USERS = "GET_USERS";

const ROOT_URL = "http://localhost:5000/api/v1";

export const postLogin = (values) => async (dispatch) => {
  const response = await axios.post(`${ROOT_URL}/login`, values);
  dispatch({ type: POST_LOGIN, response });
};

export const getUsers = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${ROOT_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
    data: {},
  });
  dispatch({ type: GET_USERS, response });
};
