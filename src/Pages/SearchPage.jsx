import React from "react";
import Navbar from "../components/Navbar";
import "../style/SearchPage.css";
import Footer from "./Footer";
import Labour from "../components/Labour";
import { useFirebase } from "../context/Firebase";
import { useState, useEffect } from "react";

export default function SearchPage() {
  const { labours, setLabours } = useFirebase();
  const [userLocation, setUserLocation] = useState({
    lat: null,
    lon: null,
  });
  useEffect(() => {
    const successHandler = (position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation({ lat: latitude, lon: longitude });
    };
    const errorHandler = (err) => {
      console.log(err.message);
    };
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };
  const locationSort = () => {
    const sortedLaborList = labours
      .map((labor) => ({
        ...labor,
        distance: calculateDistance(
          labor.lat,
          labor.lon,
          userLocation.lat,
          userLocation.lon
        ),
      }))
      .sort((a, b) => a.distance - b.distance);
    setLabours(sortedLaborList);
  };

  const wagesSort = (sortType) => {
    const sortedLaborList = labours.sort((a, b) => {
      if (sortType === "asce") {
        return a.charge - b.charge;
      } else {
        return b.charge - a.charge;
      }
    });
    setLabours([...sortedLaborList]);
  };

  return (
    <>
      <Navbar />

      <div className="bg">
        <div class="searchpage-flex-container">
          <div class="searchrow">
            <p className="text11">Search Results</p>
          </div>
          <div class="searchrow">
            <div className="Search">

              <div className="dropdown">
                <div className="dropbtn">Sort by ▽</div>
                <div className="dropdown-content">
                  <div onClick={() => { wagesSort("asce"); }}>Price: Low to High</div>
                  <div onClick={() => { wagesSort("desc"); }}>Price: High to Low</div>
                  <div onClick={locationSort}>Nearest</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {!labours.length && (
          <div className="loader-container">
            <span className="loader2"></span>
          </div>
        )}
        {labours.length && (
          <div className="rectangle">
            {labours.map((labour) => {
              return <Labour data={labour} key={labour.id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}
