import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="header-break"></div>
          <div id="profile-pic-center">
            <p className="intro-p">{resumeData.aboutme}</p>
          </div>
          <p id="language-header">Languages</p>
          <div id="languages">
            <ul className="gridSquare">
              <p className="languages-p">HTML5</p>
              <img id="tech-logo" src="images/html5.png" alt="" />
            </ul>
            <ul className="gridSquare">
              <p className="languages-p">CSS</p>
              <img id="tech-logo" src="images/cssnew.png" alt="" />
            </ul>
            <ul className="gridSquare">
              <p className="languages-p">JavaScript</p>
              <img id="tech-logo" src="images/javascript.png" alt="" />
            </ul>
            <ul className="gridSquare">
              <p className="languages-p">Ruby</p>
              <img id="tech-logo" src="images/ruby.png" alt="" />
            </ul>
            <ul className="gridSquare">
              <p className="languages-p">SQL</p>
              <img id="tech-logo" src="images/sql.png" alt="" />
            </ul>
          </div>
          <div id="same-row-skills">
            <p>Frameworks</p>
            <p>Other Skills</p>
          </div>
          <div className="technologies">
            <div id="frameworks">
              <ul className="gridSquare2">
                <p className="frameworks-p">React</p>
                <img id="tech-logo" src="images/react.png" alt="" />
              </ul>
              <ul className="gridSquare2">
                <p className="frameworks-p">Rails</p>
                <img id="tech-logo" src="images/ruby_on_rails.png" alt="" />
              </ul>
            </div>
            <div id="hosting-ide">
              <ul className="gridSquare2">
                <p className="languages-p">Github</p>
                <img id="tech-logo" src="images/github.png" alt="" />
              </ul>
              <ul className="gridSquare2">
                <p className="languages-p">Cloud9</p>
                <img id="tech-logo" src="images/aws.png" alt="" />
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
