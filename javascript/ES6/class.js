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

// Temperature with getter and setter
class Thermostat {
  constructor(temp) {
    this.temp = temp;
  }
  // getter
  get temperature() {
    const celsius = (5 / 9) * (this.temp - 32);
    return celsius;
  }
  //setter
  set temperature(temp) {
    const fahrenheit = (temp * 9.0) / 5 + 32;
    return (this.temp = fahrenheit);
  }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log('temp:', temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log('temp:', temp);
