let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  // I'm moving the text down in relation to the page scroll
  //        alternatively I could use useScroll form VueUse
  text.style.marginTop = value * 2.5 + "px";

  //now I'm moving the leaf to disappear over the top and to the right
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1 + "px";
  //now I'm moving the hill on the right to disappear together with the leaf
  hill5.style.left = value * 1 + "px";

  //now I'm moving the hill to the left to disappear over the left margin
  hill4.style.left = value * -1 + "px";

  // Now I'm moving the background hills to disappear down
  hill1.style.top = value * 1 + "px";

  //   console.log("Scroll: " + value);
  //   console.log("Margin: " + text.style.marginTop);
});
