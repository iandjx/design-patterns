class ConsoleObserver {
  constructor() {}

  update(model) {
    console.log(model.number, model.color.toUpperCase());
  }
}
