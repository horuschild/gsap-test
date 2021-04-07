const tl = gsap.timeline({
  defaults: {
    durations: 2,
    ease: Back.easeOut.config(2),
    transformOrigin: "center",
  },
});
const tl2 = gsap.timeline({
  defaults: {
    durations: 0.5,
    ease: Back.easeOut.config(2),
    transformOrigin: "left",
  },
});

tl.from(".title", { opacity: 0, y: "-100%", delay: .3 });

tl2.from(".container-one", {
  opacity: 0,
  scale: 0.2,
  transformOrigin: "center",
});
tl2.from(".container-two", {
  opacity: 0,
  scale: 0.2,
  transformOrigin: "center",
});

tl2.from(".inner", { scaleY: 0, transformOrigin: "top" });

tl2.from(".one", { scaleX: 0 });
tl2.from(".two", { scaleX: 0 }, "-=.7");
tl2.from(".three", { scaleX: 0 }, "-=.3");

gsap.from(".")