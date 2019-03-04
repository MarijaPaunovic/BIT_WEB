// VEZBA 1. Using JS on web page
// On-page Script
// Create a script tag on the page
// It should contain code that console.log’s some text
// Wrap the previous script in a function
// When page is loaded, trigger the function

// External JS Files
// Include an external JS script on the page.
// The script should contain a function that uses console.log to print something.
// Trigger that function.

// function printName() {
//     console.log("ZDRAVO!")
// }
// printName(); 


// VEZBA 2. BOM (Window object)

//  window.navigator
//  Create a function that prints out in the console the following information
//  the platform on which the browser is running
//  the information about the browser version
//  the company that created that browser
//  Each piece of information should be printed out in a new row.

//  Create new “isOnline” function that checks if the browser is online.
//  It should print out “online” when the browser is online and “offline” when there is no Internet connection.

// function findBrowser() {
//     console.log(window.navigator.platform);
//     console.log(window.navigator.appVersion);
//     console.log(window.navigator.vendor);
// }
// findBrowser();

// function isOnline() {
//     if (window.navigator.onLine) {
//         console.log("online");
//     }
//     else {
//         console.log("offline");
//     }
// }
// isOnline();


// VEZBA 3. window.screen
// Create a function that prints out the following information in the console:
// current browser width and height
// max possible browser height

// function findSizeOfScreen() {
//     console.log(window.screen.width);
//     console.log(window.screen.height);
//     console.log(window.screen.availHeight);
// }

// findSizeOfScreen();

// VEZBA 4. window.location
// Write a function that prints out website’s url information in the console:
// full url address
// domain name
// used protocol
// parameters which are part of URL.

// Create a function for reloading the page.
// Create a function that redirects you to a website address passed to it.
// Test all three functions

// function findLocation() {
//     console.log(window.location.href);
//     console.log(window.location.hostname);
//     console.log(window.location.protocol);
//     console.log(window.location.search);
// }
// findLocation();

// function reloadPage() {
//     window.location.reload(); // napisati u consol
// }

// function redirectPage() {
//     window.location.href = "https://www.blic.rs/";
// }
// redirectPage();

// VEZBA 5. window.localStorage
// Create a function that stores passed data in the browser local storage.
// Create a function that reads the stored data, and print it out in console.
// If there is no data, print "There is no data" in the console.
// Create a function that removes data from the local storage.

// Use the previously created functions to store/read/remove some data.
// Then add some data in storage and close the browser.
// Open the browser again on the same page and use the function to read the stored value.

// Modify functions to work with sessionStorage instead of localStorage.
// Try same scenario as with localStorage to examine data livecycle.

// function storeData(keyname, value) {
//     window.localStorage.setItem(keyname, value)
// }
// storeData('Ime', "Marina");

// function readData(keyname) {
//     console.log(window.localStorage.getItem(keyname));
// }
// readData('Ime');

// function removeName(keyname) {
//     window.localStorage.removeItem(keyname);
// }
// removeName("Ime");

// function findeOut() {
//     console.log(window.localStorage.length);
// }
// findeOut();

// //

// function storeData(keyname, value) {
//     window.localStorage.setItem(keyname, value);
// }
// storeData('Ime', "Ana");

// function readData(keyname) {
//     console.log(window.localStorage.getItem(keyname));
// }
// readData('Ime');

// ////

// function storeData(keyname, value) {
//     window.sessionStorage.setItem(keyname, value);
// }
// storeData('Ime', "Maja");

// function readData(keyname) {
//     console.log(window.sessionStorage.getItem(keyname));
// }
// readData('Ime');


// VEZBA 6. window.history
// Play around with the browser forward/back navigation.
// Implement a function that navigates two pages back.



// VEZBA 7. Window Methods
// Create a function that shows the user a greeting message using alert
// Then a question is presented to the user using prompt
// When the user provides the answer, that answer is used in the confirm dialog
// The format of the message in the dialog should be: "We will submit this answer now! " + the answer
// If the user clicks OK, show alert with success message
// If the user clicks Cancel, don't show anything

// function greetUser() {
//     alert("Bezi odavde")
// }
// greetUser();

function promtToUser() {
    var answer = prompt("Odakle si?")
    console.log(answer);


    var conf = confirm("We will submit this answer now  " + answer + " !!!")
    console.log(conf);
    if (conf) {
        alert('SUCCESS!!!')
    } else {
        alert('NOOOO!!!')
    }
}
promtToUser();


