var currentHour = moment();
$("#currentDay").text(currentHour.format("MMMM Do YYYY, h:mm:ss a"));

let hour = moment().format('H')

var timeContainerEl = document.querySelectorAll(".time-container .row");
var descriptionEl = document.querySelectorAll(".description");
// var hour9 = document.querySelector("#hour9");
// var hour10 = document.querySelector("#hour10");
// var hour11 = document.querySelector("#hour11");
// var hour12 = document.querySelector("#hour12");
// var hour1 = document.querySelector("#hour1");
// var hour2 = document.querySelector("#hour2");
// var hour3 = document.querySelector("#hour3");
// var hour4 = document.querySelector("#hour4");
// var description = document.querySelector('.description');
var saveBtn = document.querySelectorAll('.saveBtn');

const standardTo24HourTimes = {
  "9am": 9,
  "10am": 10,
  "11am": 11,
  "12pm": 12,
  "1pm": 13,
  "2pm": 14,
  "3pm": 15,
  "4pm": 16,
  "5pm": 17,
};

const descriptionBox ={
  "save9": "hour9"
}



for (let i = 0; i < timeContainerEl.length; i++) {
  var time = timeContainerEl[i].firstElementChild.innerHTML;

  // Current time
  if (standardTo24HourTimes[time] === hour) {
    timeContainerEl[i].style.backgroundColor = "red";
  }

  // Future times
  if (standardTo24HourTimes[time] > hour) {
    timeContainerEl[i].style.backgroundColor = "green";
  }

  // Past times
  if (standardTo24HourTimes[time] < hour) {
     timeContainerEl[i].style.backgroundColor = "grey";
   }
}

function saveToLocalStorage(tasks){
  var currentLocalStorage = JSON.parse(localStorage.getItem('description')) || []
  currentLocalStorage.push(tasks)
  localStorage.setItem('description',JSON.stringify(currentLocalStorage))
}



saveBtn.forEach(btn => btn.addEventListener('click',savedailyTasks))

function savedailyTasks(){
console.log(saveBtn.id)
}


function savedailyTasks(evt){
console.log(evt.target.id)
var tasks = document.querySelector(`#hour${evt.target.id}`).value
var timeSlot = `#hour${evt.target.id}`
var taskObj = {}
taskObj[timeSlot]= tasks
saveToLocalStorage(taskObj)
}


// $(document).ready(funtion() {
//     $('saveBtn').click(function(){
// wow
//     const time = $(this).parent().attr('id')
//     const textArea = $(this).sibling(description).val()
//     localStorage.setItem(time, textArea)
//     console.log(timezone,textArea)

//     });
// });

