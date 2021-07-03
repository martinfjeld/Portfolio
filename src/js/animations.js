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

let mql = window.matchMedia("(max-width: 37.5em)");

export const TechnologiesAnimation = () => {
  gsap.to(
    ".GSAP--chip, .html--chip, .css--chip, .swift--chip, .sass--chip, .react--chip",
    {
      scrollTrigger: {
        trigger: ".technologies",
        start: "top center",
        toggleActions: "play none none reverse",
      },
      rotate: 0,
      translateX: 0,
      translateY: 0,
      duration: 2,
      ease: "elastic.out(1, 0.7)",
      stagger: 0.2,
    }
  );
};

// <!-- Generator: Adobe Illustrator 25.2.3, SVG Export Plug-In  -->
// <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1927px"
// 	 height="133.009px" viewBox="0 0 1927 133.009" style="overflow:visible;enable-background:new 0 0 1927 133.009;"
// 	 xml:space="preserve">
// <defs>
// </defs>
// <path id="front--flake_1_" style="fill:#374E60;" d="M1927,133.009c-642.333,0-1284.667,0-1927,0C0,93.811,0,54.614,0,15.417
// 	C221.806-3.216,388.815-1.756,502,3.305c248.918,11.131,316.384,43.21,590,49.327c119.03,2.661,210.504-1.079,378-7.928
// 	c193.256-7.902,348.882-19.698,457-29.288"/>
// </svg>

export const PhoneAnimation = () => {
  /* the viewport is 600 pixels wide or less */

  gsap.to(".phone-element", {
    scrollTrigger: {
      trigger: ".phone",
      start: "top top",
      end: "+=250%",
      pin: true,
      scrub: 1,
      onComplete: () => {
        document.querySelector(".pin-spacer").style.height = "100vh !important";
      },
    },

    scale: mql.matches ? 1.6 : 2,
    translateY: mql.matches ? -150 : -100,
    translateX: mql.matches ? null : 300,
  });

  gsap.to(".secondary-phone-header", {
    scrollTrigger: {
      trigger: ".phone",
      start: "top top",
      scrub: 1,
    },
    scale: 3,
    translateY: mql.matches ? -200 : null,
    translateX: mql.matches ? null : 1400,
  });

  // var mql = window.matchMedia('(max-width: 600px)');

  // if(mql.matches)

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

  gsap.to("#notification-2", {
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
};
