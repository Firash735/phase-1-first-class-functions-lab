// Code your solution in this file!
// Define the returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Define the returnLastTwoDrivers function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Define the selectingDrivers array
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Define the createFareMultiplier function
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // Define the fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // Define the fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // Define the selectDifferentDrivers function
  const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
  };
  
  // Tests
  console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Antonia', 'Nuru']
  console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Amari', 'Mo']
  console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Antonia', 'Nuru']
  console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Amari', 'Mo']
  console.log(createFareMultiplier(4)(10)); // 40
  console.log(fareDoubler(10)); // 20
  console.log(fareTripler(10)); // 30
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); // ['Amari', 'Mo']
  
