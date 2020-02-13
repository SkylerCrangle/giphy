export default class Gifs {
  constructor(data) {
    this.title = data.title,
      // this.name = data.name,
      this.id = data.id || "",
      this.url = data.images.original.url
  }

  get Template() {
    return `
    <div class="col-12 text-center p-2">
    <div class="card" style="width: 18rem;">
        <img src="${this.url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <a href="#" class="btn btn-info" type="submit" onclick="app.giphyController.save('${this.title}')">Save</a>
        </div>
    </div>
</div>
    
    `
  }
}