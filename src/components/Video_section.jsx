import React from 'react'
import demovid from '../images/demovideo.png';

function Video_section() {
    return (
        <div>
            <div className="row d-flex justify-content-center">
                <hr style={{ width:'40%',height:' 3px',color:'orange' }} />
            </div>
            {/* demo video */}
            <div className="row d-flex  my-5">
                <div>
                <img className="d-block mx-auto" src={demovid} style={{hight:'180px',width:'auto'}} alt="not showing" />
                </div>
            </div>
        </div>
    )
}

export default Video_section;
