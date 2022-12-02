// Code here.
// If you want to use a variable, use $ and curly braces.
// For example, to use a fixed random number:
// var someFixedRandomValue = "weerwe";

// Also in react based content script it doesnt work right from the load, need some small time to mount

// document.body.onclick = function (e) {
//   e.stopPropagation();
//   e.preventDefault();
// };

// let sectionRootNodes = [];

// document.addEventListener("update_section_root_nodes", (evt) => {
//   console.log("evt", evt);
//   if (evt && evt.detail && evt.detail.nodes) {
//     console.log("update_section_root_nodes", evt.detail);
//     sectionRootNodes = evt.detail.nodes;
//   } else {
//     console.log("update_section_root_nodes empty");
//   }
// });

// document.body.onmouseup = function (e) {
//   if (e.which !== 1) {
//     return true;
//   }
//   // e.target
//   // alert('hello');
//   // return true;

//   try {

//   } catch (error) {
//     if (error.message !== "") throw new Error(error);
//     else {
//       console.log("met");
//     }
//   }
// };
