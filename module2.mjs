export const PI = 3.1415; //make this const caps because it's going to be a global
// constant that doesn't change
let radius = 5;
let max_area_5 = PI * 5 * 5;

let initial_plants = 20;
const initial_plant_area = 20 * 0.8;
const plant_number_week1 = initial_plants * 2 ** 1;
const plant_number_week2 = initial_plants * 2 ** 2;
const plant_number_week3 = initial_plants * 2 ** 3;

console.log(
  max_area_5 * (1 / 0.8),
  0.5 * (max_area_5 * (1 / 0.8)),
  0.8 * (max_area_5 * (1 / 0.8))
);

if (plant_number_week1 > 0.8 * (max_area_5 * (1 / 0.8))) {
  console.log("After week 1: " + "Pruned");
} else if (
  0.5 * (max_area_5 * (1 / 0.8)) < plant_number_week1 &&
  plant_number_week1 < 0.8 * (max_area_5 * (1 / 0.8))
) {
  console.log("After week 1: " + "Monitored");
} else {
  console.log("After week 1: " + "Planted");
}

if (plant_number_week2 > 0.8 * (max_area_5 * (1 / 0.8))) {
  console.log("After week 2: " + "Pruned");
} else if (
  0.5 * (max_area_5 * (1 / 0.8)) < plant_number_week2 &&
  plant_number_week2 < 0.8 * (max_area_5 * (1 / 0.8))
) {
  console.log("After week 2: " + "Monitored");
} else {
  console.log("After week 2: " + "Planted");
}

if (plant_number_week3 > 0.8 * (max_area_5 * (1 / 0.8))) {
  console.log("After week 3: " + "Pruned");
} else if (
  0.5 * (max_area_5 * (1 / 0.8)) < plant_number_week3 &&
  plant_number_week3 < 0.8 * (max_area_5 * (1 / 0.8))
) {
  console.log("After week 3: " + "Monitored");
} else {
  console.log("After week 3: " + "Planted");
}

// Part 2
initial_plants = 100;

let area_week_10 = initial_plants * 2 ** 10 * 0.8;

const additional_area = area_week_10 - max_area_5;

console.log(
  `The additional area needed for all of the plants after 10 weeks of unpruned growth is ${additional_area} sq. meters`
);
