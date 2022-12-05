import API from "./index";

export const getWorkers = async () => {
  return await API.get("/workers");
};

export const getTickets = async (search = "", filter = "") => {
  let url = "/tickets";
  url = `${url}?search=${search}&filter=${filter}`;
  return await API.get(url);
};

export const getCustomers = async () => {
  return await API.get("/allcustomers");
};
