import React from "react";
import Navbar from "../components/Navbar";
import "../style/HomePage.css";
import Karousel from "../components/Karousel";
import Footer from "../Pages/Footer";
import Write from "../components/Typewrite";


export default function HomePage() {
  return (
    <>
      <Navbar />

      <div className="block1">
        <div className="Rectangle1">
          <h2 className="text1">
            <Write />
          </h2>
          <p className="text2">
            "Building a bridge between job seekers and employers in the labour
            market."
          </p>
          <a href="/indivisual">
            <button className="button-1">
              Register for Work!
            </button>
          </a>
        </div>
        <div className="right-image1">
          <Karousel />
        </div>
      </div>
      <div class="flex-container">
        <div class="left-box">
          <video
            src="./assets/video.mp4"
            autoPlay
            loop
            muted
            width="100%"
            height="100%"
            repeat="true"
          ></video>
        </div>
        <div class="right-box">
          <p class="aim"><h2>OUR AIM</h2>We aim to bridge the gap between job seekers and employers
            by providing a centralized platform where they can connect and
            fulfill their respective needs.</p>
        </div>
      </div>
      
      <div className="block3">
  <h1 align="center">REVIEWS</h1>
  <div class="reviewcontainer">
    <div class="reviewrow">
      <div class="left-column">
        <img className="eclipse" src="./assets/pic1.jpg"></img>
      </div>
      <div class="right-column">
        <div class="row" style={{ textAlign: 'left' }}>
        <b>User 1: ⭐⭐⭐⭐⭐</b>
        </div>
        <div class="row">
          Fantastic platform! Found reliable workers swiftly for my home renovation project. Highly recommend for anyone seeking skilled labor!
        </div>
      </div>
    </div>
    <div class="reviewrow">
      <div class="left-column">
        <img className="eclipse" src="./assets/pic2.jpg"></img>
      </div>
      <div class="right-column">
        <div class="row">
        <b>User 2: ⭐⭐⭐⭐⭐</b>
        </div>
        <div class="row">
          Efficient and user-friendly interface. Connected with experienced laborers in no time. Great service!
        </div>
      </div>
    </div>
    <div class="reviewrow">
      <div class="left-column">
        <img className="eclipse" src="./assets/pic3.jpg"></img>
      </div>
      <div class="right-column">
        <div class="row">
        <b>User 3: ⭐⭐⭐⭐⭐</b>
        </div>
        <div class="row">
          Impressed with the quality of workers I found through this site. Prompt responses and great communication. Will definitely use again!
        </div>
      </div>
    </div>
    <div class="reviewrow">
      <div class="left-column">
        <img className="eclipse" src="./assets/pic4.jpg"></img>
      </div>
      <div class="right-column">
        <div class="row">
        <b>User 4: ⭐⭐⭐⭐⭐</b>
        </div>
        <div class="row">
          A lifesaver for my business! Found dependable laborers for short-term projects hassle-free. Definitely my go-to for staffing needs.
        </div>
      </div>
    </div>
    <div class="reviewrow">
      <div class="left-column">
        <img className="eclipse" src="./assets/pic5.jpg"></img>
      </div>
      <div class="right-column">
        <div class="row">
          <b>User 5: ⭐⭐⭐⭐⭐</b>
        </div>
        <div class="row">
          Incredible resource for finding temporary labor. Streamlined process and a wide pool of skilled workers to choose from. Couldn't be happier!
        </div>
      </div>
    </div>
  </div> 
</div>
      
      
      <Footer />
    </>
  );
}
