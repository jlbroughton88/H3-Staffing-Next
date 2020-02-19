import React, { useEffect } from "react";
import Link from "next/link";
// import { useAuth0 } from "../../contexts/auth-context";
import "../../public/static/css/navbar.scss";

const Navbar = () => {
  //   const { isLoading, loginWithRedirect, logout, user } = useAuth0();
  //   let authorized;
  //   useEffect(() => {
  //     if(user) {
  //           if (user.email === "jlbroughton88@gmail.com" || user.email === "ablue@h3staffing.com" || user.email === "deberry@deberrycompany.com") {
  //       authorized = true;
  //     } else {
  //       let navLogOut = document.getElementById("navLogOut");
  //       navLogOut.style.borderBottom = "2px solid #333";
  //     }
  //     }

  //   }, [user])

  return (
    <nav className="navMother">
      <div className="navMain">
        <section className="leftNav">
          <div className="logoDiv">
            <Link href="/" >
              <a className="logo">H3 Staffing</a>
            </Link>
          </div>
        </section>
        <section className="rightNav">
          <div className="loginLogoutSect">
            {/* {!isLoading && !user && ( */}
            <div className="loggedOutSect">
              {/* <div className="navLogIn" onClick={loginWithRedirect}> */}
              Log In
              {/* </div> */}
            </div>
             {/* )}  */}
             {/* {!isLoading && user && ( 
             <div className="loggedInSect">
              <div className="navLinkStack">
                <div className="navLogOut" id="navLogOut" onClick={logout}> {" "}
                Log Out
                </div> 
                 {(user.email === "jlbroughton88@gmail.com" ||
                    user.email === "ablue@h3staffing.com" ||
                    user.email === "deberry@deberrycompany.com") && ( 
                <Link href="/blogpost" >
                  <a className="blogPostBtn">Post Blog</a>
                </Link>
                  )} 
              </div>
               <Link className="navPicLink" to="/profile"> 
                  <a>
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
             )}  */}
          </div> 
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
