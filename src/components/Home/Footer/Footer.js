import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';

const Footer = () => {
  const noNamed = [
    {name: "Emergency Dental Care", link: "/emergency"},
    {name: "Check Up", link: "check-up"},
    {name: "Treatment of Personal Diseases", link: "/personal-treatment"},
    {name: "Tooth Extraction", link: "/tooth-extraction"},
    {name: "Check Up", link: "/check-up"}
  ]
  const services = [
    {name: "Emergency Dental Care", link: "/emergency"},
    {name: "Check Up", link: "check-up"},
    {name: "Treatment of Personal Diseases", link: "/personal-treatment"},
    {name: "Tooth Extraction", link: "/tooth-extraction"},
    {name: "Check Up", link: "/check-up"},
    {name: "Check Up", link: "/check-up"},
    {name: "Check Up", link: "/check-up"}
  ]
  const oralHealth = [
    {name: "Emergency Dental Care", link: "/emergency"},
    {name: "Check Up", link: "check-up"},
    {name: "Treatment of Personal Diseases", link: "/personal-treatment"},
    {name: "Tooth Extraction", link: "/tooth-extraction"},
    {name: "Check Up", link: "/check-up"},
    {name: "Check Up", link: "/check-up"},
    {name: "Check Up", link: "/check-up"}
  ]
  const ourAddress = [
    {name: "New York - 101010 Hudson", link: "//google.com/map"},
    {name: "Yards", link: "//google.com/map"},
  ]


  return (

    <footer className="footer-area">
      <div className="container pt-5">

        <div className="row py-5">
          <FooterCol key={1} menuTitle={"."} menuItems={noNamed}></FooterCol>
          <FooterCol key={2} menuTitle={"Services"} menuItems={services}></FooterCol>
          <FooterCol key={3} menuTitle={"Oral Health"} menuItems={oralHealth}></FooterCol>
          <FooterCol key={4} menuTitle={"Our Address"} menuItems={ourAddress}>
            <ul className="social-media list-group list-group-horizontal">
              <li className="list-group-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF}/></a></li>
              <li className="list-group-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG}/></a></li>
              <li className="list-group-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram}/></a></li>
            </ul>
            <div className="mt-5">
              <h6>Call Now</h6>
              <button className="btn btn-primary">+2025550295</button>
            </div>
          </FooterCol>

        </div>

        <div className="text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;