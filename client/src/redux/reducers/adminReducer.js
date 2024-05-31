import {
  GET_CATEGORY,
  GET_CLIENT_USERS,
  GET_HANDMADE_AUTHORIZATION_USERS,
  GET_HANDMADE_USERS,
  GET_LOCATION,
  GET_OFFERS,
} from "../constants/actions-types";

const initialState = {
  handMadeUsers: undefined,
  handeMadeAuthorization: undefined,
  clientUsers: undefined,
  location: undefined,
  category: undefined,
  offers: undefined,
};

const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case GET_OFFERS:
      return {
        ...state,
        offers: payload,
      };
    case GET_CLIENT_USERS:
      return {
        ...state,
        clientUsers: payload.data,
      };
    case GET_HANDMADE_USERS:
      return {
        ...state,
        handMadeUsers: payload.data,
      };
    case GET_LOCATION:
      return {
        ...state,
        location: payload,
      };
    case GET_HANDMADE_AUTHORIZATION_USERS:
      return {
        ...state,
        handeMadeAuthorization: payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
