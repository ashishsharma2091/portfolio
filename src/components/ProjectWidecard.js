import React, { Component } from 'react'

class ProjectWidecard extends Component {
    render() {
        return (
            <div class="maincomponent">
                <div class="thecard">
                    <div class="thefront">
                        <img src={this.props.image} alt="project thumbnail" />
                        <h3>{this.props.title}</h3>
                        <h4 class="secondtext" style={{
                            fontStyle: "italic"
                          }}>{this.props.time}</h4>
                           <h4 class="secondtext">{this.props.tech}</h4>
                    </div>
                    
                    <div class="theback">
                        <h5 class="projdesctext">{this.props.desc}</h5>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProjectWidecard