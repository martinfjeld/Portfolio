import React, { useEffect, useState } from "react";
import SlideShowBottom from "./slideshow-bottom/slideshow-bottom";
import SlideShowTop from "./slideshow-top/slideshow-top";
import "./slideshow.styles.scss";
import {posts} from '../../../data/posts'



function Slideshow(props) {
  const [post, setPost] = useState(posts[0]);

  useEffect(() => {

  }, [])

  function nextPost(){
      (post.index !== posts.length -1) && setPost(posts[post.index +1]);
  }

  function prevPost(){
    (post.index > 0) && setPost(posts[post.index -1]);
  }
  
  return (
    <div className={`slideshow ${props?.classes}`}>
      <SlideShowTop image={post.image} isNext={post.index}
      dataLength={posts.length -1} rightClick={nextPost} leftClick={prevPost} background={props?.background} />
      <SlideShowBottom languages={post.technologies} description={post.description} background={props?.background} ymh={post.ymh} time={post.time} text={post.title} difficulty={post.difficulty} />
    </div>
  );
}

export default Slideshow;
