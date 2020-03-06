import React, { useState, useEffect } from "react";
import Link from "next/link";
import DownArrow from "./comps/icons/downArrow.js";
import CheckMark from "./comps/icons/checkMark.js";
import Quotes from "./comps/icons/quotes.js";
import Img1 from "../public/static/images/img1.jpg";
import Navbar from "./comps/navbar.js";
import fetch from "isomorphic-unfetch";
import axios from "axios";
import Footer from "./comps/footer.js";
import { useAuth } from "use-auth0-hooks";
import { useEnv } from "./comps/contexts/envProvider";
import "../public/static/css/index.scss";

const Index = posts => {
  const testiArray = [
    {
      testi:
        "nsectetur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      role: "Software Engineer"
    },
    {
      testi:
        "dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      role: "Software Engineer"
    },
    {
      testi:
        "um dolor sit amenstur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      role: "Software Engineer"
    },
    {
      testi:
        "uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      role: "Software Engineer"
    },
    {
      testi:
        "Lre et dolore magna aliqua. Ut enim ad minim ve quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      role: "Software Engineer"
    },
    {
      testi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qunostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. r. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      role: "Software Engineer"
    },
    {
      testi:
        "Lorem ipsum dolor sit amet, consectetuscing elit, se do eiusmod tempor incididunt ut labot dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ie velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      role: "Software Engineer"
    },
    {
      testi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, se iusmod tempor indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      role: "Software Engineer"
    },
    {
      testi:
        "Lorem ipsum dlor sit amet, consectetur adipiscing elit, se do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      role: "Software Engineer"
    }
  ];
  const [randomNum, setRandomNum] = useState(0);
  const [currentSlide, setSlide] = useState("seeker");
  let currentArr = [];
  let { isAuthenticated, user } = useAuth();
  let [allPosts, setPosts] = useState([]);
  const statusUrl = useEnv();

  const seekerEmployerArray = {
    seeker: [
      "Completely free for job seekers.",
      "Dedicated to getting you a great role.",
      "Close relationships to important decision makers."
    ],

    employer: [
      "Employer sample phrase 1",
      "Employer sample phrase 2",
      "Employer sample phrase 3"
    ]
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    setRandomNum(Math.floor(Math.random() * (max - min)) + min);
  };

  useEffect(() => {
    getRandomInt(500000, 5000000);
    getBlogPosts();

    let seekerSlide = document.getElementById("seekerBtn");
    seekerSlide.classList.add("active");

    if (isAuthenticated) {
      console.log(user);
    }
  }, []);

  const getBlogPosts = () => {
    axios
      .get(`${statusUrl}/api/blog/all`)
      .then(res => setPosts([...res.data].reverse().splice(0, 3)))
      .catch(err => console.log(err));
  };

  const handleSeekerClick = () => {
    let seekerSlide = document.getElementById("seekerBtn");
    let employerSlide = document.getElementById("employerBtn");

    setSlide("seeker");
    employerSlide.classList.remove("active");
    seekerSlide.classList.add("active");
  };

  const handleEmployerClick = () => {
    let seekerSlide = document.getElementById("seekerBtn");
    let employerSlide = document.getElementById("employerBtn");

    setSlide("employer");
    seekerSlide.classList.remove("active");
    employerSlide.classList.add("active");
  };

  if (currentSlide === "seeker") {
    currentArr = seekerEmployerArray.seeker;
  } else if (currentSlide === "employer") {
    currentArr = seekerEmployerArray.employer;
  }

  return (
    <div>
      <Navbar />

      {/* HOME 1 */}
      <div className="home1Mother">
        {/* { user && (
          <div className="noticeDiv">
            <h1 className="noticeH1">
              &nbsp; Safari users will be logged out on refresh due to Safari's
              recent crackdown on cross-site cookie tracking. Auth0 is working on a
              solution for this, but until then, being logged out only occurs on
              Safari.
            </h1>
          </div>
        )} */}

        <div className="home1Main">
          <div className="home1HeadDiv">
            <h2 className="home1Head">or</h2>
          </div>
          <div className="home1CTADiv">
            <Link href="/jobs/#!/search?page=1">
              <a>
                <button className="home1CTA"><strong>Find A Job</strong></button>
              </a>
            </Link>
          </div>
          <div className="arrowDiv">
            <DownArrow className="downArrow" />
          </div>
        </div>
      </div>

      {/* HOME 2 */}
      <div className="home2Mother">
        <div className="home2Main">
          <div className="discoverHeadDiv">
            <h1 className="discoverHead">Discover The</h1>
          </div>

          <div className="seekerEmployeeDiv">
            <div className="seekerEmployerSlider">
              <button
                onClick={handleSeekerClick}
                id="seekerBtn"
                className="slideBtn seekerSlide"
              >
                Job Seeker
              </button>
              <button
                onClick={handleEmployerClick}
                id="employerBtn"
                className="slideBtn employerSlide"
              >
                Employer
              </button>
            </div>
          </div>

          <div className="checkListDiv">
            <div className="checkListParent">
              <div className="checkList">
                {currentArr.map(item => (
                  <div className="checkListItemParent" key={item}>
                    <div className="checkListItem">
                      <div className="iconDiv">
                        <CheckMark className="checkListIcon" />
                      </div>
                      <p className="checkListPara">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="coreValuesParent">
            <div className="valuesHeadDiv">
              <h1 className="valuesHead">Our Core Values</h1>
            </div>

            <div className="valuesContent">
              <div className="valuesParaDiv">
                <div className="valuesPara">
                  Our clients and candidates are our only concern. They are why
                  we exist. Everything we do is to help our clients find
                  superior talent and our candidates realize their career
                  ambitions.   
                  <br />
                  <br />
                  Our job at H3 is very simple: to build lasting relationships
                  with everyone we meet, to listen deeply, and to{" "}
                  <strong>honestly care</strong>.
                </div>
              </div>

              <div className="valuesListDiv">
                <div className="valuesList">
                  <div className="valueItem">Diligence</div>
                  <div className="valueItem">Integrity</div>
                  <div className="valueItem">Genuine</div>
                  <div className="valueItem">Responsiveness</div>
                  <div className="valueItem">Synergistic</div>
                  <div className="valueItem">Professionalism</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Home 3 */}
      <div className="home3Mother">
        <div className="home3Main">
          <div className="overviewHeadDiv">
            <h2 className="overviewHead">A Brief Overview of H3 Staffing</h2>
          </div>

          <div className="overviewSectParent">
            <div className="overviewSect">
              <div className="overviewImgSect2">
                <div className="overviewParaDiv2">
                  <p className="overviewPara2">
                    At H3 Staffing we work hard to understand your complex
                    staffing needs and work efficiently to find the perfect
                    marriage between employer and employee. <br />
                    <br />  Having a combined total of <strong>
                      10 years
                    </strong>{" "}
                    of Staffing experience, our mission is to build meaningful
                    relationships. It’s what we’re about. <br />
                    <br />
                     We’ve got connections that count, experience that makes all
                    the difference, deep working relationships that matter and
                    the right recruiting team who’s got your back.
                  </p>
                </div>
                <img
                  className="overviewImg2"
                  src={Img1}
                  alt="Women sitting with computers"
                ></img>
              </div>

              <div className="overviewParaDiv">
                <p className="overviewPara">
                  At H3 Staffing we work hard to understand your complex
                  staffing needs and work efficiently to find the perfect
                  marriage between employer and employee. <br />
                  <br />  Having a combined total of <strong>
                    10 years
                  </strong>{" "}
                  of Staffing experience, our mission is to build meaningful
                  relationships. It’s what we’re about. <br />
                  <br />
                   We’ve got connections that count, experience that makes all
                  the difference, deep working relationships that matter and the
                  right recruiting team who’s got your back.
                </p>
              </div>
              <div className="briefSect">
                <div className="briefDiv">
                  <h3 className="briefHead"><strong>
                    We Provide Consistent, Professional, Quality Service
                  </strong>
                    
                  </h3>
                  <p className="briefPara">
                    We do whatever it takes to build client and consultant
                    loyalty.
                  </p>
                </div>

                <div className="briefDiv">
                  <h3 className="briefHead"><strong>We Take Care Of Our People</strong></h3>
                  <p className="briefPara">
                    We understand that our success is because of our people.
                  </p>
                </div>

                <div className="briefDiv">
                  <h3 className="briefHead"><strong>We Work Together</strong></h3>
                  <p className="briefPara">
                    By working as a synchronized, organized team; we are able to
                    provide a better, more professional service than anyone
                    else.
                  </p>
                </div>
              </div>
            </div>
            <div className="overviewImgSect">
              <img
                className="overviewImg"
                src={Img1}
                alt="Women sitting with computers"
              ></img>
            </div>
          </div>
          <div className="briefSect2">
            <div className="briefDiv2">
              <h3 className="briefHead2">
                <strong>We Provide Consistent, Professional, Quality Service</strong>
              </h3>
              <p className="briefPara2">
                We do whatever it takes to build client and consultant loyalty.
              </p>
            </div>

            <div className="briefDiv2">
              <h3 className="briefHead2"><strong>We Take Care Of Our People</strong></h3>
              <p className="briefPara2">
                We understand that our success is because of our people.
              </p>
            </div>

            <div className="briefDiv2">
              <h3 className="briefHead2"><strong>We Work Together</strong></h3>
              <p className="briefPara2">
                By working as a synchronized, organized team; we are able to
                provide a better, more  professional service than anyone else.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Home 4 */}
      <div className="home4Mother">
        <div className="home4Main">
          <div className="home4HeadDiv">
            <h2 className="home4Head">How can we help?</h2>
          </div>
          <div className="servicesGridDiv">
            <div className="servicesGrid">
              <div className="serviceDiv">
                <h3 className="serviceHead"><strong>Permanent Placements</strong></h3>
                <p className="servicePara">
                  Looking for that long term answer  to be an integral part of
                  your  business?
                </p>
              </div>
              <div className="serviceDiv">
                <h3 className="serviceHead"><strong>Contract Services</strong></h3>
                <p className="servicePara">
                  Have a short term need?  Want to ensure that you have  the
                  right cultural fit to go along  with the skills required?
                </p>
              </div>
              <div className="serviceDiv">
                <h3 className="serviceHead"><strong>Consultants</strong></h3>
                <p className="servicePara">
                  Whether you prefer the flexibility  of contract work, or the
                  stability  of full-time placement, we're here  to help you
                  find it.
                </p>
              </div>
            </div>
          </div>
          <div className="letsTalkDiv1">
            <div className="letsTalkHeadDiv">
              <h2 className="letsTalkHead">Lets make it happen.</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Home 5 */}
      <div className="home5Mother">
        <div className="home5Main">
          <div className="home5HeadDiv">
            <h1 className="home5Head">Testimonials</h1>
          </div>
          <div className="scrollingDiv">
            {testiArray.map(item => (
              <div key={item.testi} className="testimonialBoxParent">
                <Quotes className="quotes" />
                <div className="testimonialBox">
                  <p className="testimonialPara"> {item.testi} </p>
                </div>
                <div className="testimonialRoleDiv">
                  <p className="testimonialRole">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lets Talk */}
      <div className="letsTalkMother">
        <div className="letsTalkMain">
          <div className="letsTalkBar">
            <a href="mailto:h3staffing@gmail.com?Subject=Website%20Inquiry">
              <h1 className="letsTalkHead">Lets Talk</h1>
            </a>
          </div>
        </div>
      </div>

      {/* Home 6 */}
      {/* Add JS Code for this  */}
      <div className="blogMother">
        <div className="blogMain">
          <h1 className="blogHead">H3 Blog</h1>
          <Link href="/blog/all">
            <a>
              <button className="blogViewAllBtn">View All</button>
            </a>
          </Link>
          <div className="postGrid">
            {allPosts.map(post => (
              <Link key={post.uid} href={`/blog/${post.uid}`}>
                <a>
                  <div key={post.uid} className="blogPost">
                    <h3 className="blogTitle">{post.title}</h3>
                    <div className="dateTimeDiv">
                      <p className="blogTime">{post.time_created}</p>
                      <p className="blogDate">{post.date_created}</p>
                    </div>
                    <hr className="blogsHr" />
                    {post.blog_text.length > 150 ? (
                      <p className="blogText">
                        {post.blog_text.slice(0, 150)}...
                      </p>
                    ) : (
                      <p className="blogText">{post.blog_text}</p>
                    )}
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Index.getInitialProps = async(ctx) => {
//   const res = await fetch(`${statusUrl}/api/blog/all`)
//   const json = await res.json();

//   return { json }
// }

export default Index;
