

// Start of JavaScript Code --- Test File


// Create an individual array to hold the Months values

// Create an individual array to hold Profit & Loss values 

// Using the months array, count the total number of months which is held within - thus display in console 

// Using the Profits & Loss array, sum up the Total of Profits (+ve elements) over the period - thus display in console

// Using the Profits & Loss array, create a Profit_Loss_Change array





// let array2D = [[1, 2, 3], [ 4, 5, 6]];

//  for (let i = 1; 1 < array2D.length; i++) {

//  console.log(array2D[i]);

//}


let finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857]
];

let financesUpdate = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857]
];

console.table(finances)
//console.log('Array length is:',finances.length);


// Declare variables 
let monthTotal;

// Declare array variables 
let profitLoss = [];
let month = [];
let monthArray = [];
let plArray = [];      // Yes
// let plNum = 0;
// let plTotal = 0;
// let profitArray = [];
// let lossArray = [];
let netTotal =0;
var differencesArray = [];

/* Redundant code 
// ** Function Declarations **
//Function to add up array elements
function addUp(monthlyPL) {
  var xx, totalOfArray = 0;
  for (xx = 0; xx < monthlyPL.length; xx++) {  
    totalOfArray = totalOfArray + monthlyPL[xx];
  }
  return totalOfArray;
}
*/

for (let i = 0; i < finances.length; i++) {

  // Extarct the profit-loss only 
  let profitLoss = finances[i][1];
  //console.log('profit loss is: ', profitLoss);
  
  netTotal += finances[i][1];
   
  // Extract the finanical month only
  let month = finances[i][0];
  //console.log('finanial month is: ', month);
 
  // --------------------------------------------------------------
  // ******* Months *******

  // 1. Split string into individual words 
  let substrings = month.split(' ');
  //console.table(substrings);
 
  // 2. Create new array iterate thro list and push into array
  for (let j = 0; j < substrings.length; j++) {
      monthArray.push(substrings[j]);        
  }
  // --------------------------------------------------------------
  //  ****** Profit & Loss ******

  // 3. First convert number to a string   
    let strNum = profitLoss.toString();

   // Split string into individual words 
    //console.log(strNum.split(' '));

    let subnumbersPL = strNum.split(' ');
    // console.table(subnumbersPL);
  
  // 4. Create new array iterate thro list and push into array
    for (var k = 0; k < subnumbersPL.length; k++) {

        plArray.push(subnumbersPL[k]);   
    }
        plArray.push(subnumbersPL[k]);   

  } // *** End Main - For loop ***

// Iterate through the finances array 
  var totalChange = 0;
  var change = 0;

  // console.log(typeof());

  for (var m = 0; m < finances.length-1; m++) {
    
    //if (m > 0 && m < finances.length-1) {
     // console.log(typeof (m > 0 || m < finances.length-1));
      change = finances[m][1] - finances[m+1][1];
      // console.log(typeof (m > 0 || m < finances.length-1));

      // Create 'changes differences)' Array
      differencesArray.push(change);

      console.log('count', m);
      console.log('First item in array ', finances[m][1]);
      console.log('Second item in array ', finances[m+1][1])
      totalChange += change;
    //} 
  }

// Calculate the avaerage change in Profit/Losses 
var avgChange = totalChange / (finances.length - 1);

//console.log(monthArray);  
//console.log(differencesArray);

// Updating 'finances array' to reflect differences
// Initialise first element of Profit/Loss array zero
financesUpdate[0][1] = '0';
for (var n=0; n < financesUpdate.length; n++) {
  if (n > 0) {
    financesUpdate[n][1] = differencesArray[n-1];
  } 
}
console.table(financesUpdate);  


// Searching "financesUpdate" for Greatest Increase 

  // Set first value in Array to test as MAX
  let maxVal = financesUpdate[0][1];
  let maxMonth = financesUpdate[0][0];

// console.log(financesUpdate[1][0]);

  for (var index1 = 0; index1 < financesUpdate.length; index1++) {

    // Loop to check all values in array against MAX found
    if (financesUpdate[index1][1] > maxVal) {
      maxVal = financesUpdate[index1][1];             // Test next value in array =
      maxMonth = financesUpdate[index1][0];
    }
  }
  // Output final result
  console.log('Max value in Profit Array is ', maxVal);
  console.log('Which occurs during Month ', maxMonth);

