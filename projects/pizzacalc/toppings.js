//Adding event listener to topping selector
let toppings = document.getElementsByClassName("toppingSelector")[0];
toppings.addEventListener("click", addTopping);
let addToppingCounterReset = 0;
let currentToppings = ["Cheese"];

const Ingredients = {
  DoughKcal: 428,
  DoughProtein: 12,
  DoughPrice: 1,
  SauceKcal: 29,
  SauceProtein: 1,
  SaucePrice: 1.5,
  CheeseKcal: 270,
  CheeseProtein: 24,
  CheesePrice: 3.2,
  SalamiKcal: 330,
  SalamiProtein: 27,
  SalamiPrice: 5,
  ArugolaKcal: 25,
  ArugolaProtein: 2,
  ArugolaPrice: 8,
  BlueCheeseKcal: 350,
  BlueCheeseProtein: 22,
  BlueCheesePrice: 6,
  OnionKcal: 40,
  OnionProtein: 1,
  OnionPrice: 0.4,
  HamKcal: 130,
  HamProtein: 17,
  HamPrice: 4,
};

function addTopping() {
  if (addToppingCounterReset == 1) {
    const chosenTopping = toppings.value;
    if (!currentToppings.includes(chosenTopping)) {
      let table = document.getElementsByTagName("table")[0];
      let row = table.insertRow();
      let cell;
      for (let i = 0; i < 4; i++) {
        cell = row.insertCell();
        cell.innerHTML = chosenTopping;
        if (i == 1) {
          cell.innerHTML =
            "<input type='number' class= 'toppingWeight" +
            chosenTopping +
            "' value='100'>g</input>";
        } else if (i == 2) {
          let tempStr = chosenTopping + "Kcal";
          cell.innerHTML = Ingredients[tempStr];
        } else if (i == 3) {
          cell.innerHTML = "X";
          cell.classList.add("deleteTopping");
          cell.addEventListener("click", deleteToppings);
        }
      }
      currentToppings.push(chosenTopping);
      addToppingCounterReset = 0;
      bonobo();
      checkSize();
    }
  } else {
    addToppingCounterReset += 1;
  }
}

function deleteToppings(event) {
  let td = event.target.parentNode;

  let topping = td.childNodes[0].innerHTML;
  let addingToppingBackToArray = currentToppings.indexOf(topping);
  currentToppings.splice(addingToppingBackToArray, 1);
  addToppingCounterReset = 0;
  td.parentNode.removeChild(td);

  checkSize();
}

function getInputs() {
  let inputs = document.getElementsByClassName("sizeInput");
  return inputs;
}

function addingClickableLabels() {
  let labels = document.querySelectorAll("label");

  for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener("click", () => clicker(i));
    console.log("label assigned event listener");
  }
}

function clicker(i) {
  let inputs = getInputs();
  console.log("clicker triggered");
  inputs[i].checked = true;
  checkSize();
}

function checkSize() {
  let size = getInputs();
  if (size[0].checked == true) {
    size = 2;
    calories(size);
  } else if (size[1].checked == true) {
    size = 3;
    calories(size);
  } else if (size[2].checked == true) {
    size = 4;
    calories(size);
  }
}

function bonobo() {
  let bonobo = document.querySelectorAll("input[type='number'");
  for (let i = 0; i < bonobo.length; i++) {
    bonobo[i].addEventListener("keyup", checkSize);
  }
}

function toppingWeight(topping) {
  let finder = document.getElementsByClassName("toppingWeight" + topping)[0];
  return finder.value;
}

function calories(size) {
  let calories = size * Ingredients["DoughKcal"];
  calories += Ingredients["SauceKcal"];
  let protein = size * Ingredients["DoughProtein"];
  protein += Ingredients["SauceProtein"];
  let price = size * Ingredients["DoughPrice"];
  price += Ingredients["SaucePrice"];
  let totalWeight = size * 100 + 50;

  for (let i = 0; i < currentToppings.length; i++) {
    let topping = currentToppings[i];
    let weight = toppingWeight(topping) / 100;
    calories += Ingredients[topping + "Kcal"] * weight;
    protein += Ingredients[topping + "Protein"] * weight;
    price += Ingredients[topping + "Price"] * weight;
    totalWeight += weight * 100;
  }
  calories = Math.round(calories);
  protein = Math.round(protein);
  price = Math.round(price * 100) / 100;

  displayTable(calories, protein, price, totalWeight);
}

function getTable() {
  let listElements = document.querySelectorAll("li");
  return listElements;
}

function displayTable(calories, protein, price, totalWeight) {
  let table = getTable();
  table[0].innerHTML = "Calories: ";
  table[0].innerHTML += " " + calories + "kcal";
  table[1].innerHTML = "Protein: ";
  table[1].innerHTML += " " + protein + "g";
  table[2].innerHTML = "Price: ";
  table[2].innerHTML += " " + price + "pln";
  table[3].innerHTML = "Total Weight: ";
  table[3].innerHTML += " " + totalWeight + "g";

  let kcalPerPln = Math.round(calories / price);
  table[4].innerHTML = "Kcal per pln:  ";
  table[4].innerHTML += " " + kcalPerPln + "kcal/pln";
  let dailyKcal = Math.round((calories / 3500) * 100);
  let dailyProtein = Math.round((protein / 180) * 100);
  table[5].innerHTML = dailyKcal + "% of daily intake (kcal)";
  table[6].innerHTML = dailyProtein + "% of daily intake (protein)";
}

addingClickableLabels();
