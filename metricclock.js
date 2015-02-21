function displayTime() {
  var milli = new Date().getTime();
  var newYear = new Date(2015, 0, 1, 0, 0, 0, 0);
  var fresh = Date.parse(newYear);
  var year = new Date().getFullYear();

  var thisYear = milli - fresh;

  metricMilliThisYear = thisYear / 1.05192;

  mweeks = Math.floor(metricMilliThisYear / 1000000000);

  mdays = Math.floor(metricMilliThisYear / 100000000);
  mDaysThisWeek = mdays - (mweeks * 10);

  mhours = Math.floor(metricMilliThisYear / 10000000);
  mHoursToday = mhours - (mdays * 10);

  if(mHoursToday < 10){
    mHoursToday = "0" + mHoursToday;
  }

  mminutes = Math.floor(metricMilliThisYear / 100000);
  mMinutesThisHour = mminutes - (mhours * 100);

  if(mMinutesThisHour < 10){
    mMinutesThisHour = "0" + mMinutesThisHour;
  }

  mseconds = Math.floor(metricMilliThisYear / 1000);
  mSecondsThisMinute = mseconds - (mminutes * 100);

  if(mSecondsThisMinute < 10){
    mSecondsThisMinute = "0" + mSecondsThisMinute;
  }

  var suffix = null;
  if(mDaysThisWeek === 1){
    suffix = "st";
  }
  else if(mDaysThisWeek === 2){
    suffix = "nd";
  }
  else if(mDaysThisWeek === 3){
    suffix = "rd";
  }
  else{
    suffix = "th";
  }

  var weekSuffix = null;
  if(mweeks === 1){
    weekSuffix = "st";
  }
  else if(mweeks === 2){
    weekSuffix = "nd";
  }
  else if(mweeks === 3){
    weekSuffix = "rd";
  }
  else{
    weekSuffix = "th";
  }

  var dayDiv = document.getElementById('day');
  dayDiv.innerHTML = "Today is the " + mDaysThisWeek + suffix + " metric day of the week.";

  var weekDiv = document.getElementById('week');
  weekDiv.innerHTML = "It is the " + mweeks + weekSuffix + " metric week this year.";

  var clockDiv = document.getElementById('clock');
  clockDiv.innerHTML = mHoursToday + ":" + mMinutesThisHour + ":" + mSecondsThisMinute;
}

setInterval(displayTime, 1051.92);
