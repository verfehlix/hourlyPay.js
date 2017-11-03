#!/usr/bin/env node

//OPTIONS - check in and lunch break can be passed as arguments too
var moneyPerHour = 12.5
var currency = '€'
var passedCheckInTiny = '09:00'
var lunchBreak = 0

//get checkin time from user argument
process.argv.forEach(function(val, index, array) {
	if (index === 2) {
		passedCheckInTiny = val
	}
	if (index === 3) {
		lunchBreak = val
	}
})

//check if a checkin time was given
if (!passedCheckInTiny) {
	console.error(
		'Error! Please pass your checkin-time as an argument! Example:'
	)
	console.error('node hourlyPay.js 09:22')
	process.exit(1)
}

//calculate the current time
var now = new Date()
var nowHours = now.getHours()
if (nowHours < 10) {
	nowHours = 0 + '' + nowHours
}
var nowMins = now.getMinutes()
if (nowMins < 10) {
	nowMins = 0 + '' + nowMins
}
var nowTiny = nowHours + ':' + nowMins

//extrapolate hours and minutes from given checkin time
var checkInHours = parseInt(passedCheckInTiny.split(':')[0], 10)
var checkInMins = passedCheckInTiny.split(':')[1]

//create fractions of 60 from the times so we can calculate with them
var checkInMinsFraction = Math.round(checkInMins / 60 * 100) / 100
var nowMinsFraction = Math.round(nowMins / 60 * 100) / 100

//add numbers together so we get the actual hours
var checkInCalc = checkInHours + checkInMinsFraction
var nowCalc = nowHours + nowMinsFraction

console.log('')
console.log('Checkin time : ' + passedCheckInTiny + ' --> ' + checkInCalc)
console.log('Current time : ' + nowTiny + ' --> ' + nowCalc)

//calculate the worked hours and the earned money
var hoursWorkedNoLunch = (Math.round((nowCalc - checkInCalc) * 100) / 100
).toFixed(2)

//subtract lunch break
var lunchBreakFraction = (Math.round(lunchBreak / 60 * 100) / 100).toFixed(2)
var hoursWorked = (hoursWorkedNoLunch - lunchBreakFraction).toFixed(2)

var earnedMoney = (hoursWorked * moneyPerHour).toFixed(2)

console.log('Hours worked : ' + hoursWorkedNoLunch + ' Hours')
console.log(
	'Lunchbreak   : ' +
		lunchBreakFraction +
		' Hours (' +
		lunchBreak +
		' Minutes)'
)
console.log('Work - Lunch : ' + hoursWorked + ' Hours')
console.log(
	'Earned money : ' +
		earnedMoney +
		currency +
		' (' +
		hoursWorked +
		' x ' +
		moneyPerHour +
		')'
)
console.log('')
