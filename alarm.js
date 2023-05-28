const alarmTimeInput = document.getElementById("alarmTime");
const alarmSound = document.getElementById("alarmSound");
const feedback = document.getElementById("feedback");
let alarmInterval;
function setAlarm() {
  let alarmTime = alarmTimeInput.value;
  //   console.log("type", typeof alarmTime);
  //   console.log("alarmTime", alarmTime);
  let now = new Date();
  const hours = alarmTime.substr(0, 2);
  const minutes = alarmTime.substr(3, 2);
  console.log("hours", hours);
  console.log("minutes", minutes);
  let alarm = new Date();
  alarm.setHours(hours);
  alarm.setMinutes(minutes);
  alarm.setSeconds(0);
  // To check the time is today or tommorrow
  if (alarm < now) {
    alarm.setDate(alarm.getDate() + 1);
  }
  const timeLeft = alarm - now;
  alarmInterval = setTimeout(() => {
    playAlarm();
  }, timeLeft);
  console.log("now", now);
  console.log("alarm", alarm);
}

function stopAlarm() {
  clearTimeout(alarmInterval);
  alarmSound.pause();
  feedback.innerHTML = "";
}

function playAlarm() {
  alarmSound.play();
  feedback.innerHTML = "AlARM PLAYED!!";
}
// console.log("alarmSound", alarmSound);
