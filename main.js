/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];
let median = []

/********************
 * HELPER FUNCTIONS *
 ********************/

const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);
  return result;
};

/*******************
 * YOUR CODE BELOW *
 *******************/
//Single Die
let d6Mean = document.querySelector("#d6-rolls-mean");
let d6Median = document.querySelector("#d6-rolls-median");
let sixD1 = document.querySelector("#d6-roll");
sixD1.addEventListener("click", function () {
  let random = getRandomNumber(6);
  sixD1.src = `./images/d6/${random}.png`;
  console.log(calculateMean(sixes));

  sixes.push(random);
  d6Mean.innerText = calculateMean(sixes);
  d6Median.innerText = medianCal(sixes);

  console.log(sixes);
});
//Double dice
let dblSixes1 = document.querySelector("#double-d6-roll-1");
let dblSixes2 = document.querySelector("#double-d6-roll-2");
let dblSixesMean = document.querySelector("#double-d6-rolls-mean");
let dblSixesMedian = document.querySelector("#double-d6-rolls-median");
dblSixes1.addEventListener("click", function () {
  let random1 = getRandomNumber(6);
  let random2 = getRandomNumber(6);
  dblSixes1.src = `./images/d6/${random1}.png`;
  dblSixes2.src = `./images/d6/${random2}.png`;
  console.log(calculateMean(doubleSixes));
  doubleSixes.push(random1);
  doubleSixes.push(random2);
  dblSixesMean.innerText = calculateMean(doubleSixes);
  dblSixesMedian.innerText = medianCal(doubleSixes);
  console.log(doubleSixes);
});
//12 sided die
let d12 = document.querySelector("#d12-roll");
let d12Mean = document.querySelector("#d12-rolls-mean");
let d12Median = document.querySelector("#d12-rolls-median");
d12.addEventListener("click", function () {
  let random = getRandomNumber(12);
  d12.src = `./images/numbers/${random}.png`;
  console.log(calculateMean(twelves));

  twelves.push(random);
  d12Mean.innerText = calculateMean(twelves);
  d12Median.innerText = medianCal(twelves);
  console.log(twelves);
});
//20 sides die
let d20 = document.querySelector("#d20-roll");
let d20Mean = document.querySelector("#d20-rolls-mean");
let d20Median = document.querySelector("#d20-rolls-median");
d20.addEventListener("click", function () {
  let random = getRandomNumber(20);
  d20.src = `./images/numbers/${random}.png`;
  console.log(calculateMean(twenties));

  twenties.push(random);
  d20Mean.innerText = calculateMean(twenties);
  d20Median.innerText = medianCal(twenties);
  console.log(twenties);
});
//





let resetButton = document.querySelector("#reset-button");
/*******************
 * EVENT LISTENERS *
 *******************/
resetButton.addEventListener("click", reset);

/******************
 * RESET FUNCTION *
 ******************/
function reset() {
  sixD1.src = "./images/start/d6.png";
  dblSixes1.src = "./images/start/d6.png";
  dblSixes2.src = "./images/start/d6.png";
  d12.src = "./images/start/d12.jpeg";
  d20.src = "./images/start/d20.jpg";
  d6Mean.innerText = "N/A";
  d6Median.innerText = "N/A";
  d20Mean.innerText = "N/A";
  d20Median.innerText = "N/A";
  d12Mean.innerText = "N/A";
  d12Median.innerText = "N/A";
  dblSixesMean.innerText = "N/A";
  dblSixesMedian.innerText = "N/A";
  sixes = [];
  doubleSixes = [];
  twelves = [];
  twenties = [];
}

/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/

/****************
 * MATH SECTION *
 ****************/
function calculateMean(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    let mean = Number(sum /array.length );
    return mean;
  }
}

function medianCal(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    arr.sort(function(a, b) {
      return a - b;
    });
  
    let middleIndex = Math.floor(arr.length / 2);
  
    if (arr.length % 2 === 0) {
      return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
    } else {
      return arr[middleIndex];
    }
  }
  
 


reset();
