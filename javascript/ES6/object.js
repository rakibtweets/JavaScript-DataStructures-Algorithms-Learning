// prevent object mutation

let obj = {
  name: 'FreeCodeCamp',
  review: 'Awesome'
};
Object.freeze(obj);
obj.name = 'Edwin'; // will be ignored. Mutation not allowed
console.log(obj);

// Object Property Shorthand

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
const getMousePositionShorthand = (x, y) => ({ x, y });
