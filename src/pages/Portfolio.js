import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import classes from "./css/Portfolio.module.css";

import TicTac from "../assets/tic.png";
import ToolShop from "../assets/tools.png";
import Spring from "../assets/spring.png";
import Course from "../assets/course.png";
import Sign from "../assets/sign.png";


import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import React, { useState, useLayoutEffect } from "react";
import ItemsCarousel from "react-items-carousel";

import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function Portfolio(props) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;
  const width = useWindowWidth();

  function useWindowWidth() {
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
      const updateWidth = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", updateWidth);
      updateWidth();
      return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return width;
  }

  function getCardNumber() {
    if (width > 1000) {
      return 3;
    }

    if (width > 800 && width < 1000) {
      return 2;
    }

    if (width < 800) {
      return 1;
    }
  }

  return (
    <div>
      <header>
        <NavBar useWindow={props.useWindow} />
      </header>

      <div className={classes.layout}>
        <div className={classes.main}>
          <div className={classes.title}>Portfolio</div>
        </div>

        <div className={classes.cards}>
          <div
            style={{
              padding: `0 ${chevronWidth}px`,
              backgroundColor: "transparent",
              // minHeight: "200px",
            }}
          >
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={getCardNumber()}
              infiniteLoop={true}
              gutter={0}
              leftChevron={
                <IconButton>
                  <ArrowBackIosNew />
                </IconButton>
              }
              rightChevron={
                <IconButton>
                  <ArrowForwardIosIcon />
                </IconButton>
              }
              outsideChevron={true}
              chevronWidth={chevronWidth}
              showSlither={false}
            >
              <Link to="/portfolio/tictactoe">
                <div className={classes.item}>
                  <ProjectCard
                    title="Tic Tac Toe"
                    text="A deep dive into a simple classic.."
                    pic={TicTac}
                  />
                </div>
              </Link>

              <Link to="/portfolio/toolshop">
                <div className={classes.item}>
                  <ProjectCard
                    title="Tool Shop"
                    text="Inventory management using MySQL"
                    pic={ToolShop}
                  />
                </div>
              </Link>

              <Link to="/portfolio/spring">
                <div className={classes.item}>
                  <ProjectCard
                    title="Spring API"
                    text="Industry grade backend using Spring Boot"
                    pic={Spring}
                  />
                </div>
              </Link>

              <Link to="/portfolio/courseoutline">
                <div className={classes.item}>
                  <ProjectCard
                    title="Course Outline"
                    text="Creates and manages course outlines"
                    pic={Course}
                  />
                </div>
              </Link>

              <Link to="/portfolio/signclassification">
                <div className={classes.item}>
                  <ProjectCard
                    title="Sign Identification"
                    text="Deep learning for self-driving cars"
                    pic={Sign}
                  />
                </div>
              </Link>
            </ItemsCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
