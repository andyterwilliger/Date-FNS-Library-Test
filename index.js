
import { intervalToDuration, differenceInDays, differenceInMonths } from 'date-fns'
import './style.css';


let formDay = document.getElementById("form_day");
let formMonth = document.getElementById("form_month");
let formYear = document.getElementById("form_year");
let form = document.getElementById("form")
let yearsResults = document.getElementById('years_results');
let monthsResults = document.getElementById('months_results');
let daysResults = document.getElementById('days_results');
let formInput = document.querySelectorAll('.form_input')
let formResults = document.querySelectorAll('.form_results')
// Get the duration between January 15, 1929 and April 4, 1968.
console.log(intervalToDuration({
  start: new Date(1929, 0, 15, 12, 0, 0),
  end: new Date(1968, 3, 4, 19, 5, 0)
}))


function invalidInput(){
  if(formYear.value === "" || formMonth.value === "" || formDay.value ===""){
    for(let i = 0; i < formResults.length; i++){
      formResults[i].innerHTML= "--";
      formResults[i].style.color= "red"
    }

  
  }
  if(formMonth.value > 12 || formMonth.value < 1){
    monthsResults.style.color="red";
    monthsResults.innerHTML="--"
  }
 if(formDay.value < 1 || formDay.value > 31){
    daysResults.style.color="red";
    daysResults.innerHTML="--"
  }
}

// => { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }
//Function to calculate distance between Date and birthday
form.addEventListener('submit', function(e){
  e.preventDefault()
  console.log('submitted')
  //Date Fns interval to duration function
  //subract 1 from each month value since date fns starts January at 0
  formMonth.value--;
  let results = intervalToDuration({
    start: new Date(formYear.value, formMonth.value, formDay.value, 12, 0, 0),
    end: new Date()
  })
  console.log(results)
  yearsResults.innerHTML=results.years + " years";
  monthsResults.innerHTML=results.months + " months";
  daysResults.innerHTML=results.days + " days";
  invalidInput()

})


