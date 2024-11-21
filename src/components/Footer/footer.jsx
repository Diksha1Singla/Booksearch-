import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'; 
import { faFacebookF, faXTwitter, faInstagram, faPinterestP, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">BookHub</div>

      <div className="social-icons">
        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#"><FontAwesomeIcon icon={faPinterestP} /></a>
        <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>
      </div>

      <hr />

      <div className="footer-content">
        <div className="footer-column">
          <h4>Company</h4>
          <a href="/about">About</a>
          <a href="/register">Register</a>
          <a href="/login">Login</a>
          <a href="/location">Check Location</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-column">
          <h4>Readers</h4>
          <a href="#">What Is BookBub?</a>
          <a href="#">Ebook Deals</a>
          <a href="#">Free Ebooks</a>
          <a href="/">Free Kindle Books</a>
          <a href="#">The BookBub Blog</a>
          <a href="#">Help</a>
          <a href="#">All Authors</a>
          <a href="#">All Books</a>
        </div>
        <div className="footer-column">
          <h4>Popular Blog Posts</h4>
          <a href="#">11 Great Places to Read Free Books Online Right Now</a>
          <a href="#">61 Books Everyone Should Read in Their Lifetime</a>
          <a href="#">How Does Kindle Work? Everything You Need to Know</a>
          <a href="#">43 of the Best Romance Books</a>
          <a href="#">28 of the Best Books Coming Out in 2024</a>
          <a href="#">The Best Historical Fiction Books: An Ultimate List</a>
        </div>
      </div>

      <div className="copyright">
        © 2024 BookHub. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
