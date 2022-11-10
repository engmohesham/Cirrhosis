const divOne = document.getElementById("one"),
  divTwo = document.getElementById("two"),
  divThree = document.getElementById("three"),
  divFour = document.getElementById("four");

let arrowUp = document.getElementById("up"),
  arrowDown = document.getElementById("down");

arrowDown.addEventListener("click", function () {
  if (divOne.classList.contains("active")) {
    divOne.classList.remove("active"),
      (divOne.style.top = "150%"),
      divTwo.classList.add("active"),
      (divTwo.style.top = "50%");
    arrowUp.style.opacity = "1";
  } else if (divTwo.classList.contains("active")) {
    divTwo.classList.remove("active"),
      (divTwo.style.top = "150%"),
      divThree.classList.add("active"),
      (divThree.style.top = "50%");
  } else if (divThree.classList.contains("active")) {
    divThree.classList.remove("active"),
      (divThree.style.top = "150%"),
      divFour.classList.add("active"),
      (divFour.style.top = "50%");
    arrowDown.style.opacity = "0";
  }
});

arrowUp.addEventListener("click", function () {
  if (divFour.classList.contains("active")) {
    divFour.classList.remove("active"),
      (divFour.style.top = "-50%"),
      divThree.classList.add("active"),
      (divThree.style.top = "50%");
    arrowDown.style.opacity = "1";
  } else if (divThree.classList.contains("active")) {
    divThree.classList.remove("active"),
      (divThree.style.top = "-50%"),
      divTwo.classList.add("active"),
      (divTwo.style.top = "50%");
  } else if (divTwo.classList.contains("active")) {
    divTwo.classList.remove("active"),
      (divTwo.style.top = "-50%"),
      divOne.classList.add("active"),
      (divOne.style.top = "50%");
    arrowUp.style.opacity = "0";
  }
});
















// const divTest = document.querySelectorAll(".testSection"),
//   testAllSection = document.querySelector(".testAllSection");

// var n = 3,
//   count = 0;
// testAllSection.onclick = function () {
//   if (count == 3) {
//     (divTest[0].style.top = "50%"),
//       (divTest[1].style.top = "-50%"),
//       (divTest[2].style.top = "-50%");
//     divTest[3].style.top = "-50%";
//     divTest[0].classList.add("active");
//     count = 0;
//     arrowDown.style.opacity = "1";
//     arrowUp.style.opacity = "0";
//   } else if (divOne.classList.contains("active")) {
//     count = 0;
//     divTest[count].classList.remove("active"),
//       (divTest[count].style.top = "150%"),
//       divTest[count + 1].classList.add("active"),
//       (divTest[count + 1].style.top = "50%");
//     count++;
//     arrowUp.style.opacity = "1";
//   } else if (divTwo.classList.contains("active")) {
//     divTest[count].classList.remove("active"),
//       (divTest[count].style.top = "150%"),
//       divTest[count + 1].classList.add("active"),
//       (divTest[count + 1].style.top = "50%");
//     count++;
//   } else if (divThree.classList.contains("active")) {
//     divTest[count].classList.remove("active"),
//       (divTest[count].style.top = "150%"),
//       divTest[count + 1].classList.add("active"),
//       (divTest[count + 1].style.top = "50%");
//     count++;
//     arrowDown.style.opacity = "0";
//   }
// };
// for (let i = 0; n > i; i++) {

// }
// if(divFour.classList.contains("active")){
//     divTest[i].classList.remove("active"),
//     (divTest[i].style.top = "150%"),
//     divTest[i + 1].classList.add("active"),
//     (divTest[i + 1].style.top = "50%");
//     arrowDown.style.opacity = "0";
//   }
