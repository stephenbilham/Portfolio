import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
          <div className="container">
            <h2>About Me</h2>
            <div className ="header-break"></div>
            <div id="profile-pic-center">
              <img className="profile-pic"  src="images/portfolio-picture2.jpg" alt=""/>
              <p className = "intro-p">{resumeData.aboutme}</p>
            </div>
              <p id="language-header">Languages</p>
                <div id="languages">
                    <ul className = "gridSquare">
                      <p>HTML5</p>
                      <img id="tech-logo" src="images/html5.png" alt="" />
                    </ul>
                    <ul className = "gridSquare">
                      <p>CSS</p>
                      <img id="css-logo" src="images/cssnew.png" alt="" />
                    </ul>
                    <ul className = "gridSquare">
                      <p>JavaScript</p>
                      <img id="javascript-logo" src="images/javascript.png" alt=""/>
                    </ul>
                    <ul className = "gridSquare">
                      <p>Ruby</p>
                      <img id="ruby-logo" src="images/ruby.png" alt=""/>
                    </ul>
                    <ul className = "gridSquare">
                      <p>SQL</p>
                      <img id="sql-logo" src="images/sql.png" alt=""/>
                    </ul>
                 </div>
               <div id="same-row-skills">
                 <p id="frameworks-header">Frameworks</p>
                 <p id="git-header">Other Skills</p>
               </div>
               <div className="technologies">
                 <div id="frameworks">
                    <ul className = "gridSquare2">
                    <p>React</p>
                    <img id="react-logo" src="images/react.png" alt=""/>
                    </ul>
                    <ul className = "gridSquare2">
                    <p>Ruby on Rails</p>
                    <img id="ruby-rails-logo" src="images/ruby_on_rails.png" alt=""/>
                    </ul>
                 </div>
                 <div id="hosting-ide">
                 <ul className = "gridSquare2">
                 <p>Github</p>
                 <img id="github-logo" src="images/github.png" alt=""/>
                 </ul>
                 <ul className = "gridSquare2">
                 <p>AWS Cloud9</p>
                 <img id="aws-logo" src="images/aws.png" alt=""/>
                 </ul>
                 </div>
             </div>
          </div>
      </section>
    );
  }
}
