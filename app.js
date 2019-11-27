const shieldGroup = document.querySelector(".actions");

const tl = gsap.timeline({
  repeat: -1,
  repeatDelay: 0.5,
  paused: true,
  ease: "elastic.inOut",
  yoyo: true
});
tl.to("#Swords", { x: -200, y: 80, duration: 0.4 }).to(
  "#ShieldOuter",
  {
    fill: "purple",
    duration: 0.5
  },
  0.3
);

gsap.to("#EnergyFill", {
  fill: "#E8DF1C",
  duration: 1,
  repeat: -1,
  yoyo: true
});

const observer = new IntersectionObserver(onObserve);
observer.observe(shieldGroup);

function onObserve(entries) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.intersectionRatio > 0) {
      tl.play();
    } else {
      tl.pause();
    }
  });
}

//tween.play();
