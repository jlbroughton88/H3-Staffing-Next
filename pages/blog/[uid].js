import React, { useState, useEffect } from "react";
import { useEnv } from "../comps/contexts/envProvider";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "../comps/navbar";
import Footer from "../comps/footer";
import "../../public/static/css/single.scss";

const Single = () => {
  const router = useRouter();
  const { uid } = router.query;
  const [post, setPost] = useState({});
  const statusUrl = useEnv();

  useEffect(() => {
    axios
      .get(`${statusUrl}/api/blog/${uid}`)
      .then(response => setPost(response.data[0]))
      .catch(err => console.log(err));
  }, [uid]);

//   useEffect(() => {}, [post])

  return (
      <div>
          <Navbar/>
              <div className="singleMother">
      <div className="singleMain">
        { post === undefined ? (
          <h1>Loading</h1>
        ) : (
          <div className="singlePostContainer">
            <h1 className="singleTitle">{post.title}</h1>
            <p className="singleText">{post.blog_text}</p>
            <hr className="singleHr" />
            <div className="dateTimeSingle">
              <p className="singleTime">{post.time_created}</p>
              <p className="singleDate">{post.date_created}</p>
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer/>
      </div>

  );
};

export default Single;
