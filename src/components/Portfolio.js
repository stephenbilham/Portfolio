import React, { Component } from "react";
export default class Porfolio extends Component {
  constructor(props) {
    super(props);
    this.toggleVisiblity = this.toggleVisiblity.bind(this);
    this.state = {
      visibility: false,
      selectedTech: null
    };
  }

  toggleVisiblity() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
    console.log(this.state.visibility);

    // this.setState({ visibility: !this.state.visibility }); //old way
  }
  handleClick = type => {
    this.setState(() => {
      return {
        selectedTech: type
      };
    });
  };

  displayType = () => {
    let resumeData = this.props.resumeData;
    if (!resumeData.portfolio) return;
    return resumeData.portfolio
      .filter(tech => {
        if (this.state.selectedTech === "all") {
          return true;
        }
        return tech.type.includes(this.state.selectedTech);
      })
      .map(item => {
        return (
          <a href={`${item.url}`} rel="noopener noreferrer" target="_blank">
            <div className="portfolio-item portfolioGridSquare">
              <div className="item-wrap">
                <img
                  src={`${item.imgurl}`}
                  alt="these are my projects"
                  className="item-img"
                />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{item.name}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        );
      });
  };

  render() {
    return (
      <section id="portfolio">
        <h1>Check Out Some of My Projects!</h1>
        <div className="portfolio__button__layout">
          <button onClick={() => this.handleClick("all")}>All</button>
          {this.state.selectedTech === "all" && (
            <div className="portfolioGrid">
              {this.displayType()}
              <div id="portfolio-wrapper"></div>
            </div>
          )}
          <button onClick={() => this.handleClick("javascript")}>
            JavaScript
          </button>
          {this.state.selectedTech === "javascript" && (
            <div className="portfolioGrid">
              {this.displayType()}
              <div id="portfolio-wrapper"></div>
            </div>
          )}
          <button onClick={() => this.handleClick("html")}>CSS/HTML</button>
          {this.state.selectedTech === "html" && (
            <div className="portfolioGrid">
              {this.displayType()}
              <div id="portfolio-wrapper"></div>
            </div>
          )}
          <button onClick={() => this.handleClick("react")}>React</button>
          {this.state.selectedTech === "react" && (
            <div className="portfolioGrid">
              {this.displayType()}
              <div id="portfolio-wrapper"></div>
            </div>
          )}
          <button onClick={() => this.handleClick("nodejs")}>NodeJS</button>
          {this.state.selectedTech === "nodejs" && (
            <div className="portfolioGrid">
              {this.displayType()}
              <div id="portfolio-wrapper"></div>
            </div>
          )}
          <button onClick={() => this.handleClick("ruby on rails")}>
            Ruby on Rails
          </button>
          {this.state.selectedTech === "ruby on rails" && (
            <div className="portfolioGrid">
              {this.displayType()}
              <div id="portfolio-wrapper"></div>
            </div>
          )}
        </div>
      </section>
    );
  }
}
