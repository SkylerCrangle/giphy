import GiphyService from "../Services/GiphyService.js";
import store from "../store.js";

//Private
function _draw() {
  let values = store.State.values;
  console.log(values);
}

//Public
export default class GiphyController {
  constructor() {
    store.subscribe("values", _draw);
  }
}