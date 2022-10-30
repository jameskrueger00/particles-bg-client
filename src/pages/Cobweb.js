import React, { Component } from "react";
import Particles from "../components/Particles";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


class Cobweb extends Component {
  state = {
    num: 75,
  }
    
  handleChange = (event, value) => {
    this.setState({
      num: value,
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
          <Box width={300}>
            <Stack direction="row" spacing={1}>
              <RemoveIcon/>
              <Slider value={this.state.num} onChange={this.handleChange} min={1} max={300}/>
              <AddIcon/>
            </Stack>
          </Box>
        </div>
        <Particles type="cobweb" num={this.state.num} color=""/>
      </div>
    )
  }
};

export default Cobweb;