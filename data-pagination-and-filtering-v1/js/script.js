/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

"use strict";

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
var studentsPerPage = 9; 
function showPage(list, page) {
   // create two variables which will represent the index for the first and last student on the page
   let startIndex = ((page * studentsPerPage) - studentsPerPage);
   let endIndex = page * studentsPerPage;
   // select the element with a class of `student-list` and assign it to a variable
   const studentList = document.querySelector('.student-list');

   // set the innerHTML property of the variable you just created to an empty string
   studentList.innerHTML = " ";

   // loop over the length of the `list` parameter
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
               //temperate literal = `string text ${expression} string text
         let studentListIndexer = data[i];
               // create the elements needed to display the student information
         let studentItem = `<li class="student-item cf">
    <div class="student-details">
      <img class="avatar" src="${studentListIndexer.picture.large}" alt="Profile Picture">
      <h3>${studentListIndexer.name.first} ${studentListIndexer.name.last}</h3>
      <span class="email">${studentListIndexer.email}</span>
    </div>
    <div class="joined-details">
      <span class="date"> ${studentListIndexer.registered.date}</span>
    </div>
  </li>`;
         // console.log(studentListIndexer);
               // insert the above elements = stored in studentItem 
      studentList.insertAdjacentHTML('beforeend', studentItem);

      }
   }
}
// showPage(data, 2);
// inside the loop create a conditional to display the proper students
// inside the conditional:
// create the elements needed to display the student information


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   // create a variable to calculate the number of pages needed
   let numOfPages = Math.ceil(list.length / studentsPerPage);
   // select the element with a class of `link-list` and assign it to a variable
   const linkList = document.querySelector('.link-list');
   // set the innerHTML property of the variable you just created to an empty string
   linkList.innerHTML = '';
   // loop over the number of pages needed
   for (let i = 1; i <= numOfPages; i++) {
      let button = `<li>
      <button type="button">${i}</button>
      </li >`;
      linkList.insertAdjacentHTML('beforeend', button);
   }
   let btn1 = document.querySelector('.link-list').firstChild;
   btn1.className = 'active';
   function goToPage(event) {
      if (event.target.tagName == "BUTTON") {
         let classNameActive = document.querySelector('.active');
         classNameActive.className = '';
         event.target.className = 'active';
         //console.log(event.target);
         showPage(list, event.target.textContent);

         //console.log(classNameActive);
      }
   }
   linkList.addEventListener('click', goToPage);
  
      //Insert the elements you have created to the 
      //link-list variable you created earlier. 
      //The insertAdjacentHTML 
      //
}
//showPage(data, 1);
//addPagination(data);

   // create the elements needed to display the pagination button
   // insert the above elements

   // give the first pagination button a class of "active"

   // create an event listener on the `link-list` element

   // if the click target is a button:
   // remove the "active" class from the previous button
   // add the active class to the clicked button
   // call the showPage function passing the `list` parameter and page to display as arguments
   // showPage(list, page);

const search = document.getElementById('#search-input');
const submit = document.querySelector('#submit');

/* Variable to store HTMLCollection of table cells that you'll search through
   But the same basic technique can work with other collections, even an array of objects */
const dataCells = document.querySelectorAll('data');

// Helpful log statements
console.log(search);
console.log(submit);
console.log(dataCells);

function searchForStudents(searchInput, names) {
   console.log(searchInput);
   console.log(names);
   for (let i = 0; i < names.length; i++) {
      names[i] = '';
      if (searchInput.value.length !== 0 && names[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
         names[i] = 'match';
      }
   }
}

/**
 * Event listeners for buttons - Invoke your search function in the body of the callbacks in the event listeners below
 */

/* submit listener */
submit.addEventListener('click', (event) => {
   event.preventDefault();

   // Invoke your search function here - Arguments: search, tableCells
   searchForStudents(search, dataCells);


   // Helpful log statement to test function
   console.log('Submit button is functional!');
});

/* submit listener */
search.addEventListener('keyup', () => {

   // Invoke your search function here - Arguments: search, tableCells
   searchForStudents(search, dataCells);


   // Helpful log statement to test function
   console.log('Keyup event on the Search input is functional!');
});

// Call functions

showPage(data, 1);
addPagination(data);
searchForStudents(search, dataCells);
