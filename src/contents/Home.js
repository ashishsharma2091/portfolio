import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/me.jpeg';
import Social from '../components/Social';
class Home extends Component {
render() {
return (
<div className="condiv home">
<img src={profilepic} className="profilepic" alt="profilepicture"></img>
<div class="break"></div>
<div class="profileBio">
<ReactTypingEffect className="typingeffect" text={['I am Ashish Sharma','I am a Full Stack developer']} speed={100} eraseDelay={700}/>
</div>
<Social />
</div>
)
}
}
export default Home