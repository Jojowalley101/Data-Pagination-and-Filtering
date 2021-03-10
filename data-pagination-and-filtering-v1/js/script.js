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
      //startIndex = (page parameter * items per page) - items per page
      //endIndex = page parameter * items per page
   // select the element with a class of `student-list` and assign it to a variable
      // studentList = document.querySelector('ul');

   // set the innerHTML property of the variable you just created to an empty string
      //studentList.innerHTML = " ";

   // loop over the length of the `list` parameter
         //for (let i = 0; i < studentList.length; i++) {
            //if (i >= startIndex && i < endIndex) {
               //var studentItem = document.createElement(" ");
               //studentItem.innerHTML = '(inset text here)'
               // temperate literal = `string text ${expression} string text`
               //document.body.appendChild(studentItem);
               //studentItem.insertAdjacentHTML('beforeend', '(insert text here)');

            //}

         //}
   // inside the loop create a conditional to display the proper students
   // inside the conditional:
   // create the elements needed to display the student information
   // insert the above elements
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   // create a variable to calculate the number of pages needed
      //numOfPages = Math.ceil(list.length / items per page);
      

   // select the element with a class of `link-list` and assign it to a variable
      // const linkList = document.querySelector('ul');
   // set the innerHTML property of the variable you just created to an empty string
      // linkList.innerHTML = '';
   // loop over the number of pages needed
      // for (let i = 1; i <= numOfPages; i--) {
         

      //}
   // create the elements needed to display the pagination button
   // insert the above elements

   // give the first pagination button a class of "active"

   // create an event listener on the `link-list` element
   // if the click target is a button:
   // remove the "active" class from the previous button
   // add the active class to the clicked button
   // call the showPage function passing the `list` parameter and page to display as arguments
}


// Call functions

//showPage();
//addPagination();

