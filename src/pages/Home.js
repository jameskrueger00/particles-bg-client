import React, { Component } from "react";
import Particles from "../components/Particles";
import {Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';

class Home extends Component {
    render() {
      return (
          <div>
          <header class="h-100 d-flex justify-content-center align-items-center">
                <div class="container px-4 px-lg-5 text-center" style={{
        background:'rgba(255,255,255,0.6)',
        margin: '1rem',
        padding: '1rem',
        borderRadius: 1 + 'rem',
        }}>
                    <h1 class="mb-1">paritcles-bg</h1>
                    <h3 class="mb-3"><em>Test different background configurations</em></h3>
                    <Link class="btn btn-primary btn-xl" to="/Circles">Try it now</Link>
                    <footer class="footer text-center">
            <div class="container">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a class="btn btn-link btn-xl mt-3" href="https://github.com/jameskrueger00/particles-bg-client"><GitHubIcon color="#fff"/>  jameskrueger00</a>
                    </li>
                </ul>
            </div>
        </footer>
                </div>
                <Particles type="random" num={50} />
            </header>
        
        </div>
      )
    };
}

export default Home;