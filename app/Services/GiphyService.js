import store from "../store.js";
import Gifs from "../Models/Gifs.js"

let _sandbox = axios.create({
  baseURL: "",
  timeout: 3000,
});
let _api = axios.create({
  baseURL: "",
  timeout: 3000,
});

class GiphyService { }

const service = new GiphyService();
export default service;
