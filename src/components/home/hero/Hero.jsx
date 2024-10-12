import React, { useState } from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [dropdownVisible, setDropdownVisible] = useState(false); // For dropdown visibility

  const placesOfTamilNadu = [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi (Tuticorin)",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupattur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ];

  const handleIncrement = (setter, value) => {
    setter(value + 1);
  };

  const handleDecrement = (setter, value) => {
    if (value > 0) {
      setter(value - 1);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading title="Search Pods Near You" subtitle="Less Cost, More Comfort." />
          <form className="flex">
            <div className="box">
              <span>City</span>
              <br />
              <select>
                <option value="">Select Location</option>
                {placesOfTamilNadu.map((place, index) => (
                  <option key={index} value={place}>
                    {place}
                  </option>
                ))}
              </select>
            </div>

            <div className="box">
              <span>Check-In Date</span>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </div>

            <div className="box">
              <span>Check-Out Date</span>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </div>

            {/* Guests and Rooms Dropdown Button */}
            <div className="box">
              <span>Guests and Rooms</span>
              <button type="button" className="dropdown-button" onClick={toggleDropdown}>
                {adults} Adults, {children} Children, {rooms} Rooms
              </button>
              {dropdownVisible && (
                <div className="dropdown-menu">
                  <div className="dropdown-item">
                    <span>Adults</span>
                    <div className="quantity-controls">
                      <button type="button" onClick={() => handleDecrement(setAdults, adults)}>-</button>
                      <input type="text" value={adults} readOnly />
                      <button type="button" onClick={() => handleIncrement(setAdults, adults)}>+</button>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <span>Children</span>
                    <div className="quantity-controls">
                      <button type="button" onClick={() => handleDecrement(setChildren, children)}>-</button>
                      <input type="text" value={children} readOnly />
                      <button type="button" onClick={() => handleIncrement(setChildren, children)}>+</button>
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <span>Rooms</span>
                    <div className="quantity-controls">
                      <button type="button" onClick={() => handleDecrement(setRooms, rooms)}>-</button>
                      <input type="text" value={rooms} readOnly />
                      <button type="button" onClick={() => handleIncrement(setRooms, rooms)}>+</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="box">
              {/* <h4>Browse Pods Around You</h4> */}

            </div>
              <center>
            <button className="btn1">
              <i className="fa fa-search"></i>
            </button>
              </center>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
