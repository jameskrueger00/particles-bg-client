import React, { Component } from "react";
import Particles from "../components/Particles";
import Slider from "@mui/material/Slider";
import { CirclePicker } from 'react-color';
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

class Circles extends Component {
  state = {
    num: 25,
  }
    
  handleChange = (color) => {
    this.setState({
      color: color.hex,
    })
  };
  
  handleSlide = (event, value) => {
    this.setState({
      num: value
    })
  };
  
  render() {
    return (
      <div class="h-100 d-flex justify-content-left align-items-center">
        <div style={{
        background:'rgba(255,255,255,0.6)',
        margin: '1rem',
        padding: '1rem',
        borderRadius: 1 + 'rem',
        }}>
          <CirclePicker onChangeComplete={this.handleChange}/>
          <Box width={220} style={{margin: '1rem'}} alignItems="center" justifyContent="center">
              <Stack direction="row" spacing={1}>
                <RemoveIcon/>
                <Slider value={this.state.num} onChange={this.handleSlide} min={1} max={30}/>
                <AddIcon/>
              </Stack>
          </Box>
        </div>

        
        <Particles type="circle" num={this.state.num} color={this.state.color}/>
        
      </div>
    )
  }
};

export default Circles;