import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Particles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  attributes = {
    
  }
  
  componentWillMount() {
    this.attributes = {
      type: this.props.type,
      num: this.props.num,
      color: this.props.color,
    };  
    this.setState({attributes: this.attributes});
  }
 
  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.attributes = { 
        type: nextProps.type,
        num: nextProps.num,
        color: nextProps.color,
      };
      this.setState({attributes: this.attributes});
    }
    this.forceUpdate();
  }
  
    
  render() {
    let type = this.attributes.type;
    let num  = this.attributes.num;
    let color = this.attributes.color;
    return (
      <div key={color + num + type}>
        <ParticlesBg type={type} num={num} color={color} bg={true} />
      </div>
    );
  }
}

export default Particles;