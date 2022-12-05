import API from "./index";

export const updateCustomerData = async (id, payload) => {
  return await API.post(`/update/user/${id}`, payload);
};

export const getCustomers = async () => {
  return await API.get("/allcustomers");
};
