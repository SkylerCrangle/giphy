export default class Gifs {
  constructor(data) {
    this.title = data.title
  }

  get Template() {
    return this.title
  }
}