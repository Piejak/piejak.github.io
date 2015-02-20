function displayTime() {
  var milli = new Date().getTime();
  var newYear = new Date(2015, 0, 1, 0, 0, 0, 0);
  var fresh = Date.parse(newYear);

  var thisYear = milli - fresh;

  metricMilliThisYear = thisYear / 1.05192;

  mweeks = Math.floor(metricMilliThisYear / 1000000000);

  mdays = Math.floor(metricMilliThisYear / 100000000);
  mDaysThisWeek = mdays - (mweeks * 10);

  mhours = Math.floor(metricMilliThisYear / 10000000);
  mHoursToday = mhours - (mdays * 10);
  mHoursString = mHoursToday.toString();

  mminutes = Math.floor(metricMilliThisYear / 100000);
  mMinutesThisHour = mminutes - (mhours * 100);
  mMinutesString = mMinutesThisHour.toString();

  mseconds = Math.floor(metricMilliThisYear / 1000);
  mSecondsThisMinute = mseconds - (mminutes * 100);
  mSecondsString = mSecondsThisMinute.toString();

  var clockDiv = document.getElementById('clock');
  clockDiv.innerHTML = mHoursString + ":" + mMinutesString + ":" + mSecondsString;
}

displayTime();
