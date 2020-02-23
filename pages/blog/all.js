import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import "../../public/static/css/allposts.scss";
import Navbar from "../comps/navbar";

const All = (posts) => {

    const [allPosts, setPosts] = useState([])

    useEffect(() => {
        setPosts([posts.json][0])
    }, [])


    return (
        <div>
            <Navbar />
                    <div className="allMother">
        <h1 className="allHead">All Posts</h1>
        <div className="postGrid">
            {console.log("below is line 21")}
            {console.log(typeof(allPosts))}
            {allPosts.length !== 0 ? (
                allPosts.reverse().map(post =>
                    <Link key={post.uid} href={`/blog/${post.uid}`}>
                        <div key={post.uid} className="blogPost">
                            <h3 className="blogTitle">{post.title}</h3>
                            <div className="dateTimeDiv">
                                <p className="blogTime">{post.time_created}</p>
                                <p className="blogDate">{post.date_created}</p>
                            </div>
                            <hr className="blogsHr" />
                            {post.blog_text.length > 150 ?
                                <p className="blogText">{post.blog_text.slice(0, 150)}...</p>
                                :
                                <p className="blogText">{post.blog_text}</p>
                            }
                        </div>
                    </Link>
                )) : (
                    <div>
                    <h3>No posts yet</h3>
                  </div> 
                )}
            </div>
        </div>

    </div>
    )
}

All.getInitialProps = async(ctx) => {
    const res = await fetch("https://h3-staffing.now.sh/api/blog/all")
    const json = await res.json();
    // console.log("below is from getInitialProps")
    // console.log(json)

    return {json}
}

export default All;