import axios from "axios";
import { apiRoutes, serverDomain } from "../constants";

export const apiCalls = {
  login: (body) => postData(apiRoutes.login, body),
  getAccounts: () => getData(apiRoutes.accounts, body),
};

const getData = async (route) => {
  var response = { data: undefined, error: undefined };
  try {
    const requestResponse = await axios.get(serverDomain + route);
    response.data = requestResponse.data;
  } catch (error) {
    console.log("🚀 ~ file: apiCalls.js ~ line 14 ~ getData ~ error", error);
    response.error = error;
  }
  return response;
};

const postData = async (route, body) => {
  var response = { data: undefined, error: undefined };
  try {
    const requestResponse = await axios.get(serverDomain + route, body);
    response.data = requestResponse.data;
  } catch (error) {
    console.log("🚀 ~ file: apiCalls.js ~ line 14 ~ getData ~ error", error);
    response.error = error;
  }
  return response;
};
