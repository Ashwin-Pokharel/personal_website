import logo from './logo.png';
import github from './github.svg';
import linkedin from './linkedin.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Terminal from './Terminal';
import Folder from './Folder';
import { LocationProvider } from './LocationContext';
import { FileNameContextProvider } from './FileNameContext';
import { LocationStackContextProvicer } from './LocationStackContext';
import {React,useState} from 'react';
import { Navbar} from 'react-bootstrap';
import Draggable from 'react-draggable';


function App() {
  const [location , setLocation] = useState("home");
  const [filename , setFileName] = useState("none");
  const [locationStack , setLocationStack] = useState([]);
  const [stopDrag , setStopDrag] = useState(true);

  function allowDrag(){
    console.log("called function")
    if(stopDrag){
      setStopDrag(false);
    }else{
      setStopDrag(true);
    }

  }
  
  function addLocationToStack(location){
    if(locationStack.length < 30){
      setLocationStack([...locationStack , location]);
    }
  }
  
  function changeLocation(newLocation){
    setLocation(newLocation)
    setFileName("none");
  }

  function changeFileName(filename){
    console.log("filename is changed to:"+filename)
    setFileName(filename);
  }

  return (
    <div className="App" >
      <LocationStackContextProvicer value={{locationStack , addLocationToStack}}>
      <FileNameContextProvider value={{filename , changeFileName}}>
      <LocationProvider value={{location , changeLocation}}>
        <Container className="html_container" fluid>
            <Navbar bg="#EDAA29">
                <Navbar.Brand onClick={()=>changeLocation("home")}>
                  <img
                    src={logo}
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto ">
                  <Nav.Link onClick={()=>changeLocation("about")} className="bar_text"> About </Nav.Link>
                  <Nav.Link onClick={()=>changeLocation("experience")} className="bar_text"> Experience </Nav.Link>
                  <Nav.Link onClick={()=>changeLocation("funtoids")} className="bar_text"> Fun Facts </Nav.Link>
                </Nav>
    </Navbar.Collapse>
            </Navbar>
            <Row className="content">
              <Col sm={1} className="sidebar">
                <a href="https://github.com/Ashwin-Pokharel" className="sidebar_link">
                  <img src={github} className="github_logo" alt="github logo" />
                </a>
                <a href="https://www.linkedin.com/in/apokhar/" className="sidebar_link">
                  <img src={linkedin} className="linkedin_logo" alt="linkedin logo" />
                </a>
              </Col>
              <Draggable disabled={stopDrag}>
              <Col sm={6} className="terminal_content">
                <Terminal stopDrag={stopDrag} onChange={allowDrag}/>
              </Col>
              </Draggable>
              <Col className="folder_col">
                <Draggable disabled={stopDrag}>
                  <Row fluid={true} className="folder_present">
                      <Folder/>
                  </Row>
                </Draggable>
              </Col>

            </Row>
          </Container>
          </LocationProvider>
      </FileNameContextProvider>
      </LocationStackContextProvicer>
    </div>
  );
}

export default App;



