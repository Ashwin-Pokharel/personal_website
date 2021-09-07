import logo from './logo.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Terminal from './Terminal';
import Folder from './Folder'
import { LocationProvider } from './LocationContext';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {React,useState , useContext} from 'react';

function App() {

  const [location , setLocation] = useState("about");
  
  function changeLocation(newLocation){
    console.log("location was updated ")
    setLocation(newLocation)
  }

  function changeLocationtoAbout(){
    changeLocation("about");
  }

  function changeLocationExperience(){
    changeLocation("experience");
  }

  function changeLocationFuntoids(){
    changeLocation("funtoids");
  }

  function changeLocationContact(){
    changeLocation("contact");
  }

  return (
    <LocationProvider value={{location , changeLocation}}>
    <div className="App" >
       <Container className="html_container" fluid>
         <Router>
          <Row sm={1} className="header" >
              <Col sm={4}>
                  <p onClick={()=>changeLocation("about")} className="logo">LOGO</p>
              </Col>
              <Col sm={2}  className="bar_text_about">
                  <p onClick={()=>changeLocation("about")} >About</p>
              </Col>
              <Col sm={2}  className="bar_text" >
                  <p onClick={()=>changeLocation("experience")}> Experience</p>
              </Col>
              <Col sm={2}  className="bar_text">
                
                  <p onClick={()=>changeLocation("funtoids")}>Funtoids</p>
        
              </Col>
              <Col sm={2}  className="bar_text">
                  <p onClick={()=>changeLocation("contact")}>Contact</p>
              </Col>
            </Row>
          </Router>
          <Row className="content">
            <Col sm={1} className="sidebar">
              <a href="https://github.com/Ashwin-Pokharel" className="sidebar_link">
                <img src={github} className="github_logo" alt="github logo" />
              </a>
              <a href="https://www.linkedin.com/in/apokhar/" className="sidebar_link">
                <img src={linkedin} className="linkedin_logo" alt="linkedin logo" />
              </a>
            </Col>
            <Col sm={6} className="terminal_content">
              <Terminal />
            </Col>
            <Col className="folder_col">
              <div className="folder_present">
                <Folder/>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
    </LocationProvider>
  );
}

export default App;



