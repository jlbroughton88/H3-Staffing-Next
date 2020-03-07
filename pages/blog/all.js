import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import "../../public/static/css/allposts.scss";
import Navbar from "../comps/navbar";
import Footer from "../comps/footer";
import { useEnv } from "../comps/contexts/envProvider";
import axios from "axios";

const All = posts => {
  const [allPosts, setPosts] = useState([]);
  const statusUrl = useEnv();

  useEffect(() => {
    // setPosts([posts.json][0]);
    axios
      .get(`${statusUrl}/api/blog/all`)
      .then(res => setPosts([...res.data].reverse()))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="allParent">
      <Navbar />
      <div className="allMother">
        <h1 className="allHead">All Posts</h1>
        <div className="postGrid">
          {allPosts.length !== 0 ? (
            allPosts.map(post => (
              <Link key={post.uid} href={`/blog/${post.uid}`}>
                <div key={post.uid} className="blogPost">
                  <h3 className="blogTitle">{post.title}</h3>
                  <div className="dateTimeDiv">
                    <p className="blogTime">{post.time_created}</p>
                    <p className="blogDate">{post.date_created}</p>
                  </div>
                  <hr className="blogsHr" />
                  {post.blog_text.length > 150 ? (
                    <p className="blogText">
                      {post.blog_text.slice(0, 50)}...
                    </p>
                  ) : (
                    <p className="blogText">{post.blog_text}</p>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div>
              <h3>No posts yet</h3>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

// All.getInitialProps = async ctx => {
//   const res = await fetch(`${statusUrl}/api/blog/all`);
//   const json = await res.json();

//   return { json };
// };

export default All;
