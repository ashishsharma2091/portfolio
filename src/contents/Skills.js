import React, { Component } from 'react'
import project from '../img/skillfinal.jpg';
class Skills extends Component {

render() {
return (
    
<div className="condiv skills">
<img class ="skillimage" src={project} alt="skillpic"></img>

<p>Core JAVA</p>
<div class="container">
  <div class="skills bar1">68%</div>
</div>
<p>Spring MVC</p>
<div class="container">
  <div class="skills bar2">65%</div>
</div>
<p>Spring Boot</p>
<div class="container">
  <div class="skills bar3">62%</div>
</div>
<p>Rest WS</p>
<div class="container">
  <div class="skills bar3">62%</div>
</div>


<p>Hibernate</p>
<div class="container">
  <div class="skills bar3">62%</div>
</div>
<p>SQL/DB</p>
<div class="container">
  <div class="skills bar4">60%</div>
</div>
<p>Junit</p>
<div class="container">
  <div class="skills bar4">60%</div>
</div>
<p>JSP/JSF/HTML/CSS</p>
<div class="container">
  <div class="skills bar5">58%</div>
</div>
<p>JavaScript</p>
<div class="container">
  <div class="skills bar5">58%</div>
</div>
<p>ReactJS</p>
<div class="container">
  <div class="skills bar6">51%</div>
</div>
<p>JPA</p>
<div class="container">
  <div class="skills bar4">60%</div>
</div>
<p>Git</p>
<div class="container">
  <div class="skills bar7">70%</div>
</div>


</div>
)
}
}
export default Skills