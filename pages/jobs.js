import React, { Component, useEffect, useState } from "react";
import "../public/static/css/jobs.scss";
import loadjs from "loadjs";
import Navbar from "./comps/navbar";
import Footer from "./comps/footer";

const Jobs = () => {
  useEffect(() => {
    loadjs(["https://bb3jobboard.topechelon.com/job_board.js"]);
    //  localStorage.setItem("mounted-state", JSON.stringify(mounted))
  }, []);

  const handleClick = () => {
    window.location.reload(true);
  };

  return (
    <div>
      <Navbar />
      <div className="jobsMother">
        <div className="jobsMain">
          <button className="loadJobBoardBtn" onClick={handleClick}>
            Load Job Board
          </button>
          <div id="jb--job-board" api-key="a933e68070daf890"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
