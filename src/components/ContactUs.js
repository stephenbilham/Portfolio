import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="contactBox"></div>
        <div className="">
          <div className="ten columns">
            <p className="lead">Contact Me Here</p>
            <div>
              <form>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                />
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Currently not working... Email: Stephenbilham@yahoo.com"
                ></textarea>
                <input id="submit-fix" type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget"></div>
          </aside>
        </div>
      </section>
    );
  }
}
