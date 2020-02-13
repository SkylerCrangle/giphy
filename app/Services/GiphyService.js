import store from "../store.js";
import Gifs from "../Models/Gifs.js"

let _sandbox = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/Skyler/gifs",
  timeout: 3000,
});
let _api = axios.create({
  baseURL: "//api.giphy.com/v1/gifs",

  //random?api_key=0HXQDgonECHtcd2pUYA7an0niiyVq4az",
  timeout: 3000,
});

class GiphyService {
  deleteGif() {

  }



  getRandom() {
    _api.get("random?api_key=0HXQDgonECHtcd2pUYA7an0niiyVq4az").then(res => {
      let gif = new Gifs(res.data.data)
      store.commit("dataGifs", [gif])
      // console.log(res)
    })
  }




  /** @param { string } query
     */
  getGifsByQuery(query) {
    // debugger;
    //NOTE You will not need to change this method
    let url = "search?api_key=0HXQDgonECHtcd2pUYA7an0niiyVq4az&q=" + query;
    // @ts-ignore
    _api.get(url)
      .then(res => {
        let results = res.data.data.map(rawData => new Gifs(rawData));
        store.commit("dataGifs", results);
        console.log(store.State.dataGifs)
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  saveGif(title) {
    // let thisGif = store.State.dataGifs.find(g => g.title == title)
    // _sandbox.post(thisGif)
    //   .then(store.commit("myGifs", thisGif));
    // console.log(store.State.myGifs)
    console.log(title)
  }


  // addToPlaylist() {
  //   _sandboxApi
  //     .post("", store.State.activeSong)
  //     .then(res => {
  //       let activeSong = new Song(res.data.data);
  //       let mySongs = [...store.State.mySongs, activeSong];
  //       store.commit("mySongs", mySongs);
  //     })
  //     .catch(err => {
  //       throw new Error(err);
  //     });
  // }

}

const service = new GiphyService();
export default service;
