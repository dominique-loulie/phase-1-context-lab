/* Your Code Here */

let createEmployeeRecord = function(array){
  return {
      firstName: array[0], // first name to be the first index[0]
      familyName: array[1], // family name to be the second index[1]
      title: array[2], // name to be the third index[2]
      payPerHour: array[3], // payPerHour to be the fourth index [3]
      timeInEvents: [], // timeInEvents to be an empty array
      timeOutEvents: [] // timeoutEvents to be an empty array
  }
}
// to make an array out of the created employee record array above
let createEmployeeRecords = function(employeeRowData) {
  return employeeRowData.map(function(array){
      return createEmployeeRecord(array)
  })
}
// to create an array of that splits the date and hour adds it to the employee record as a new object
let createTimeInEvent = function(dateStamp){
  let [date, hour] = dateStamp.split(' ')

  this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
  })

  return this
}
// to create an array of that splits the date and hour adds it to the employee record as a new object with properties
let createTimeOutEvent = function(dateStamp){
  let [date, hour] = dateStamp.split(' ')

  this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
  })

  return this
}
// to calculate hours worked
let hoursWorkedOnDate = function(soughtDate){
  let inEvent = this.timeInEvents.find(function(e){
      return e.date === soughtDate
  })

  let outEvent = this.timeOutEvents.find(function(e){
      return e.date === soughtDate
  })

  return (outEvent.hour - inEvent.hour) / 100
}
// to calculate wages earned for each employee on a date 
let wagesEarnedOnDate = function(dateSought){
  let rawWage = hoursWorkedOnDate.call(this, dateSought)
      * this.payPerHour
  return parseFloat(rawWage.toString())
}
// to find employee by first name
let findEmployeeByFirstName = function(srcArray, firstName) {
return srcArray.find(function(rec){
  return rec.firstName === firstName
})
}
// to calculate wages earned for all employee
let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
  }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
  
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
  
    return payable
  }

