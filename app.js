const shieldGroup = document.querySelector("#ActionGroup");
console.log(shieldGroup);

const tween = gsap.to("#ShieldOuter", { fill: "purple", duration: 1 });
tween.pause();

window.onload = main;

function main() {
  const observer = new IntersectionObserver(onObserve);
  observer.observe(shieldGroup);
}

function onObserve(entries, observerObject) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.intersectionRatio > 0) {
      console.log("firing");
      tween.play();
    }
  });
}

//tween.play();
