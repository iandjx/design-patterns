class NumberModel {
  constructor() {
    this.number = 0;
    this.color = "red";
    this.observers = [];
  }

  addObserver(o) {
    this.observers.push(o);
  }

  notifyObservers() {
    for (let o of this.observers) {
      //we pass a numberModel insstance
      //so observer can access model properties
      o.update(this);
    }
  }

  increment() {
    this.number++;
    const colors = ["orange", "blue", "red"];
    this.color = colors[Math.floor(Math.random() * colors.length)];

    this.notifyObservers();
  }
}
