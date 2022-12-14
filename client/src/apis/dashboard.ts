import API from "./index";

export const getWorkers = async () => {
  return await API.get("/workers");
};

export const getTickets = async () => {
  return await API.get("/tickets");
};

export const getCustomers = async () => {
  return await API.get("/allcustomers");
};

export const getTicketCounts = async (id) => {
  return await API.get(`/tickets/count/${id}`);
};
