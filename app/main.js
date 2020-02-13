import GiphyController from "./Controllers/GiphyController.js";

class App {
  giphyController = new GiphyController();
}

window["app"] = new App();
