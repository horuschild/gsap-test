gsap.fromTo(".box", { duration: 1, width: 200, }, {width: 500});


gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });

gsap.from(".link", { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });

gsap.from(".right", { duration: 1, x: "-100vw", delay: 1, ease: "power2.in" });

gsap.from(".left", { duration: 1, x: "-100%", delay: 0.5 });

gsap.to(".footer", { duration: 1, y: 0, ease: "elastic", delay: 2.5 });

gsap.fromTo(".button", { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 });




const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline.from(".header", { y: "-100%", ease: "bounce" });

timeline.from(".button", { duration:2, y: "-100vh", ease: "power4.in" });