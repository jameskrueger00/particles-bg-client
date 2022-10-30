import React, { Component } from "react";
import Particles from "../components/Particles";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import RefreshIcon from '@mui/icons-material/Refresh';


class RandomParticles extends Component {
  state = {
    num: Math.floor(Math.random() * 150),
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
          <Box>
            <Stack direction="row" spacing={1}>
             <button class="btn btn-primary btn-xl" onClick={this.handleChange}><RefreshIcon/></button>
              
            </Stack>
          </Box>
        </div>
        <Particles type="random" num={this.state.num} color=""/>
      </div>
    )
  }
};

export default RandomParticles;