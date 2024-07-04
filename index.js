// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = () => {
    let newDrivers = drivers.slice(0,2) 
    return newDrivers;
}

const returnLastTwoDrivers = () => {
    let newDrivers = drivers.slice(2,4)
    return newDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = () => {
    let fare = 5
    return () => {
        return fare * 5
    }
}

const fareDoubler = () => {
    let fare = 10
    return fare * 2
}

const fareTripler = () => {
    let fare = 12
    return fare * 3
}

function selectDifferentDrivers(drivers,fun){
    return fun(drivers);
}
selectDifferentDrivers();

