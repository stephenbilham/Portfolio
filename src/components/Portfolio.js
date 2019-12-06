import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <h1>Check Out Some of My Projects!</h1>
        <div className="portfolioGrid">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="portfolio-item portfolioGridSquare">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          <div id="portfolio-wrapper" className="">
          </div>
        </div>
  </section>
        );
  }
}
