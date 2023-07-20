import React, { useState } from "react";
import Profile from "../../assets/img/man.png";
import Slider from "@mui/material/Slider";
import { useTheme } from "@mui/material/styles";
import ProgressBar from "../ProgressBar/ProgressBar";
import Graph from "../Graph/Graph";
import "./Body.css";
const Body = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderValueAge, setSliderValueAge] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  const handleSliderChangeAge = (event, newValue) => {
    setSliderValueAge(newValue);
  };

  const theme = useTheme();

  return (
    <div className="body">
      <div className="section section-1">
        <div className="profile">
          <img src={Profile} alt="" />
          <div className="profile-greeting">
            <h1>Hi Mike,</h1>
            <h6>welcome back</h6>
          </div>
        </div>
        <div className="profile-info">
          <span className="greeting">Today</span>
          <div className="sub-section">
            <p className="acc-balance">$19,882</p>
            <p className="text-sm">Account Balance</p>
          </div>
          <div className="flex space-between wd-180">
            <div className="sub-section">
              <p className="text-md">$4,000</p>
              <p className="text-sm">
                Year to Date
                <span className="contribution"> Contributions </span>
              </p>
            </div>
            <div className="sub-section">
              <p className="text-md">$1,892</p>
              <p className="text-sm">Total Interest</p>
            </div>
          </div>
          <button className="profile-btn">I want to...</button>
        </div>
        <div className="transactions-container">
          <div className="sub-section">
            <p className="recent-heading">Recent Transactions</p>
            <div>
              <p className="text-sm">2020-08-07</p>
              <p className="text-sm-black">Withdeawl Transfer to Bank-XXX11</p>
              <hr className="hr" />
            </div>
          </div>
          <div className="sub-section">
            <div>
              <p className="text-sm">2020-08-07</p>
              <p className="text-sm-black">Withdeawl Transfer to Bank-XXX11</p>
              <hr className="hr" />
            </div>
          </div>
          <div className="sub-section">
            <div>
              <p className="text-sm">2020-08-07</p>
              <p className="text-sm-black">Withdeawl Transfer to Bank-XXX11</p>
              <hr className="hr" />
            </div>
          </div>
        </div>
      </div>
      <div className="section section-2">
        <div className="sub-section ">
          <p className="rtm-income">Retirement Income</p>
          <h3>Starting Year 2056</h3>
        </div>
        <div className="sub-section  goals-container">
          <div className="goals">
            <p className="tx-large">$300,000</p>
            <span className="text-sm">My Goals</span>
            <hr className="hr2 hr-blue" />
          </div>
          <div className="sub-goal">
            <div className="goals">
              <p className="md-2xl">59%</p>
              <p className="text-sm">Goal Achieved</p>
              <hr className="hr2 hr-blue" />
            </div>
            <div className="goals">
              <p className="md-2xl">K 300</p>
              <p className="text-sm">Est. Mothly Income</p>
              <hr className="hr2 hr-blue" />
            </div>
          </div>
        </div>
        <div className="sub-section contributions-container">
          <span className="heading">Contributions Overtime</span>
          <div className="sub-cotribution-container">
            {/* //margin top */}
            <div className="mt-1 contro">
              <div className="style-hr"></div>
              <div className="contro-flex">
                <p className="text-sm">Employeer</p>
                <span className="md-xl">$73,500</span>
              </div>
            </div>
            <div className="mt-1 contro">
            <div className="style-hr"></div>
            <div  className="contro-flex">
                <p className="text-sm">Employee</p>
                <span className="md-xl">$52,500</span>
              </div>
            </div>
            <div className="mt-1 contro">
                <div className="style-hr"></div>
                <div  className="contro-flex">
                    <p className="text-sm">Total Interest</p>
                    <span className="md-xl">$244,313</span>
                </div>
                </div>
          </div>
        </div>
        <div className="sub-section graph">
        {/* remove graph class from here and start making Graph component */}
          <Graph/>
        </div>
        <div className="sub-section">
          <p className="md-xl">How do I Compare to my peers?</p>
          <p className="text-sm">
            The number represent current goal achievement
          </p>

          <div className="selection">
            <div className="selection-con">
            <div className="choose">
              <label htmlFor="age">Age:</label>
              <select className="options-1" name="age" id="age">
                <option value="Under30">Under 30</option>
                <option value="Under20">Under 20</option>
                <option value="Under50">Under 50</option>
              </select>
              <hr className="hr-2" />
            </div>
            <div className="choose">
              <label htmlFor="salary">Salary:</label>
              <select className="options-2" name="age" id="age">
                <option value="k20">K 20 - K30</option>
                <option value="k10">k 10 - K20</option>
              </select>
              <hr className="hr-2" />
            </div>
            <div className="choose">
              <label htmlFor="gender">Gender:</label>
              <select className="options-3" name="gender" id="age">
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
              <hr className="hr-2" />
            </div>
            </div>
            <ProgressBar/>
          </div>

        </div>
      </div>
      <div className="container">
      <div className="section section-3">
        <span className="heading">Retirement Strategy</span>
        <div className="slider">
          <p className="text-md">Employee Contribution</p>
          <div className="custom-slider">
            <Slider
              sx={{
                width: "100%",
                [theme.breakpoints.up("xs")]: {
                  width: "75%",
                },
              }}
              disabled={false}
              marks={false}
              max={10}
              min={0}
              value={sliderValue}
              onChange={handleSliderChange}
              valueLabelDisplay="off"
            />
            <div className="slider-data">
              <span className="span-percentage">{sliderValue} </span>
              <span className="span-percentage-2">%</span>
            </div>
          </div>
        </div>
        <div className="slider">
          <p className="text-md">Retirement Age</p>
          <div className="custom-slider">
            <Slider
              sx={{
                width: "100%",
                [theme.breakpoints.up("xs")]: {
                  width: "75%",
                },
              }}
              disabled={false}
              marks={false}
              max={10}
              min={0}
              value={sliderValueAge}
              onChange={handleSliderChangeAge}
              valueLabelDisplay="off"
            />
            <div className="slider-data">
              <span className="span-percentage">{sliderValueAge} </span>
              <span className="span-percentage-2">%</span>
            </div>
          </div>
        </div>
        <div className="slider-data-2">
          <p className="text-md">Employeer Contribution</p>
          <p className="text-md-500">8.4%</p>
        </div>
        <div className="slider-data-2">
          <p className="text-md">Intrest Rate</p>
          <p className="text-md-500">5%</p>
        </div>
        <div className="footer-section-3">
            <button className="update-btn">Update</button>
            <span className="help-docs">View Help Docs &#62;</span>
        </div>
      </div>
      <div className="extras">
            <div>
                <div className="vertical-line"></div>
            </div>
            <div className="extra-width">
                <p>Are you considering a having <span className="bold">Housing Advance?</span> </p>
                <p className="text-sm">Limited time reduced interest</p>
                <p className="learn-more">learn More &#62;</p>
            </div>
      </div>
      </div>
    </div>
  );
};

export default Body;
