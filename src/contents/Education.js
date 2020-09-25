import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="B.Tech Software Engineering" where="Uttar Pradesh Technical University" from="July 2009" to="April 2013"/>
<Widecard title="SSLC | HSC" where="CG Inter College" from="2004" to="2008"/>
</div>
)
}
}
export default Education