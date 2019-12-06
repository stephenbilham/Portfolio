import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className = "contactBox"></div>
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or inqueries below!
              </p>
              <div id="contact-box">
                  <form action="/action_page.php">
                  <label></label>
                  <input type="text" id="fname" name="firstname" placeholder="Your name" />
                  <label></label>
                  <input type="email" id="email" name="email" placeholder="Your email" />
                  <label></label>
                  <textarea id="subject" name="subject" placeholder=""></textarea>
                     <input id="submit-fix" type="submit" value="Submit" />
                  </form>
              </div>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
