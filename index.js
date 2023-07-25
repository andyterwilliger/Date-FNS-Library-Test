
import { intervalToDuration } from 'date-fns'


let formDay = document.getElementById("form_day");
let formMonth = document.getElementById("form_month");
let formYear = document.getElementById("form_year");
let form = document.getElementById("form")
// Get the duration between January 15, 1929 and April 4, 1968.
console.log(intervalToDuration({
  start: new Date(1929, 0, 15, 12, 0, 0),
  end: new Date(1968, 3, 4, 19, 5, 0)
}))

// => { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }


form.addEventListener('submit', function(e){
  e.preventDefault()
  console.log('submitted')
  console.log(intervalToDuration({
    start: new Date(formYear.value, formMonth.value, formDay.value, 12, 0, 0),
    end: new Date()
  }))
})