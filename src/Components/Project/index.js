import React from 'react';
import "./Project.css"

import TangibleT from './Images/TangibleT.png';
import XPArcade from './Images/XP-Arcade.jpg'
import Project3 from './Images/Porject3.jpg'



function Project() {


    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <figure class="figure">
                        <img src={TangibleT} class="figure-img img-fluid rounded" alt="..."></img>
                        <div class="d-grid gap-2 d-md-block">
                            <button class="btn btn-primary" type="button">Repo</button>
                        </div>
                        <figcaption class="figure-caption">Project one was a very fun to put together. It uses the Youtube API and Musixmatch API to show videos and there corrisponding lyrics.</figcaption>
                    </figure>
                </div>
                <div class="col">
                    <figure class="figure">
                        <img src={XPArcade} class="figure-img img-fluid rounded" alt="XP-Arcade"/>
                        <div class="d-grid gap-2 d-md-block">
                            <button class="btn btn-primary" type="button">Repo</button>
                        </div>
                        <figcaption class="figure-caption">Project two was a more relaxed but complex take. We made a "Windows XP Arcade" simulator. We made icons to click to play games such as Snake and Minesweeper. We even included some of the old Windows assistants like Clippy and Merlin.</figcaption>
                    </figure>
                </div>
                <div class="col">
                    <figure class="figure">
                        <img src={Project3} class="figure-img img-fluid rounded" alt="..."></img>
                        <div class="d-grid gap-2 d-md-block">
                            <button class="btn btn-primary" type="button">Repo</button>
                        </div>
                        <figcaption class="figure-caption">Project Description</figcaption>
                    </figure>
                </div>
            </div>
        </div>


    )
}

export default Project