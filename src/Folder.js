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
import FileNameContext  from './FileNameContext';
import {React , useContext , useState} from 'react';
import text_file from './text_file.svg';
import folder   from './folder.svg';


function Folder(){
    const {location , changeLocation}  = useContext(LocationContext);
    const {filename , changeFileName} = useContext(FileNameContext);
    var content;
    var professional_files = ["summer_games.txt" , "research_assistant.txt" , "research_and_development_intern.txt", "software_development_intern.txt"];
    var personal_project_files = ["anomaly_detection.txt", "lmaooo.txt" ,"document_scanner.txt" ,"timey.txt" , "dewi.txt" , "foresight.txt"];
    var funtoid_files = ["mason_ke_rang.txt", "hamro_chino.txt", "hobbies.txt" , "interests.txt", "music.txt", "guides.txt"];
    var home_folders = ["about" , "experience" , "funtoids"]
    var map_file_rep_to_name = {
        "summer_games.txt": "Summer Games" ,
        "research_assistant.txt": "Research Assistant" ,
        "research_and_development_intern.txt": "Research and Development Intern" ,
        "software_development_intern.txt": "Software Development Intern" ,
        "anomaly_detection.txt": "Anomaly Detection" ,
        "lmaooo.txt": "Lmaooo" ,
        "document_scanner.txt": "Document Scanner" ,
        "timey.txt": "Timey" ,
        "dewi.txt": "Dewi" ,
        "foresight.txt": "Foresight",
        "mason_ke_rang.txt": "Mason Ke-Rang" ,
        "hamro_chino.txt": "Hamro Chino" ,
        "hobbies.txt": "Hobbies" ,
        "interests.txt": "Interests",
        "music.txt": "Music",
        "guides.txt": "Guides",
    };


    if(location === "about"){
        //content = <img className="aboutPhoto" src={about_photo}/> maybe for the future
        content = 
        <div>
            <Row>
            <Col sm={4}>
                <div className="file_combo">
                    <figure className="file_figure">
                        <img src={text_file} className="textFile" onClick={()=> changeFileName("personal_statement.txt")}/>
                        <figcaption className="folder_name">Personal statement</figcaption>
                    </figure>
                </div>
            </Col>
            <Col sm={4}>
                <div className="file_combo">
                    <figure className="file_figure">
                        <img src={text_file} className="textFile" onClick={()=> changeFileName("contacts.txt")}/>
                        <figcaption className="folder_name">Contact Info</figcaption>
                    </figure>
                </div>
            </Col>
            </Row>
        </div>
        
    }
    else if(location === "experience"){
        content = 
        <div>
            <Row sm={3}>
                <Col sm={4}>
                    <div className="file_combo">
                        <figure className="file_figure">
                            <img src={folder} className="textFile" onClick={()=> changeLocation("professional")}/>
                            <figcaption className="folder_name">Professional</figcaption>
                        </figure>
                    </div>
                </Col>
                <Col sm={4}>
                <div className="file_combo">
                        <figure className="file_figure">
                            <img src={folder} className="textFile" onClick={()=> changeLocation("personal")}/>
                            <figcaption className="folder_name">Personal</figcaption>
                        </figure>
                    </div>
                </Col>
            </Row>
        </div>
    }
    else if(location === "professional"){

       content = []
       professional_files.map(function(file , index){
           console.log(file);
           content.push(
               <Col sm={4} key={file}>
                <div className="file_combo" >
                        <figure className="file_figure">
                            <img src={text_file} className="textFile" onClick={()=> changeFileName(file)}/>
                            <figcaption className="folder_name">{map_file_rep_to_name[file]}</figcaption>
                        </figure>
                    </div>
                </Col>
           )
       })
       content = <Row sm={3}>{content}</Row>
    }
    else if(location === "personal"){
        content = []
        personal_project_files.map(function(file , index){
            console.log(file);
            content.push(
                <Col sm={4} key={file}>
                    <div className="file_combo" > 
                        <figure className="file_figure">
                            <img src={text_file} className="textFile" onClick={()=> changeFileName(file)}/>
                            <figcaption className="folder_name">{map_file_rep_to_name[file]}</figcaption>
                        </figure>
                    </div>
                </Col>
            )
        })
        content = <Row sm={3}>{content}</Row>
    }
    else if(location === "funtoids"){
        content = []
        funtoid_files.map(function(file , index){
            console.log(file);
            content.push(
                <Col sm={4} key={file}>
                    <div className="file_combo" > 
                        <figure className="file_figure">
                            <img src={text_file} className="textFile" onClick={()=> changeFileName(file)}/>
                            <figcaption className="folder_name">{map_file_rep_to_name[file]}</figcaption>
                        </figure>
                    </div>
                </Col>
            )
        })
        content = <Row sm={3}>{content}</Row>
    }
    else if(location === "home"){
        content = []
        home_folders.map(function(file , index){
            console.log(file);
            content.push(
                <Col sm={4} key={file}>
                    <div className="file_combo" >
                        <figure className="file_figure">
                            <img src={folder} className="textFile" onClick={()=> changeLocation(file)}/>
                            <figcaption className="folder_name">{file}</figcaption>
                        </figure>
                    </div>
                </Col>
            )
        })
        content.push(
            <Col sm={4}>
                <div className="file_combo">
                    <figure className="file_figure">
                        <img src={text_file} className="textFile" onClick={()=> changeFileName("contacts.txt")}/>
                        <figcaption className="folder_name">Contact Info</figcaption>
                    </figure>
                </div>
            </Col>
        )
        content = <Row sm={3}>{content}</Row>
    }
    else{
        content = <a></a>
    }


    return (
        <Container fluid className="folderContainer">
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