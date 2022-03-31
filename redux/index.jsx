import axios from "axios";

let instance = axios.create({
    baseURL: "https://reqres.in/api",
    
  });

export default instance;