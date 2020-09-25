import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
class Social extends Component {
render() {
return (

<div class="social">
      
     
<a href="https://www.facebook.com/ashish.sharma.142"
  className="facebooksocial">
  <FontAwesomeIcon icon={faFacebook} size="1x" />
</a>

<a href="https://www.instagram.com/itsa1sharma/"
  className="instagramsocial">
  <FontAwesomeIcon icon={faInstagram} size="1x" />
</a>
<a href="https://www.linkedin.com/in/ashish-sharma-9a224745/"
  className="linkedInsocial">
  <FontAwesomeIcon icon={faLinkedin} size="1x" />
</a>

</div>

)
}
}
export default Social
