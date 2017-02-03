class App {
  private id: string;
  constructor(id: string) {
    this.id = id;
  }
  public someone(): string {
    return "Hello " + this.id;
  }
};
var app = new App("Wink Saville");
console.log(app.someone());