// Searching "financesUpdate" for Greatest Decrese

 // Set first value in Array to test as MIN
let minVal = financesUpdate[0][1];
let minMonth = financesUpdate[0][0];

for (var index2 = 0; index2 < financesUpdate.length; index2++) {

   // Loop to check all values in array against MIN found
  if (financesUpdate[index2][1] < minVal) {
    minVal = financesUpdate[index2][1];             // Test next value in array =
    minMonth = financesUpdate[index2][0];
  }
}
 // Output final result
console.log('Min value in Profit Array is ', minVal);
console.log('Which occurs during Month ', minMonth);



/*
let searchString = 'Feb-2010';
let flag = false;
let result = 0;

for (var index = 0; index < financesUpdate.length; index++) {
 //console.log(financesUpdate[index][0]);
 // console.log(typeof(financesUpdate[index][0]));
 // console.log(typeof(searchString));

  if (searchString == financesUpdate[index][0]) {
    flag = true;
    result = index;
    break;
  }
}
 
  if (flag == true) {
    console.log('Found on index: ', + index);
    console.log('Profits ', financesUpdate[result][0]);
  } else {
    console.log('Index No not found');
  }

*/

/*
// Finding months - Increase / Decrease
console.log(change);
var greatestIncrease = 1926159;

let count = 0;
let monthIncrese = finances[change.indexOf(greatestIncrease) + 1][0];

while(monthIncrese !== -1) {
  count++;
  monthIncrese = finances[change.indexOf(greatestIncrease) + 1][0];
}

console.log(monthIncrese);
console.log(count);
*/


// console.log(totalChange);

/* Redundant code 
  // Profit & Loss Calculation 
  // 5. Covert String array into Integer, then Loop thro array to sum elements

      for (let m = 0; m < plArray.length; m++) {

        // Convert array to Integer
        plNum = parseInt(plArray[m]);

        // Check array element is a -ve number
        if ((Math.sign(plNum)) == "-1") {
          // Store -ve number in lossArray
          lossArray.push(plNum);
        } else { 
          // Store +ve number in profitArray
          profitArray.push(plNum);
        }
        // Calculate Total of the porfit array
        var totalIs = addUp(profitArray); 
      }
      console.log(profitArray);
    // console.log('Sum Total is: ' + totalIs);
*/
  
//console.log(monthArray);
//console.log(monthArray.length);

// ****** Console Output *********
console.log('Financial Analysis');
console.log('--------------------------');
console.log('Total Months: ' + monthArray.length);

console.log('Net Total: $'+ netTotal);
console.log('Average Change: $' + avgChange.toFixed(2));


 //console.log(plTotal);
//console.log(differencesArray);


//console.log('total change over period: '+ totalChange); 





 // Using split command 
 // let substrings = month.split(' ');
 // console.log(substrings);



  //console.table(substrings);

//function arrayFromArgs() {
//   var results = [];

//   for (var i = 0; i < arguments.length; i++) {
//      results.push(arguments[i]);
//   }
//   return results;
//}

// var monthArray = arrayFromArgs(month);
// console.log(monthArray);
//  console.table(monthArray);


  //console.log('month array length is', month.length);

  //monthTotal = (month.length);

  //console.log(monthTotal);

  //console.log(finances[i][1]);
//}


// let activities = [];
//let activities = [  

//  ['work', 9],
//  ['Eat', 1],
//  ['Commute', 2],
//  ['Play Game', 1],
//  ['Sleep', 7]
//];

// console.table(activities)

// Print out the length of the array
//console.log('Array length is:',activities.length);

// loop the outer array 
// for (let i = 0; i < activities.length; i++) {
    
    // Print out the inner array 
      // console.log(activities[i]);

    // get the size of the inner array 

//    var innerArrayLength = activities[i].length;

    // loop the inner array 

//    for (let j = 0; j < innerArrayLength; j++) {

//      console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
//    }
//}


