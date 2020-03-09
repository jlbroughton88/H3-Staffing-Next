import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Navbar from "../../comps/navbar";
import Footer from "../../comps/footer";
import Link from "next/link";
import "../../../public/static/css/blogpost.scss";
import { useEnv } from "../../comps/contexts/envProvider";

const BlogPost1 = () => {
    const [blogTitle, setBlogTitle] = useState("");
    const [blogInput, setBlogInput] = useState("");
    const [postUid, setPostUid] = useState("");
    const statusUrl = useEnv();

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + max)
    }

     const handleSubmit = (e) => {
        const uid = getRandomInt(100000000, 1000000000);
        setPostUid(uid);
        const formattedUid = uid.toString();
        // const user_uid = dbUser.uid.toString();
        let time = moment().format('LT');
        let date = moment().format('L');
        let formattedTime = time.replace(/\s/g, "");
        let formattedDate = date.replace(/\//g, "-");

        axios
            .post(`${statusUrl}/api/blog/admin/post`, {
                uid : formattedUid,
                user_uid: "null",
                author: "null",
                title: blogTitle,
                blog_text: blogInput,
                date_created: formattedTime,
                time_created: formattedDate
            }, { timeout: 300 })
            .then(response => console.log(response))
            .catch(err => console.log(err))
        let hiddenDiv = document.getElementById("hidden");
        hiddenDiv.style.display = "block"
        e.preventDefault();
     }

    return (
        <div>
            <Navbar/>
        <div className="blogPostMother">
            <div className="blogPostMain">
                <h1 className="blogPostHead">Create a Blog Post!</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter an engaging title..." className="blogPostTitle" value={blogTitle} onChange={e => setBlogTitle(e.target.value)}/>
                    <textarea type="text" placeholder="Let your job seekers know what H3 has going on..." className="blogPostInput" value={blogInput} onChange={e => setBlogInput(e.target.value)}/>
                    <button type="submit" className="blogPostBtn">Post</button>
                </form>
            </div>
            <div id="hidden" style={{display: "none"}}>
                <Link href={`${statusUrl}/blog/${postUid}`}>
                    <a>
                        Your new post
                    </a>
                </Link>
            </div>
        </div>
        <Footer/>
        </div>

    )
}

export default BlogPost1;