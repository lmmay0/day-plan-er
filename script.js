// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const row = document.getElementsByClassName("row")
// let currentHour= parseInt(moment().format('H'));
var now = dayjs().format("MMMM DD,YYYY")
$("#datetime").text(now)
console.log(now)
let date = new Date();
//let workHours =[9,10,11,12,13,14,15,16,17]
$(".saveBtn").on("click",function(){
  var hourKey =$(this).parent().attr("id").split("-").pop()
  var activity =$(this).siblings(".description").val()
localStorage.setItem(hourKey,activity)
})
// const colorSetter = document.getElementsByClassName("colorsetter");
// let hourNow = Date.now().getHours();//current hour
//fuction that sets color based on time 
// add rows from mid night to 1159
function poulateTimeblocks () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

for(let i = 9; i < 18; i++)  {
  // let textarea = document.createelement("textarea")
  //textarea.style.border = "1px solid black"
  let targetBlock = document.getElementById(`hour-${i}`)
  $("#textarea-"+i).val(localStorage.getItem(i))
  let currentHour = date.getHours()
  if (i<   currentHour ){
targetBlock.setAttribute("class","row time-block past")
  } else if (i ===   currentHour ) {
    targetBlock.setAttribute("class","row time-block present")
  }else if (i >   currentHour){
    targetBlock.setAttribute("class","row time-block future")
  }

}


// set key


// remove key

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
};
poulateTimeblocks ()
