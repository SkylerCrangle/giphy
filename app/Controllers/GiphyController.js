import GiphyService from "../Services/GiphyService.js";
import store from "../store.js";
import Gifs from "../Models/Gifs.js";

//Private
function _draw() {
  let template = "";
  store.State.dataGifs.forEach(item => {
    template += item.Template;
  })

  document.getElementById("gif-place").innerHTML = template
  // console.log(gifs);
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
    let searchTerm = event.target.search.value;
    GiphyService.getGifsByQuery(searchTerm);
    event.target.reset();

  }

  save(title) {
    GiphyService.saveGif(title)
    console.log(title)
  }

}