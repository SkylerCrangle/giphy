import GiphyService from "../Services/GiphyService.js";
import store from "../store.js";

//Private
function _draw() {
  let gifs = store.State.dataGifs['Template']

  document.getElementById("gif-place").innerHTML = gifs
  console.log(gifs);
}

//Public
export default class GiphyController {
  constructor() {
    store.subscribe("dataGifs", _draw);
  }
  getRandom() {
    //event.preventDefault()
    GiphyService.getRandom()
  }

  getGiphyStuff(event) {
    event.preventDefault();
    let formData = event.target;
    GiphyService.getGifsByQuery(formData.query.value);
    formData.reset();

  }

}