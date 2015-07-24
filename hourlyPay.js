var moneyPerHour = 13;

//get checkin time from user argument
var passedCheckInTiny = "";
process.argv.forEach(function(val, index, array) {
	if (index === 2) {
		passedCheckInTiny = val;
	}
});

//check if a checkin time was given
if (!passedCheckInTiny) {
	console.error("Error! Please pass your checkin-time as an argument! Example:");
	console.error("node hourlyPay.js 09:22");
	process.exit(1);
}

//calculate the current time
var now = new Date();
var nowHours = now.getHours();
var nowMins = now.getMinutes();
var nowTiny = nowHours + ":" + nowMins;

//extrapolate hours and minutes from given checkin time
var checkInHours = parseInt(passedCheckInTiny.split(":")[0],10);
var checkInMins = passedCheckInTiny.split(":")[1];

//create fractions of 60 from the times so we can calculate with them
var checkInMinsFraction = Math.round((checkInMins / 60) * 100) / 100;
var nowMinsFraction = Math.round((nowMins / 60) * 100) / 100;

//add numbers together so we get the actual hours
var checkInCalc = checkInHours + checkInMinsFraction;
var nowCalc = nowHours + nowMinsFraction;

console.log("Checkin time: " + passedCheckInTiny + " --> " + checkInCalc);
console.log("Current time: " + nowTiny + " --> " + nowCalc);

//calculate the worked hours and the earned money
var hoursWorked = Math.round((nowCalc - checkInCalc) * 100) / 100;
var earnedMoney = (hoursWorked * moneyPerHour).toFixed(2);

console.log("Hours worked: " + hoursWorked);
console.log("Earned money: " + earnedMoney + "€");