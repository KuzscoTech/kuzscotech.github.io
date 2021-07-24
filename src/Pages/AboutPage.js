import React, { Component } from "react";
import ImageSection from "../Components/ImageSection";
import Title from "../Components/Title";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

export class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage">
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <Title title={"My Skills"} span={"My Skills"} />
        <div className="Skills-container">
          <SkillsSection skill={"Javascript"} progress={"70%"} width={"70%"} />
          <SkillsSection skill={"Python"} progress={"10%"} width={"10%"} />
          <SkillsSection skill={"HTML"} progress={"90%"} width={"90%"} />
          <SkillsSection skill={"CSS"} progress={"60%"} width={"60%"} />
          <SkillsSection skill={"React"} progress={"60%"} width={"60%"} />
          <SkillsSection skill={"NodeJs"} progress={"70%"} width={"70%"} />
          <SkillsSection skill={"C++"} progress={"60%"} width={"60%"} />
          <SkillsSection skill={"C#"} progress={"80%"} width={"80%"} />
          <SkillsSection skill={"Verilog"} progress={"1%"} width={"1%"} />
          <SkillsSection skill={"Excel"} progress={"20%"} width={"20%"} />
        </div>
        <Title title={"Services"} span={"Services"} />
        <div className="services-container">
          <ServicesSection
            img={design}
            title={"Computer Engineering"}
            desc={"Creating a better Foundation. One Step at a time."}
          />
          <ServicesSection
            img={intelligence}
            title={"Computer Programming"}
            desc={"A fast and easy algorithm written for both memory and time."}
          />
          <ServicesSection
            img={gamedev}
            title={"Game Development"}
            desc={
              "Using the fastest and latest engine to create real physics based gameplay, with light shaders and shadows."
            }
          />
        </div>
      </div>
    );
  }
}

export default AboutPage;
