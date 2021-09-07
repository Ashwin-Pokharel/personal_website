import "./terminal.css"
import { XTerm } from 'xterm-for-react'
import { FitAddon} from 'xterm-addon-fit'
import React , {useEffect , useState, useContext} from 'react'
import LocationContext from "./LocationContext"

function Terminal(){
    const {location , changeLocation} = useContext(LocationContext)
    var current_string = ""
    var prompt = "apokhar@Ashwin_website "+ location +"% "
    var help_prompt = "\r\nHello :), here are a list of commands that you can use \r\n\n\t ls: see what files are in the directory\r\n\t cd: view the given directory\r\n\t cat: view the files in the terminal\r\n\t clear: clear everything in the current terminal\n"
    var ls_prompt = "\r\n\nabout\r\nexperience\r\nfuntoids\r\ncontact.txt\r\n"
    var valid_home_files = ["about" , "experience" , "funtoids"]
    var ways_to_type_poo = ["poo", "POO", "POOP", "poop", "bigpoo" , "smallpoo", "poooooooooooooooooooop", "pooooooooooooo", "SHIT", "excretion"]
    var map_to_file = {
        "about.txt": "about",
        "experience.txt": "experience",
        "funtoids.txt": "funtoids",
        "contacts": "contacts.txt"
    }
    const fitaddon = new FitAddon();
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
            }
            else if(event.key === "\r"){
                console.log(current_string)
                if(current_string.localeCompare("clear") === 0){
                    xtermRef.current.terminal.clear();
                    xtermRef.current.terminal.write('\x1b[2K\r');
                }
                else if(current_string.localeCompare("help")=== 0){
                    xtermRef.current.terminal.write(help_prompt); 
                }
                else if(current_string.localeCompare("ls") === 0){
                    xtermRef.current.terminal.write(ls_prompt);
                }
                else if(current_string.localeCompare("ls -a") === 0){
                    var secret_ls_prompt = ls_prompt+"secret.txt\n"
                    xtermRef.current.terminal.write(secret_ls_prompt);
                }
                else{
                    var current_string_arr = current_string.split(" ");
                    if((current_string_arr[0].localeCompare("cd") === 0) && valid_home_files.includes(current_string_arr[1])){
                        changeLocation(current_string_arr[1]);
                        return;
                    }

                    if(ways_to_type_poo.includes(current_string_arr[0])){
                        console.log("poo more features incoming")
                    }
                }
                xtermRef.current.terminal.write('\r\n'+prompt);
                current_string = ""
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
        prompt = "apokhar@Ashwin_website "+ location +"% "
        xtermRef.current.terminal.write("\r\n"+ prompt)
        current_string = "";
    }, [location])
    
    return (
            <XTerm ref={xtermRef} className={"terminal"}
                options={{cursorBlink:true}}
                addons={[fitaddon]} 
                onKey={handleData}
            />
    )
}

export default Terminal;