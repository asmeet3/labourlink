import React from 'react';
 
import Typewriter from "typewriter-effect";

function Write() {
    return (
        <div className="App">
            <Typewriter
                
                onInit={(typewriter) => {
                   
                    typewriter
                    
                        .typeString("Believe and Build the link!")
                        .pauseFor(500)
                        .deleteAll()
                        .typeString("Believe and build the link!")
                        .start();
                }}
            />
        </div>
    );
}
 
export default Write;