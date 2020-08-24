import React from 'react';
import Header from '../components/Header';

export default function UserPage() {
    return (
        <div>
            <Header />
            <div style={{top: "200px"}} class="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas>
                <div class="grid-y grid-padding-x" style={{height: "100%"}}>
                    <br/>
                    <div class="cell shrink">
                        <img alt="img" class="thumbnail" src="https://placehold.it/550x350"/>
                    </div>
                    <div class="cell auto">
                        <h5>Hello Username!</h5>
                        
                    </div>
                </div>
            </div>
                
            <div style={{marginTop: "25px"}} class="off-canvas-content" data-off-canvas-content>
                <div style={{marginBottom: "25px"}} class="title-bar hide-for-large">
                    <div class="title-bar-left">
                        <span class="title-bar-title">Username</span>
                    </div>
                </div>
                
                <article class="grid-container">
                    <div class="grid-x grid-margin-x small-up-2 medium-up-3 large-up-4">
                        <div class="cell">
                            <img alt="img" class="thumbnail" src="https://placehold.it/550x550"/>
                            <h5>My Site</h5>
                        </div>
                        <div class="cell">
                            <img alt="img" class="thumbnail" src="https://placehold.it/550x550"/>
                            <h5>My Site</h5>
                        </div>
                        <div class="cell">
                            <img alt="img" class="thumbnail" src="https://placehold.it/550x550"/>
                            <h5>My Site</h5>
                        </div>
                        <div class="cell">
                            <img alt="img" class="thumbnail" src="https://placehold.it/550x550"/>
                            <h5>My Site</h5>
                        </div>
                    </div>
                
                    <hr/>

                </article>

            </div>
        </div>
    )
}
