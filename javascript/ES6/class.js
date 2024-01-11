// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log('To ' + this.targetPlanet + '!');
  }
}

// Implicit constructor
class Rocket {
  launch() {
    console.log('To the moon!');
  }
}

const zeus = new SpaceShuttle('Jupiter');
console.log(zeus.takeOff());

// Use getters and setters to Control Access to an Object
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'Rakib Hasan';
console.log(novel.writer);
