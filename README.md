# hourlyPay.js
A simple node.js script for hourly paid workers that calculates how much you already earned today. 

## Usage
```node hourlyPay.js HH:MM mm```  
* HH:MM describes the time (HH = Hours, MM = Minutes) when you checked in at your workplace.
* mm describes how many minutes of break you did today (lunch, etc...)
* default checkin time is 09:00 and default break time is 30 minutes -> these will be used when no arguments are passed 

## Examples (with a hourly rate of 13€)
* With no passed arguments (default for checkin is 09:00 and default for break time is 30 minutes)
```
$ node hourlyPay.js 

Checkin time : 09:00 --> 9
Current time : 17:01 --> 17.02
Hours worked : 8.02 Hours
Lunchbreak   : 0.50 Hours (30 Minutes)
Work - Lunch : 7.52 Hours
Earned money : 97.76€ (7.52 x 13)

```
* With checkin time 13:37 and 5 minutes of break time
```
$ node hourlyPay.js 13:37 5

Checkin time : 13:37 --> 13.62
Current time : 17:03 --> 17.05
Hours worked : 3.43 Hours
Lunchbreak   : 0.08 Hours (5 Minutes)
Work - Lunch : 3.35 Hours
Earned money : 43.55€ (3.35 x 13)

```

## Customization
The hourly rate can be adapted in the code: just set `var moneyPerHour = XX;` to whatever you earn in an hour.  
The currency can also be adapted, change `var currency = "€";`  
The defaults for checkin time and break time can also be changed, change `var passedCheckInTiny = "09:00";` and `var lunchBreak = 30;` respectively.

##How to get global access to the script
* Clone the repository
* Create a symlink:
    * From `hourlyPay.js` in the cloned repo 
    * To your local bin environment thingy thing (On Mac OS: `/usr/local/bin`)
    * Example: `ln -s ~/Repositories/hourlyPay.js/hourlyPay.js /usr/local/bin/hourlyPay`
* You now can access it everywhere by typing `hourlyPay HH:MM`
