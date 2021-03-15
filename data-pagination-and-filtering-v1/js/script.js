/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
@author Joelle Walley
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
         let studentListIndexer = list[i];
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
   //Insert the elements you have created to the link-list variable you created earlier. 
   linkList.addEventListener('click', goToPage);
}

/**
 * searchbar function adapted from simple search warmup from project. 
 * This function allows the user to search for students throughout the data.
 */

const header = document.querySelector('.header');
header.innerHTML += `<label for="search" class="student-search">
            <span>Search by name</span>
            <input id="search" placeholder="Search by name...">
            <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
          </label>`;
const searchInput = document.querySelector('#search');
const submitButton = document.querySelector('button');

function searchBarFunc(list) {
   const filtered = searchInput.value.toLowerCase();
   const searchFiltered = [];

   if (filtered.length !== 0) {
      for (let i = 0; i < list.length; i++) {
         const fullName = `${list[i].name.first.toLowerCase()} ${list[i].name.last.toLowerCase()}`;
         if (fullName.includes(filtered)) {
            searchFiltered.push(list[i]);
         }
      }

      showPage(searchFiltered, 1);
      addPagination(searchFiltered);

      const noSearchFound = document.createElement('span');
      document.querySelector('.student-list').appendChild(noSearchFound);

      if (searchFiltered.length === 0) {
         noSearchFound.textContent = `No results found for ${searchInput.value}`;
      } else {
         noSearchFound.textContent = '';
      }
   } else {
      showPage(list, 1);
      addPagination(list);
   }
}

/**
 * Event listeners for buttons - 
 * Invoke your search function in the body of the callbacks 
 * in the event listeners below
 */

/* submit listener */
submitButton.addEventListener('click', (event) => {
   event.preventDefault();
   searchBarFunc(data);
   console.log('Submit button is functional!');
});

/* submit listener */
searchInput.addEventListener('keyup', () => {
   searchBarFunc(data);
   console.log('Keyup event on the Search input is functional!');
});

// Call functions

showPage(data, 1);
addPagination(data);
