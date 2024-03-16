import React from "react";
import '../style/FooterStyle.css'

export default function Footer () {
return (
	<>
    <hr color="#f8be00"></hr>
    <hr color="#f8be00"></hr>
    <div className="footer" >
        <div className="chatbot">
            <div className="botheader"><img src="./assets/bot.png" height='35px' width='35px'></img><h4>LinkBot/Help</h4></div>
            <div><input type="text" className="searchbar" placeholder="Ask your doubts!"></input></div>      
        </div>
        <div className="column1">
            <h4><u>Company</u></h4>
            <div>About</div>
            <div>Services</div>
            <div>Link</div>
        </div>
        <div className="column2">
            <h4><u>Support</u></h4>
			<div>Contact</div>
            <div>E-mail</div>
            <div>Pricing</div>
        </div>
		<div className="column3">
            <h4><u>Legal</u></h4>
			<div>Claims</div>
            <div>Privacy</div>
            <div>Terms</div>
        </div>
        <div className="column4">
            <div><img className="invertfilter"src="./assets/instagram.png" alt="" height='25px' />⠀<img className="invertfilter" src="./assets/call.png" height='30px' alt="" />⠀<img className="invertfilter"src="./assets/email.png" height='30px' alt="" /></div>
            <br></br>
            <div><p>@Copyright LabourLink 2023</p></div>
        </div>
    </div>
    </>
);
};