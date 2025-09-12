import React from "react";
import "./Advertisements.css";

const Advertisements = () => {
  const ads = [
    {
      title: "Eclipse Is Missing A Server! | How To Install A Server In Eclipse",
      description:
        "server option is not showing in eclipse,server option is not showing in eclipse 2020-06,server option in eclipse,server option is not showing in eclipse photon,server option missing in eclipse,server option is not available in eclipse,server tab in eclipse missing,server tab is not showing in eclipse",
      year: 2020,
      image:'Ser.webp' // Replace with your image URL
    },
    {
      title: "How To Easily Format And Install Windows 10 With A Usb",
      description:
        "The Beginner's Guide to how to format and install  windows 10 with usb",
      year: 2023,
      image: 'Ser1.webp', // Replace with your image URL
    },
    {
      title: "Canva Pro Free Sinhala | How to Get Canva Pro Account For 100% Free",
      description:
        "Canva Pro Free Sinhala | How to Get Canva Pro Account For 100% Free Bingotingo - https://bingotingo.com/best-social-media-platforms/",
      year: 2024,
      image: 'Ser3.webp', // Replace with your image URL
    },
  ];

  return (
    <div className="advertisements-section">
      <h2>My Advertisements</h2>
      <div className="ads-container">
        {ads.map((ad, index) => (
          <div className="ad-card" key={index}>
            <img src={ad.image} alt={ad.title} className="ad-image" />
            <h3>{ad.title}</h3>
            <p>{ad.description}</p>
            <p><strong>Year:</strong> {ad.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advertisements;
