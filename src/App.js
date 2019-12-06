import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';

const numColumns = { 
  "--numColumns":"2"
}


class App extends Component {

  componentDidMount() { 
    this.updateNumColumns()
    window.addEventListener('resize', this.updateNumColumns)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateNumColumns)
  }

  updateNumColumns = () => {
    Object.keys(numColumns).map(key => { 
      numColumns[key] = window.innerWidth > 900 ? "2" : "1"
      document.documentElement.style.setProperty(key, numColumns[key])
    })
  }

  render() {
    return (
      <div className="App">

        <div className="page-bg"></div>
        <div className = "animation-wrapper">
          <div className = "particle particle-1"></div>
          <div className = "particle particle-2"></div>
          <div className = "particle particle-3"></div>
          <div className = "particle particle-4"></div>
        </div>
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
