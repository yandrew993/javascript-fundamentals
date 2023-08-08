"use strict";
const restourant = {
  name: "Tintoler",
  location: "Ndori",
  category: ["first class", "second class", "Normal service"],
  rooms: ["Bedsitter", "Single rooms"],
  mainMenu: ["Tea", "Bread", "Pizza"],
  order: function (categoryIndex, menuIndex) {
    return [this.category[categoryIndex], this.mainMenu[menuIndex]];
  },
};
let [first, second] = restourant.rooms;
[first, second] = [second, first];

//console.log(restourant.order(0, 1));
//console.log(restourant.order(2, 1));
//console.log(typeof restourant.category);
console.log(first, second);
