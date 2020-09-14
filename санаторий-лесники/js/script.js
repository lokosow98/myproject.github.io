(function () {

	function getTimeRemaining(endtime) {
	  var t = Date.parse(endtime) - Date.parse(new Date());
	  var seconds = Math.floor((t / 1000) % 60);
	  var minutes = Math.floor((t / 1000 / 60) % 60);
	  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	  var days = Math.floor(t / (1000 * 60 * 60 * 24));
	  return {
	    'total': t,
	    'days': days,
	    'hours': hours,
	    'minutes': minutes,
	    'seconds': seconds
	  };

	}

	function initializeClock(id, endtime) {
	  var clock = document.getElementById(id);
	  var daysSpan = document.querySelector('.day');
	  var hoursSpan = document.querySelector('.hours');
	  var minutesSpan = document.querySelector('.minutes');

	  function updateClock() {
	    var data = new Date();
	    console.log(data);
	    var t = getTimeRemaining(endtime);

	    // ----Минуты

	    var minutesBar = document.querySelector(".timer-svg-minutes").querySelector("circle");

	    var offsetMinutes = (2 * Math.PI * minutesBar.r.baseVal.value) - t.minutes/60 * (2 * Math.PI * minutesBar.r.baseVal.value);

	    minutesBar.style.strokeDashoffset = offsetMinutes;

	    // ----Часы

	    var hoursBar = document.querySelector(".timer-svg-hours").querySelector("circle");

	    var offsetHours = (2 * Math.PI * hoursBar.r.baseVal.value) - (1 - (t.hours/24)) * (2 * Math.PI * hoursBar.r.baseVal.value);

	    hoursBar.style.strokeDashoffset = offsetHours;

	    // ----Дни

	    var daysBar = document.querySelector(".timer-svg-day").querySelector("circle");

	    var offsetDays = t;

	    daysBar.style.strokeDashoffset = offsetDays;

	    // -----

	    daysSpan.innerHTML = t.days;
	    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
	    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);

	    console.log(t.days);

	    if (t.total <= 0) {
	      clearInterval(timeinterval);
	    }
	  }

	  updateClock();
	  var timeinterval = setInterval(updateClock, 1000);
	}

	var deadline="Sun Nov 8 2019 00:00:00 GMT+0600"; 
	initializeClock('countdown', deadline);
})();