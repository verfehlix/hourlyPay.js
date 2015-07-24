# hourlyPay.js
A simple node.js script for hourly paid workers that calculates how much you already earned today. 

## Usage
```node hourlyPay.js HH:MM```  
* HH:MM describes the time (HH = Hours, MM = Minutes) when you checked in at your workplace.

## Example (with a hourly rate of 13€)
```
$ node hourlyPay.js 09:20
Checkin time: 09:20 --> 9.33
Current time: 13:58 --> 13.97
Hours worked: 4.64
Earned money: 60.32€
```

## Customization
The hourly rate can be adapted in the code: just set `var moneyPerHour = XX;` to whatever you earn in an hour.

##How to get global access to the script
* Clone the repository
* Create a symlink:
    * From `hourlyPay.js` in the cloned repo 
    * To your local bin environment thingy thing (On Mac OS: `/usr/local/bin`)
    * Example: `ln -s ~/Repositories/hourlyPay.js/hourlyPay.js /usr/local/bin/hourlyPay`
* You now can access it everywhere by typing `hourlyPay HH:MM`
