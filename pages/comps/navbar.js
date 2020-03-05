import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useAuth } from "use-auth0-hooks";
import "../../public/static/css/navbar.scss";
import { useEnv } from "./contexts/envProvider";

const Navbar = () => {
  // const [randomNum, setRandomNum] = useState(0);
  const statusUrl = useEnv();
  const { pathname, query } = useRouter();
  const { isAuthenticated, isLoading, login, logout, user } = useAuth();


  const newUser = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNum = Math.floor(Math.random() * (max - min)) + min;

    // if (user && user.given_name) {
    //   axios
    //     .post("https://h3-staffing.now.sh/api/user/newuser", {
    //       uid: randomNum,
    //       email: user.email,
    //       given_name: user.given_name,
    //       family_name: user.family_name,
    //       nickname: user.nickname
    //     })
    //     .then(response => console.log(response))
    //     .catch(err => console.log(err));
    // } else if (user) {
    //   axios
    //     .post("https://h3-staffing.now.sh/api/user/newuser", {
    //       uid: randomNum,
    //       email: user.email,
    //       given_name: "null",
    //       family_name: "null",
    //       nickname: user.nickname
    //     })
    //     .then(response => console.log(response))
    //     .catch(err => console.log(err));
    // }
  };

  useEffect(() => {
    console.log(statusUrl)
    if(user) {
      newUser(10000000, 100000000);
    } 

    if (user) {
      if (
        user.email === "jlbroughton88@gmail.com" ||
        user.email === "ablue@h3staffing.com" ||
        user.email === "deberry@deberrycompany.com"
      ) {
        authorized = true;
      } else {
        let navLogOut = document.getElementById("navLogOut");
        navLogOut.style.borderBottom = "2px solid #333";
      }
    }
  }, []);

  return (
    <nav className="navMother">
      <div className="navMain">
        <section className="leftNav">
          <div className="logoDiv">
            <Link href="/">
              <a className="logo">H3 Staffing</a>
            </Link>
          </div>
        </section>
        <section className="rightNav">
          <div className="loginLogoutSect">
            {!isLoading && !user && (
              <div className="loggedOutSect">
                <button
                  className="navLogIn"
                  onClick={() =>
                    login({ appState: { returnTo: { pathname, query } } })
                  }
                >
                  Log In
                </button>
              </div>
            )}
            {!isLoading && user && (
              <div className="loggedInSect">
                <div className="navLinkStack">
                  <button
                    className="navLogOut"
                    id="navLogOut"
                    onClick={() =>
                      logout({
                        returnTo: "https://h3-staffing.now.sh/"
                      })
                    }
                  >
                    {" "}
                    Log Out
                  </button>
                  {(user.email === "jlbroughton88@gmail.com" ||
                    user.email === "ablue@h3staffing.com" ||
                    user.email === "deberry@deberrycompany.com") && (
                    <Link href="/blog/admin/post">
                      <a className="blogPostBtn">Post Blog</a>
                    </Link>
                 )}
                </div>
                {/* <Link href="/profile">
                  <a className="navPicLink">
                    <img
                      className="navPicture"
                      src={user.picture}
                      alt={
                        user.given_name
                          ? user.given_name
                          : user.nickname + "'s picture"
                      }
                    ></img>
                  </a>
                </Link> */}
              </div>
            )}
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
