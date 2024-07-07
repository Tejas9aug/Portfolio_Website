import React from "react";

export default function About(props) {
  return (
    <section className={props.bg ? "aboutSecW" : "aboutSecB"} id="About">
      <div className={props.bg ? "aboutMainW" : "aboutMainB"}>
        <h2 className="aboutTitle">
          <u>About</u>
        </h2>
        <div className="aboutData">
          <div className="aboutMeee">
            <div className="barLengthAboutMe">
              <h3 className={props.bg ? "aboutHeadingW" : "aboutHeadingB"}>
                About Me
              </h3>
            </div>
            <div className="aboutInfo">
              <p>
                Hey,I'm Tejas ,a 20 year old currently pursuing B.E in
                Information Technology. I have a keen interest in problem
                solving and Building Projects. I have solved more than 750
                questions on different online judges. I also love to explore
                different domains and contribute open source. I have also
                conducted different workshops and lectures in collaboration with
                different colleges and students. As a fresher there is a lot for
                me to learn but I am always ready to take challenges and leap at
                any opportunity to learn something new.
              </p>
              <a
                href="https://drive.google.com/file/d/1xYRS_zHBOLB7OjL2hUbc6gRbcf6hhwnd/view?usp=sharing"
                target="_blank"
                className="resume"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="aboutSkills">
            <div className="barLengthSkills">
              {" "}
              <h3
                className={props.bg ? "barLengthSkillsW" : "barlengthSkillsB"}
              >
                Skills
              </h3>
            </div>
            <div className="aboutInfo">
              <div className="skillBars">
                <div className="bar">
                  <div className="info">
                    <span>C++</span>
                  </div>
                  <div className="progressLine">
                    <span className="cpp"></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span className="sql">SQL</span>
                  </div>
                  <div className="progressLine">
                    <span className="js"></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span className="reactjs">ReactJs</span>
                  </div>
                  <div className="progressLine">
                    <span className="reactjs"></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span className="javascript">Javascript</span>
                  </div>
                  <div className="progressLine">
                    <span className="js"></span>
                  </div>
                </div>
                <div className="bar">
                  <div className="info">
                    <span className="flutter">Flutter</span>
                  </div>
                  <div className="progressLine">
                    <span className="flutter"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
