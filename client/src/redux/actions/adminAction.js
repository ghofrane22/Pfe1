import {
  GET_CATEGORY,
  GET_CLIENT_USERS,
  GET_HANDMADE_AUTHORIZATION_USERS,
  GET_HANDMADE_USERS,
  GET_LOCATION,
  GET_OFFERS,
} from "../constants/actions-types";
import axios from "axios";
import { url } from "../../utils";

export const get_admin_client = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios.get(
      `${url}/api/v1/admin/users-list/client`,
      config
    );
    dispatch({ type: GET_CLIENT_USERS, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};
export const get_admin_handmade = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios.get(
      `${url}/api/v1/admin/users-list/handMade`,
      config
    );
    dispatch({ type: GET_HANDMADE_USERS, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};
export const update_admin_handmade_authorization = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios.put(
      `${url}/api/v1/admin/update-user-authorization/${id}`,
      config
    );
    dispatch(get_admin_handmade());
  } catch (error) {
    console.log(error);
  }
};
export const get_admin_job_category = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios.get(`${url}/api/v1/admin/category`, config);
    dispatch({ type: GET_CATEGORY, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};
export const add_admin_category =
  ({ category }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      };
      let result = await axios.post(
        `${url}/api/v1/admin/category`,
        { category },
        config
      );
      dispatch(get_admin_job_category());
    } catch (error) {
      console.log(error);
    }
  };
export const update_admin_category =
  ({ jobName, id, handleShow, setLoading }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      };
      let result = await axios.put(
        `${url}/api/v1/admin/category/${id}`,
        { jobName },
        config
      );
      dispatch(get_admin_job_category());
      handleShow();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
export const delete_admin_category = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios.delete(
      `${url}/api/v1/admin/category/${id}`,
      config
    );
    dispatch(get_admin_job_category());
  } catch (error) {
    console.log(error);
  }
};
export const get_admin_location = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios.get(`${url}/api/v1/admin/location`, config);
    dispatch({ type: GET_LOCATION, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};
export const get_offers_list = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios.get(`${url}/api/v1/admin/offers`, config);
    dispatch({ type: GET_OFFERS, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};
export const add_admin_location = (location) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios.post(
      `${url}/api/v1/admin/location`,
      location,
      config
    );
    dispatch(get_admin_location());
  } catch (error) {
    console.log(error);
  }
};
export const update_admin_location =
  ({ location, id }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      };
      let result = await axios.put(
        `${url}/api/v1/admin/location/${id}`,
        { location },
        config
      );
      dispatch(get_admin_location());
    } catch (error) {
      console.log(error);
    }
  };
export const delete_admin_location = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios.delete(
      `${url}/api/v1/admin/location/${id}`,
      config
    );
    dispatch(get_admin_location());
  } catch (error) {
    console.log(error);
  }
};
