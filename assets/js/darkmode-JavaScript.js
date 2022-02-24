// JavaScript:
// // Checks to see if darkmode is in LS for persistence 
// function checkLocalStorageDM() {
//   if(window.localStorage.getItem('darkmode')){
//     darkModeTest()
//   } else {
//     return
//   }
// }
// //Switches to darkmode
// function darkModeTest() {
//   // Toggles the CSS class
//   document.body.classList.toggle('dark-mode')
//   if (document.body.classList.contains('dark-mode')) {
//     // If darkmode put object in LS
//     window.localStorage.setItem('darkmode', true)
//     console.log('[!] Dark Mode Enabled')
//   } else {
//     console.log('[!] Light Mode Enabled')
//     window.localStorage.removeItem('darkmode')
//   }
// }
// // Runs the check on page load 
// checkLocalStorageDM()
// HTML:
// <button onclick="darkModeTest()"> &#127763;</button>
// CSS:
// /* Assign Vars for default "lightmode" */
// :root {
//     --main-bg-color: #0c3041;
//     --main-txt-color: #2bc0c8;
//     --main-dark: #06060f;
//     --main-vanta-bg: #2993c0;
//     --main-teal: #1a5a7a;
//   }
// /* Dark Mode Class */
// .dark-mode {
//     --main-bg-color: black;
//     --main-txt-color: #66FF66;
//     --main-dark: #FF355E;
//     --main-vanta-bg: #9C51B6;
//     --main-teal: black;
// }