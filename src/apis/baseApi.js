import axios from "axios";

const path = "https://api.sheety.co/bcbf3f4e0149c157bf80eabef5de749e/crud/users";

export const getUser = async () => {
  return await axios.get(path);
};
