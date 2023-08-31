function redirect() {
  window.location.href =
    "https://www.roblox.com/games/14116887622/Coming-Soon/";
}
window.onload = () => {
  displayWindowSize();
  document.body.style.overflowY = "visible";
  document.getElementById("LOADING").style.opacity = "0";
  let scrollTop =
    window.scrollY !== undefined
      ? window.scrollY
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  console.log(scrollTop);
};
function displayWindowSize() {
  if (window.innerWidth < 551) {
    document.getElementById("QouteText").style.fontSize = "large";
    document.getElementById("QouteText").style.width = "425px";
    document.getElementById("QouteBack").style.height = "100px";
    document.getElementById("TopBarButtons").style.gap = "50px";
  } else if (window.innerWidth < 650) {
    document.getElementById("SLIDE1").style.display = "flex";
  } else if (window.innerWidth < 731) {
    document.getElementById("WIPSTP").style.width = "400px";
    document.getElementById("WIPSTP").style.fontSize = "medium";
    document.getElementById("DIVIDER").style.width = "400px";
    document.getElementById("DIVIDER2").style.width = "400px";
    document.getElementById("QouteBack").style.height = "190px";
    document.getElementById("QouteText").style.fontSize = "x-large";
  } else if (window.innerWidth < 751) {
    document.getElementById("QouteText").style.fontSize = "x-large";
    document.getElementById("QouteText").style.width = "550px";
    document.getElementById("TopBarButtons").style.gap = "98px";
  } else if (window.innerWidth < 784) {
    document.getElementById("QouteText").style.fontSize = "x-large";
    document.getElementById("QouteText").style.width = "550px";
    document.getElementById("TopBarButtons").style.gap = "98px";
  } else if (window.innerWidth < 1026) {
    document.getElementById("WIPSTP").style.width = "700px";
    document.getElementById("WIPSTP").style.fontSize = "large";
    document.getElementById("DIVIDER").style.width = "700px";
    document.getElementById("DIVIDER2").style.width = "700px";
  } else {
    document.getElementById("QouteText").style.fontSize = "xx-large";
    document.getElementById("QouteText").style.width = "700px";
    document.getElementById("TopBarButtons").style.gap = "98px";
    document.getElementById("WIPSTP").style.width = "1000px";
    document.getElementById("DIVIDER").style.width = "1000px";
    document.getElementById("DIVIDER2").style.width = "1000px";
  }
}
function scrolled() {
  let scrollTop =
    window.scrollY !== undefined
      ? window.scrollY
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  if (scrollTop > 687) {
    document.getElementById("TopBar").style.opacity = "1";
  } else if (scrollTop < 688) {
    document.getElementById("TopBar").style.opacity = "0.98";
  }
}
window.addEventListener("resize", displayWindowSize);
window.addEventListener("scroll", scrolled);
