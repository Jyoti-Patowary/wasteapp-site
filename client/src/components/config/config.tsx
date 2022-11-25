import axios from "axios";

export const config = {
  baseURL: "http://localhost:4000",
};

export const createOrder = async (id: String, role: String) => {
  console.log(id);
  let url = `${config.baseURL}/customer/${id}`;
  try {
    const data = await axios.get(url);
    if (data.status === 200) {
      return data;
    } else {
      return { data: "No UserData" };
    }
  } catch (err) {
    console.log(err);
  }
};

// export const createOrder = async () => {};
