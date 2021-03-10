/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   // create two variables which will represent the index for the first and last student on the page
   let startIndex = ((page * 9) - 9);
   let endIndex = page * 9;
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
               // insert the above elements = stored in studentItem 
      studentList.insertAdjacentHTML('beforeend', studentItem);

      }
   }
}

// inside the loop create a conditional to display the proper students
// inside the conditional:
// create the elements needed to display the student information


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   // create a variable to calculate the number of pages needed
   const numOfPages = Math.ceil(list.length / data.length);
   // select the element with a class of `link-list` and assign it to a variable
   let linkList = document.querySelector('.link-list');
   // set the innerHTML property of the variable you just created to an empty string
   linkList.innerHTML = '';
   // loop over the number of pages needed
   for (let i = 1; i <= Math.round(numOfPages); i++) {
      //<li>
      //<button type="button">1</button>
 //</li >
      //Insert the elements you have created to the 
      //link-list variable you created earlier. 
      //The insertAdjacentHTML 
      //

   }
   // create the elements needed to display the pagination button
   // insert the above elements

   // give the first pagination button a class of "active"

   // create an event listener on the `link-list` element

   // if the click target is a button:
   // remove the "active" class from the previous button
   // add the active class to the clicked button
   // call the showPage function passing the `list` parameter and page to display as arguments
   // showPage(list, page);
}

// @source https://www.w3schools.com/howto/howto_js_filter_lists.asp
//function myFunction() {
// Declare variables:
// var input, filter, ul, li, a, i, txtValue;
// input = document.getElementById('myInput');
// filter = input.value.toUpperCase();
// ul = document.getElementById("myUL");
// li = ul.getElementsByTagName('li');

//Loop through all list items, and hide those who don't match the search query
// for (i = 0; i < li.length; i++) {
//    a = li[i].getElementsByTagName("a")[0];
//    txtValue = a.textContent || a.innerText;
//    if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//    } else {
//       li[i].style.display = "none";
//    }
// }
// }


// Call functions

//showPage();
//addPagination();

