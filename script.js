

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

  for (var m = 0; m < finances.length; m++) {
    
    if (m > 0 && m < finances.length-1) {
      console.log(typeof (m > 0 || m < finances.length-1));
      change = finances[m][1] - finances[m+1][1];
      // console.log(typeof (m > 0 || m < finances.length-1));

      console.log('count', m);
      console.log('First item in array ', finances[m][1]);
      console.log('Second item in array ', finances[m+1][1])
      totalChange += change;
    }
   
  }

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

console.log 

 //console.log(plTotal);






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


