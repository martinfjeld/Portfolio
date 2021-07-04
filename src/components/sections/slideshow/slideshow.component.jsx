import React, { useState } from "react";
import SlideShowBottom from "./slideshow-bottom/slideshow-bottom";
import SlideShowTop from "./slideshow-top/slideshow-top";
import "./slideshow.styles.scss";
import { posts } from "../../../data/posts";
import gsap from "gsap/gsap-core";

function Slideshow(props) {
  const [post, setPost] = useState(posts[0]);

  // Show or hide loading animation
  const manipulateLoader = (state) => {
    document.querySelector(".overlay__loader").style.display =
      state === "show" ? "block" : "none";
  };

  // Setting the post index
  const nextIndex = () => {
    document.querySelector(".project-title").style.marginLeft = "-200%";
    setPost(posts[post.index + 1]);
  };

  const prevIndex = () => {
    document.querySelector(".project-title").style.marginLeft = "200%";
    setPost(posts[post.index - 1]);
  };

  // What to do when the image is loaded
  const handleImageLoaded = () => {
    document.querySelector(".overlay__img").style.display = "block";

    gsap.to(document.querySelector(".project-title"), {
      marginLeft: "0%",
      ease: "elastic.out(1, 0.9)",
    });

    manipulateLoader("hide");
  };

  const nextPost = () => {
    let tl = gsap.timeline();
    if (post.index === posts.length - 1) return;

    document.querySelector(".overlay__img").style.display = "none";
    manipulateLoader("show");

    tl.to(document.querySelector(".project-title"), {
      marginLeft: "200%",
    }).then(() => {
      nextIndex();
    });
  };

  const prevPost = () => {
    let tl = gsap.timeline();
    if (!post.index > 0) return;

    document.querySelector(".overlay__img").style.display = "none";
    manipulateLoader("show");

    tl.to(document.querySelector(".project-title"), {
      marginLeft: "-200%",
    }).then(() => {
      prevIndex();
    });
  };

  return (
    <div className={`slideshow ${props?.classes}`}>
      <SlideShowTop
        image={post.image}
        loader="/images/loading.gif"
        isNext={post.index}
        handleImageLoaded={handleImageLoaded}
        dataLength={posts.length - 1}
        rightClick={nextPost}
        leftClick={prevPost}
        background={props?.background}
      />
      <SlideShowBottom
        link={post.link}
        languages={post.technologies}
        description={post.description}
        background={props?.background}
        ymh={post.ymh}
        time={post.time}
        text={post.title}
        difficulty={post.difficulty}
      />
    </div>
  );
}

export default Slideshow;
