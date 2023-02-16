import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faMailReply } from '@fortawesome/free-solid-svg-icons';
import '../index.css';



const SocialLinks = () => {
  return (
    <ul className="social-media-links">
      <li><a href="https://www.linkedin.com/in/venkateswari-sudalai-371a77bb/"><FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#4267B2" display="flex"
  /></a></li>
      <li><a href="https://github.com/venkateswarisudalai"><FontAwesomeIcon icon={faGithub} size="2x" color="#4267B2" display="flex"
  justify-content= "center"/></a></li>
      <li><a href="mailto:sudalai.v@northeastern.edu"><FontAwesomeIcon icon={faMailBulk} size="2x" color="#4267B2" display="flex"
  justify-content= "center"/></a></li>
    </ul>
  );
};

export default SocialLinks;
