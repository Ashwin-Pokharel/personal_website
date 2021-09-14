import "./terminal.css"
import { XTerm } from 'xterm-for-react'
import { FitAddon} from 'xterm-addon-fit'
import { WebLinksAddon } from 'xterm-addon-web-links';
import React , {useEffect , useState, useContext} from 'react'
import LocationContext from "./LocationContext"
import fileNameContext from "./FileNameContext"
import LocationStackContenxt from "./LocationStackContext"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Terminal(props){
    const {location , changeLocation} = useContext(LocationContext);
    const {filename , changeFileName} = useContext(fileNameContext);
    const {locationStack , changeLocationStack} = useContext(LocationStackContenxt);
    const [activated_by_cat , toggleActive] = useState(false);
    const [first_load , setFirstLoad] = useState(true);
    const [command_stack , setCommandStack] = useState([]);
    const [current_ls_prompt , setCurrentLsPrompt] = useState("\r\n\n.\r\nabout\r\nexperience\r\nfuntoids\r\n");



    function checkLastLocation(){
        if(locationStack.length > 0){
            let last_location = locationStack[locationStack.length - 1];
            return last_location
        }
        return null; 
    }


    function addCommand(command){
        if(command_stack.length > 10){
            command_stack.pop();
        }
        setCommandStack([command , ...command_stack]);
    }

    var current_command_stack_index  = 0;
    var current_string = ""
    var prompt = "apokhar@Ashwin_website "+ location +"% "
    var help_prompt = "\r\n\nHello :), here are a list of commands that you can use \r\n\n\t ls: see what files are in the directory\r\n\t cd: view the given directory\r\n\t cat: view the files in the terminal\r\n\t clear: clear everything in the current terminal\n"
    var ls_prompt = "\r\n\n.\r\nabout\r\nexperience\r\nfuntoids\r\ncontacts.txt\r\n"
    var experience_ls_prompt = "\r\n\n..\r\nprofessional\r\npersonal\r\n"
    var funtoids_ls_prompt = "\r\n\n..\r\nmason_ke_rang.txt\r\nhamro_chino.txt\r\nhobbies.txt\r\ninterests.txt\r\nmusic.txt\r\n"
    var contact_ls_prompt = "\r\n\n..\r\ncontact.txt\r\n"
    var personal_ls_prompt = "\r\n\n..\r\nanomaly_detection.txt\r\nlmaoo.txt\r\ntimey.txt\r\ndewi.txt\r\nforesight.txt\r\n"
    var professional_ls_prompt = "\r\n\n..\r\nsummer_games.txt\r\nresearch_assistant.txt\r\nresearch_and_development_intern.txt\r\nsoftware_development_intern.txt\r\n"
    var about_ls_prompt = "\r\n\n..\r\npersonal_statement.txt\r\ncontacts.txt\r\n"
    var valid_ls_files = ["about.txt"] 
    var ways_to_type_poo = ["poo", "POO", "POOP", "poop", "bigpoo" , "smallpoo", "poooooooooooooooooooop", "pooooooooooooo", "SHIT", "excretion"]
    var about_txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n";
    var experience_txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n";
    
    var personal_txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n";

    var funtoids_txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n";

    var welcome_prompt = "\r\n\nHELLLLLLLLLLLLLLLLLLLOO \r\nWelcome to my website, feel free to navigate around\
        \r\nThere are two ways you can navigate the site\
        \r\nif you know how use the terminal then you can navigate the site using the standard unix commands\
        \r\nYou can use the 'help' command to get additional info on supported commands. try playing around with it and maybe you will find some secrets???\r\nEven if you are unsure give it a whirl , if it breaks or you get confused just reload the page.\
        \r\nYou can also just navigate the site using the navigation bar and folder if you dont know how to use the terminal. Good luck :)\n"

    var summer_games_txt = "\r\n\n Booz Allen Hamilton\t\t\tJune/2021 - August/2021\r\n\n- Engineered an Anomaly Detection Pipeline using open-source commercial flight data.\r\n- Taught non-technical members of the team several tools such as Git and Python compared various machine learning techniques to determine the best one for the Pipeline.\r\n- Implemented a GAN network for Anomaly Detection and synthetic data generation.\n"
    var research_assistant_txt = "\r\n\nGMU Schar School of Policy and Government\r\nSemptember/2020 - June/2021\r\n\n- Mapped and combined multiple large data sources.\r\n- Wrote a python script to automate data combination.\r\n- Researched use of OCR with entity recognition for automation.\n"
    var research_and_development_txt = "\r\n\nQuadrint Inc.\t\t\tMay/2020 - August/2020\r\n\n- Created a decision support system utilizing Angular and Node JS with express.\r\n- Developed a modular system that can be adapted for multiple clients.\r\n- Used Angular Material along with RxJS to create an aesthetic and responsive system.\n"
    var software_development_txt = "\r\n\nGMU Center for Assurance Research and Engineering\r\nSeptember/2020 - August/2020\r\n\nRepository:\r\nhttps://github.com/cyber-republic/elastos-nucleus\r\n\n- Conceptualized and built a web console to facilitate easier interaction with ELA blockchain.\r\n- Automated integration and testing using Selenium, pytest and Travis CI.\r\n- Led backend development of the application with input from the senior developers.\n"
    var lmaoo_txt = "\r\n\nCo-Founder\r\n\nhttps://lmaoo.wtf\r\nhttps://apps.apple.com/us/app/lmaoo/id1545834762\r\n\nConceptualized and developed an application to make sharing quick\r\nsnappy content more enjoyable by capturing blind reactions from your friends and family.\r\n\n- Developed using SwiftUI, Firebase and SnapSDK.\n"
    var anomaly_detection_txt = "\r\nImplemented a GAN  for Anomaly Detection on unlabeled Aircraft Sensor Data.\r\n\nRepsoitory:\r\nhttps://github.com/Ashwin-Pokharel/tadGAN_tf2\r\n\n- based on https://arxiv.org/pdf/2009.07769v3.pdf\r\n- Created a model that could handle multivariate data for analysis\r\n- Utilized TensorFlow 2 with Keras to create the model\
    \r\n- Wrote a custom training loop to handle training over multiple time-series sequences\r\n\nFuture Plans:\r\n- Deploy using Docker\r\n- Experiment with different datasets.\r\n- Create a Python library for easy use of the model.\r\n"
    var timey_txt = "\r\nTimey\r\n\nCo-created a pomodoro timer to help users track their time spent focusing. This is done by detecting whether or not the user is sitting in front of the laptop. The timer also work to understand the user’s current state of mind and recommend breaks and encouragement.\
    \r\n\nRepositories:\r\n- https://github.com/Ashwin-Pokharel/timey_emotions_CNN\r\n- https://github.com/Ashwin-Pokharel/timey_flask\r\n- https://github.com/shaygyawali/Timey-WebApp\r\n\n- Utilized OpenCV to detect users in the frame and extract the relevant image bounding box\r\n- Trained a CNN to recognize 7 distinct emotions and then return label with confidence percentage.\r\n- Used React to create the front end with Flask serving as the web server\r\n - CNN Model was deployed using Docker on Amazon ECS.\
    \r\n"
    var dewi_txt = "\r\nDewi\r\n\nCo-Created a Learning Management System with focus on increasing engagement with students during remote and in-person learning. Heavy emphasis was placed on smart notifications to increase the engagement.\
    \r\n- Created using React Native and Django\r\n- Integrated Twilliio for the notification system\r\n\nFuture Plans:\r\n- shifting focus away from being a LMS to a resource finder\r\n- Utilizing Machine learning to help students find relevant info on their homework and study materials.\r\n"
    var foresight_txt = "\r\nForesight\r\n\nRepostory:\r\nhttps://github.com/Ashwin-Pokharel/BudgetApp1\r\n\nMy first personal project ever, It was a tool to help me and others like me keep track of my expenses. It started as a simple Python application that took two inputs as user input and performed some simple operation with them. It slowly morphed into a fully fledged web application with an aesthetic frontend and backend.This project made me realize my passion for development and computing in general as for the first time I felt like I could create anything I wanted\r\nto given enough time.\
    \r\n\n- Utilized Django to create a budgeting web application.\r\n- Deployed application on AWS beanstalk with AWS RDS serving as database.\r\n"
    var document_scanner_txt = "\r\nDocument Scanner\r\n\nRepository\r\nhttps://github.com/Ashwin-Pokharel/CS499_final\r\n\nCreate an Application that is able to convert any unstructured document and extract relevant user-defined info from the document. The goal of the project is to use federated learning to improve model over-time without exposing sensitive user documents. The main limitation has been the limited number of datasets available for  such task.\
    \r\n\nCurrently:\r\n- Trained a FastRCNN on FUNSD dataset.\r\n- Results were poor on documents not part of the training data.\r\n\nFuture:\r\n- Utilizing a GAN to increase the number of available samples.\r\n- Begin creating a federated training infrastructure.\r\n"
    var mason_ke_rang_txt = "\r\nMason Ke Rang\r\n\nvideo: https://youtu.be/c2OQ1HIJdjM\r\n\nThis is a Competitive bollywood fusion dance team based out of George Mason. I was a dancer as well as a treasurer for this dance team and I loved every second of it. As a dancer I really got to expose myself to various dance styles including Hip Hop , contemporary , classical , Bhangra among many others.I also really got to expand my leadership skills as being a treasurer meant I got to lead multiple fundraiser efforts with some lasting for entire weeks. Overall It was an amazing experience made even more amazing my wonderful teammates and captains.\
    \r\n\nHope you enjoy the video above , also try to ignore my acting :P\r\n"
    var hamro_chino_txt = "\r\nHamro Chino\r\n\nvideo\r\n- https://youtu.be/ZEgcYLO6KTE\r\n\nAs I danced more I wanted to combine the traditional sounds and dances of my country with the styles of dancing I was learning more and more. Along with 3 other friends I started a Nepali fusion dance team that was going to teach and perform this style of dancing. This was an amazing Oppurtunity as I was a captain of a dance team for the first time. I got to lead the practices as well as come up with my own choreography\
    My teammates and fellow captains made the experience so rewarding and I could not thank them enough for it.\r\n"
    var hobbies_txt = "- Mountain Biking\r\n- Hiking\r\n- Being outdoors in general\r\n- Just going to anyplace with water\r\n- Exploring(ig: places_i_stumble_to_)\r\n- Trying to find fire watch towers\r\n- Museums  (of almost any kind)\r\n- Dancing\r\n- Watching YouTube videos\r\n\t- Video essays on shows and movies\r\n\t- Watching history videos\r\n\t- science explanation videos\r\n\t- car videos (favorite show is top gear)\r\n\t- video clips of my favorite shows\r\n\t- Tech Videos \r\n\t- fav channels:\r\n\t\t-Veritaseum, SmartEveryDay, Tom Scott,\r\n\t\tPBS Space time ,Practical Engineering ,Joe Scott,\r\n\t\tBut Why?, LEMMiNO, Linus Tech Tips,\r\n\t\tPolymatter, Marques Brownleee … so so many more\r\n"
    var interests_txt = "- Anything relates to space , physics , computers and history\r\n\n- Development\r\n\t- Building scalable systems\r\n\t-  Coming up with creative interfaces.\r\n\t- Almost any general development challenge.\r\n\n- Deep learning\r\n\t- MLOps for model development and maintenance\r\n\t- Different training methods such as Federated learning.\r\n\t- GAN\r\n\t- Diffusion models\r\n\t- Deep learnings application in education\r\n\t- Using generative models to solve limited data availability\r\n\n- Quantum:\r\n\t- Quantum computing and its applications \r\n\t- Combining quantum computing and deep learning\r\n\t- Quantum cryptography and Post-quantum cryptography\r\n\n- I'm always interested in learning something new :)\r\n"
    var music_txt = "- Spotify: https://sptfy.com/6s0x\r\n- Spotify 2020 Wrapped: https://sptfy.com/6s0I\r\n- Open to every genre (including country)\r\n- According to how bad is your Spotify:\r\n\t- My Spotify was you’ve-come-a-long-way-from-despacity-sweaty-rave-tay-tay-fangirl bad\r\n\n- Recent artists I’ve been way too into\r\n\t- BROCKHAMPTON\r\n\t- Santana\r\n\t- COIN\r\n\t- Briston Maroney\r\n\t- Frank Ocean\r\n\t- Jeremy Zucker\r\n\t- Noah Cyrus \r\n\t- Glass Animals \r\n\t- Bleachers\r\n"
    var guide_txt = "General guides: https://1drv.ms/u/s!AiM71HHUorXCgsFxbdKgJ5bcUeGQRg\r\nMedium Articles:\r\n\t-Video Composition with AVFoundation\r\n\t\tshorturl.at/afvGH\r\n"
    var contacts_txt = "Feel free to connect with me :)\r\n\nLinkedIn: https://www.linkedin.com/in/apokhar/\r\nInstagram: places_i_stumble_to_\r\n"
    var about_txt = "For most people development is not a field they would define as particularly creative. It requires lots of tedious work and has a low margin of error. The reason I enjoy the work that I do is because development for me is a creative outlet. The power to build any tool that I can imagine with enough time and effort is immense. It allows me to focus on solving problems have yet to be solved or even reimagine the solutions that exist. The relentless march of technology continually lowers the barrier for solving problems while pushing me to learn constantly. This ability to create effective and lasting solutions is what gives me purpose.\r\n"
    var map_folder_to_path = {
        "home": {
            "path": "~/",
            "prev": "home", 
        },
        "about": {
            "path": "~/about/",
            "prev": "home",
        },
        "experience": {
            "path": "~/experience/",
            "prev": "home",
        },
        "funtoids": {
            "path": "~/funtoids/",
            "prev": "home",
        },
        "personal": {
            "path":"~/experience/personal/",
            "prev": "experience",
        },
        "professional":{
            "path": "~/experience/professional/",
            "prev": "experience",
        },
    }

    var map_file_to_text={
        "contacts.txt":contacts_txt,
        "personal_statement.txt": about_txt,
        "summer_games.txt": summer_games_txt,
        "research_assistant.txt": research_assistant_txt,
        "research_and_development_intern.txt": research_and_development_txt,
        "software_development_intern.txt": software_development_txt,
        "lmaooo.txt": lmaoo_txt,
        "anomaly_detection.txt": anomaly_detection_txt,
        "timey.txt": timey_txt,
        "dewi.txt" : dewi_txt,
        "foresight.txt": foresight_txt,
        "document_scanner.txt": document_scanner_txt,
        "mason_ke_rang.txt": mason_ke_rang_txt,
        "hamro_chino.txt": hamro_chino_txt,
        "hobbies.txt": hobbies_txt,
        "interests.txt": interests_txt,
        "music.txt": music_txt,
        "guides.txt": guide_txt,

    }

    var map_location_to_prompt={
        "home": ls_prompt,
        "contacts": about_ls_prompt,
        "about": about_ls_prompt,
        "experience": experience_ls_prompt,
        "funtoids": funtoids_ls_prompt,
        "personal": personal_ls_prompt,
        "professional": professional_ls_prompt,
        "contact.txt": contact_ls_prompt,
    }
    var valid_home_files = ["about" , "experience" , "funtoids", "contacts.txt"]
    var valid_about_files = ["personal_statement.txt", "contacts.txt"]
    var valid_experience_folders = ["professional", "personal"]
    var valid_professional_files = ["summer_games.txt" , "research_assistant.txt" , "research_and_development_intern.txt" , "software_development_intern.txt"]
    var valid_personal_files = ["lmaooo.txt" , "anomaly_detection.txt" , "timey.txt" , "dewi.txt" , "foresight.txt","document_scanner.txt"]
    var valid_funtoids_files = ["mason_ke_rang.txt", "hamro_chino.txt", "hobbies.txt" , "interests.txt", "guides.txt","music.txt"];

    var map_location_to_valid_files={
        "home": valid_home_files,
        "about": valid_about_files,
        "experience": valid_experience_folders,
        "professional": valid_professional_files,
        "personal": valid_personal_files,
        "funtoids": valid_funtoids_files,

    }
       
    var about_ls_prompt = "\r\n\nabout.txt\r\n"
    const fitaddon = new FitAddon();
    const webLinkAddon = new WebLinksAddon();
    const xtermRef = React.useRef(null);
    let resizeWindow = ()=>{
        console.log("resized the fucking window")
        fitaddon.fit();
    }

    let handleData = (event)=>{
        console.log(event)
        if(xtermRef.current.terminal != null){
            if(event.key === '\x7F'){
                if(current_string.length > 0){
                    xtermRef.current.terminal.write('\b \b');
                    current_string = current_string.slice(0 , -1)
                }
            }else if(event.key === '\x1B[B' || event.key === '\x1B[D' || event.key === '\x1B[A' || event.key === '\x1B[C'){
                if(event.key == '\x1B[A'){
                    console.log(command_stack)
                    if(command_stack.length > 0){
                        if(current_command_stack_index < command_stack.length ){
                            var command = command_stack[current_command_stack_index];
                            current_command_stack_index++;
                        }
                        else{
                            var command = command_stack[0];
                            current_command_stack_index = 1;
                        }
                        if(current_string.length > 0){
                            for(var i = 0 ; i < current_string.length ; i++){
                                xtermRef.current.terminal.write('\b \b');
                            }
                            current_string = ""
                        }
                        xtermRef.current.terminal.write(command);
                        current_string = command;
                    }
                }
            }
            else if(event.key === "\r"){
                console.log(current_string)
                var string_arr = current_string.split(" ")
                if(string_arr.length != 0 || current_string.length != 0){
                    addCommand(current_string);
                    if(current_string.localeCompare("clear") === 0){
                        xtermRef.current.terminal.clear();
                        xtermRef.current.terminal.write('\x1b[2K\r');
                    }
                    else if(current_string.localeCompare("help")=== 0){
                        xtermRef.current.terminal.write(help_prompt); 
                    }
                    else if(current_string.localeCompare("ls") === 0){
                        xtermRef.current.terminal.write(current_ls_prompt);
                    }
                    else if(current_string.localeCompare("drag") === 0){
                        console.log("drag activated");
                        props.onChange()
                    }
                    else{
                        var current_string_arr = current_string.split(" ");
                        console.log(current_string_arr)
                        if((current_string_arr[0].localeCompare("cd") === 0) && (current_string_arr.length === 2)){ 
                            if(current_string_arr[1].localeCompare("..") === 0){
                                var new_loc = map_folder_to_path[location]["prev"];
                                if(new_loc != null){
                                    changeLocation(new_loc);
                                    return;
                                }
                            }
                            if(map_location_to_valid_files[location].includes(current_string_arr[1])){
                                changeLocation(current_string_arr[1]);
                                return;
                            }
                            xtermRef.current.terminal.write('\r\n'+prompt);
                            current_string = "";
                            return;
                        } 
                        if((current_string_arr[0].localeCompare("cat") == 0)){
                            if(current_string_arr.length === 2){
                                console.log(map_location_to_valid_files[location]);
                                if(map_location_to_valid_files[location].includes(current_string_arr[1])){
                                    toggleActive(true);
                                    changeFileName(current_string_arr[1]);
                                    return;
                                }
                            }
                        }
                        if(ways_to_type_poo.includes(current_string_arr[0])){
                            console.log("poo more features incoming")
                        }
                    }
        
                xtermRef.current.terminal.write('\r\n'+prompt);
                current_string = ""
                }
            }
            else{
                xtermRef.current.terminal.write(event.key)
                current_string += event.key;
            }
        }

    }

 
    React.useEffect(() => {

        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        xtermRef.current.terminal.setOption("cursorBlink", true)
        // You can call any method in XTerm.js by using 'xterm xtermRef.current.terminal.[What you want to call]
        xtermRef.current.terminal.setOption('theme', {
            background: "#EDAA29",
            foreground : "black",
            cursor: "black",
            cursorAccent: "black"
        })
        //fitaddon.fit();

    }, [])

    React.useEffect(()=>{
        //need to figure out the logic of location stack for the cd .. command
        //use the same logic as activated by cat command 


        if(activated_by_cat){
            if(filename in map_file_to_text){
                xtermRef.current.terminal.clear();
                xtermRef.current.terminal.write("\r\n\n"+ map_file_to_text[filename]);
                current_string = "";
                toggleActive(false);
                changeFileName("none");
            }
        }
        else{
            if(location === "home"){
                if(valid_home_files.includes(filename)){
                    xtermRef.current.terminal.write("cat " + filename);
                    addCommand("cat" + filename);
                    xtermRef.current.terminal.clear();
                    xtermRef.current.terminal.write("\r\n\n"+ map_file_to_text[filename]);
                    current_string = "";
                    toggleActive(false);
                    changeFileName("none");
                    return; 
                }

            }

            if(location === "about"){
                if(valid_about_files.includes(filename)){
                    xtermRef.current.terminal.write("cat " + filename);
                    addCommand("cat "+filename);
                    xtermRef.current.terminal.clear();
                    xtermRef.current.terminal.write("\r\n\n"+ map_file_to_text[filename]);
                    current_string = ""
                    toggleActive(false);
                    changeFileName("none");
                    return;
                }
                

            }
            if(location === "professional"){
                if(valid_professional_files.includes(filename)){
                    xtermRef.current.terminal.write("cat " + filename);
                    addCommand("cat "+filename);
                    xtermRef.current.terminal.clear();
                    xtermRef.current.terminal.write("\r\n"+ map_file_to_text[filename]);
                    current_string = ""
                    toggleActive(false);
                    changeFileName("none");
                    return;
                }
            }
            if(location === "personal"){
                if(valid_personal_files.includes(filename)){
                    xtermRef.current.terminal.write("cat " + filename);
                    addCommand("cat "+filename);
                    xtermRef.current.terminal.clear();
                    xtermRef.current.terminal.write("\r\n\n"+ map_file_to_text[filename]);
                    current_string = ""
                    toggleActive(false);
                    changeFileName("none");
                    return;
                }
            }
            if(location === "funtoids"){
                if(valid_funtoids_files.includes(filename)){
                    xtermRef.current.terminal.write("cat " + filename);
                    addCommand("cat "+filename);
                    xtermRef.current.terminal.clear();
                    xtermRef.current.terminal.write("\r\n\n"+ map_file_to_text[filename]);
                    current_string = ""
                    toggleActive(false);
                    changeFileName("none");
                    return;
                }
            } 
            setCurrentLsPrompt(map_location_to_prompt[location]);
            prompt = "apokhar@Ashwin_website "+ location +"% "

            if(first_load == true){
                xtermRef.current.terminal.write("\r\n"+ prompt+ "cat welcome.txt");
                xtermRef.current.terminal.write("\r\n"+ welcome_prompt);
            }
            setFirstLoad(false);
            xtermRef.current.terminal.write("\r\n"+ prompt)
            current_string = "";
        }
        
        
    }, [location, filename])

    
    return (
        <Container className="terminalContainer">
            <Row className="terminalTop">
                <a>{map_folder_to_path[location]["path"]}</a>
            </Row>
            <Row className="terminalContent">
                <XTerm ref={xtermRef} className={"terminal"}
                    options={{cursorBlink:true}}
                    addons={[fitaddon , webLinkAddon]} 
                    onKey={handleData}
                />
            </Row>
        </Container>
    )
}

export default Terminal;