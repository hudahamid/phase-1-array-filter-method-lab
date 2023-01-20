// Code your solution here
// Code your solution here
const drivers = ["A", "B", "C", "D", "E", "F"];
const driverObj = [
  {
    name: "F",
    hometown: "Baghdad",
  },
  {
    name: "B",
    hometown: "Baghdad",
  },
  {
    name: "D",
    hometown: "Erbil",
  },
  { name: "E", hometown: "Dyala" },
];
function findMatching(collection, name) {
  const arr = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].toLowerCase() === name.toLowerCase()) {
      arr.push(collection[i]);
    }
  }
  return arr;
}
function fuzzyMatch(collection, letter) {
  const arr = [];
  for (let i = 0; i < collection.length; i++) {
    if (
      collection[i].slice(0, 1).toLowerCase() ===
      letter.slice(0, 1).toLowerCase()
    ) {
      arr.push(collection[i]);
    }
  }
  return arr;
}
function matchName(collection, string) {
  const nameArr = [];
  collection.map((ele) => {
    if (ele.name.toLowerCase() === string.toLowerCase()) {
      nameArr.push(ele);
    }
  });
  return nameArr;
}
console.log(fuzzyMatch(drivers, "a"));
console.log(findMatching(drivers, "F"));
console.log(matchName(driverObj, "F"));
