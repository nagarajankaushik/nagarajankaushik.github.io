const tl = gsap.timeline({
    defaults: {
        ease: "power1.out"
    }
});
// Speed up animations for dev
// tl.to(".text", {y:"0%", duration:0.1, stagger:0.35});
// tl.to(".slider", {y:"-100%", duration:.15, delay: 0.25});
// // tl.to(".intro", {y:"-100%", duration:1.5, delay: 2.5});
// tl.to(".intro", {y:"-100%", duration:1}, "-=1");

// tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 0.15 });
// tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 0.1 }, "-=1");

tl.to(".text", {y:"0%", duration:1, stagger:0.35});
tl.to(".slider", {y:"-100%", duration:1.5, delay: 2.5});
// tl.to(".intro", {y:"-100%", duration:1.5, delay: 2.5});
tl.to(".intro", {y:"-100%", duration:1}, "-=1.5");

tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 0.5 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");