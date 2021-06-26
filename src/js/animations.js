import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(
  ScrollTrigger,
  MorphSVGPlugin,
  MotionPathPlugin,
  DrawSVGPlugin
);

export function TechnologiesAnimation() {
  gsap.to(
    ".GSAP--chip, .html--chip, .css--chip, .swift--chip, .sass--chip, .react--chip",
    {
      scrollTrigger: {
        trigger: ".technologies",
        start: "top center",
      },
      rotate: 0,
      translateX: 0,
      translateY: 0,
      duration: 2,
      ease: "elastic.out(1, 0.7)",
      stagger: 0.2,
    }
  );
}

export function PhoneAnimation() {
  gsap.to(".phone-element", {
    scrollTrigger: {
      trigger: ".phone",
      start: "top top",
      end: "+=250%",
      pin: true,
      scrub: 1,
    },

    scale: 2,
    translateX: 350,
    translateY: -100,
  });

  gsap.to(".secondary-phone-header", {
    scrollTrigger: {
      trigger: ".phone",
      start: "top top",
      scrub: 1,
    },
    scale: 3,
    translateX: 1400,
  });

  gsap.to("#first-gradient", {
    scrollTrigger: {
      trigger: ".phone",
      start: "top top",
      end: "+=250%",
      scrub: 1,
    },
    morphSVG: "#second-gradient",
  });

  gsap.to("#second-gradient", {
    scrollTrigger: {
      trigger: ".phone",
      start: "top top",
      end: "+=250%",
      scrub: 1,
    },
    morphSVG: "#third-gradient",
  });

  gsap.to("#third-gradient", {
    scrollTrigger: {
      trigger: ".phone",
      start: "top top",
      endTrigger: ".work",
      end: "top top",
      scrub: 1,
    },
    morphSVG: "#first-gradient",
  });

  gsap.to("#welcome-text", {
    scrollTrigger: {
      trigger: ".phone",
      scrub: true,
    },
    drawSVG: "0%",
  });

  gsap.to("#notification", {
    scrollTrigger: {
      trigger: "body",
      start: "top top-=300%",
      end: "top top-=320%",
      toggleActions: "play none none reverse",
    },
    display: "block",
    translateY: 250,
    duration: 1,
    ease: "elastic.out(1, 0.5)",
  });

  gsap
    .to("#notification-2", {
      scrollTrigger: {
        trigger: "body",
        start: "top top-=350%",
        toggleActions: "play none none reverse",
      },
        display: "block",
        translateY: 350,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      });

  gsap.to("#notification-3", {
      scrollTrigger: {
        trigger: "body",
        start: "top top-=400%",
        ease: "elastic.out(1, 0.9)",
        toggleActions: "play none none reverse",
      },
      display: "block",
      translateY: 450,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });
}
