import store from "../store.js";
import Gifs from "../Models/Gifs.js"

let _sandbox = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/Skyler/gifs",
  timeout: 3000,
});
let _api = axios.create({
  baseURL: "//api.giphy.com/v1/gifs/random?api_key=0HXQDgonECHtcd2pUYA7an0niiyVq4az",
  timeout: 3000,
});

class GiphyService {
  deleteGif() {

  }

  saveGif() {

  }

  getRandom() {
    _api.get("").then(res => {
      let gif = new Gifs(res.data.data)
      store.commit("dataGifs", gif)
      // console.log(res)
    })
  }




  /** @param { string } query
     */
  getGifsByQuery(query) {
    //NOTE You will not need to change this method
    let url = "http://api.giphy.com/v1/gifs/search?api_key=APIKEY&q=" + query;
    // @ts-ignore
    $.getJSON(url)
      .then(res => {
        let results = res.results
          .filter(s => s.kind == "song")
          .map(rawData => new Gifs(rawData));
        store.commit("gifs", results);
        console.log(store.State.dataGifs)
      })
      .catch(err => {
        throw new Error(err);
      });
  }



}

const service = new GiphyService();
export default service;
