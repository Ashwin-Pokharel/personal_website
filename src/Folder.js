import logo from './logo.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Terminal from './Terminal';
import about_photo from './about_photo.jpeg';
import './folder.css'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import LocationContext from './LocationContext';
import {React , useContext , useState} from 'react'


function Folder(){
    const {location , changeLocation}  = useContext(LocationContext)
    let content;
    if(location === "about"){
        content = 
            <img className="aboutPhoto" src={about_photo}/>
    }
    else{
        content = <a></a>
    }


    return (
        <Container className="folderContainer">
            <Row className="folderTop">
                <a>{location}</a>
            </Row>
            <Row className="folderContent">
                    {content}
            </Row>
        </Container>
    )
}

export default Folder;