    // catch html element from dom
var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');
var ampm = document.querySelector('.ampm');
var ddy = document.querySelector('.ddy')
var dd = document.querySelector('.dd')



// making a mesine for this app
 function myTime(){
var time = new Date();
 	
//time maker 
 var getHour = time.getHours();
 var getMinute = time.getMinutes();
 var getSecond = time.getSeconds();


//ddy(date day year)
var day = time.getDate();
var month = time.getMonth();
var year = time.getFullYear();

var dd = day +"-"+month+1+"-"+year;

console.log(dd)
//dd(date day)
var day = time.getDay();

switch (day) {
	
	case 0:
		// statements
var d = 'Sunday'
		break;

	case 1:
		// statements
var d = 'Monday'
		break;
	
		case 2:
		// statements
var d = 'Tuesday'
		break;
	
		case 3:
		// statements
var d = 'Wednesday'
		break;
	
		case 4:
		// statements
var d = 'Thursday'
		break;
	
		case 5:
		// statements
var d = 'Friday'
		break;
	
		case 6:
		// statements
var d = 'Saturday'


}

	//logic and condition
if(getHour>12){
 getHour -= 12
var m = 'PM';
}else if (getHour == 0){

getHour += 12;
var m = 'AM' 
}else if( getHour <= 12){
	var m = 'AM';
}

//ternary oparator for in 0 before a single number
var x = 10>getHour? "0"+getHour: getHour;
var y = 10>getMinute? "0"+getMinute: getMinute;
var z = 10>getSecond? "0"+getSecond: getSecond;		


//for display output
ddy.innerHTML = dd;
dd.innerHTML = d;
hour.innerHTML = x ;
minute.innerHTML = y;
second.innerHTML = z;
ampm.innerHTML = m;
 }
setInterval(myTime,1000)