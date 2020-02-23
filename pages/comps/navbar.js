import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "use-auth0-hooks";
import "../../public/static/css/navbar.scss";

const Navbar = () => {
  const { pathname, query } = useRouter();
  const { isAuthenticated, isLoading, login, logout, user } = useAuth();
  let authorized;

  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
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
  }, [user]);

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
                    <Link href="/blogpost">
                      <a className="blogPostBtn">Post Blog</a>
                    </Link>
                  )}
                </div>
                <Link href="/profile">
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
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
