import React from 'react'
import img2 from '../images/yoga2.jpg';
import img4 from '../images/yoga4.jpg';

function Slider_section() {
    return (
        <div>
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                  <div className="row ">
                        <div className="col-3">
                          <div className="card" >
                            <img src={img2} className="card-img-top d-block mx-auto" alt="image not found" style={{height:'120px'}}/>
                            <div className="card-body p-2 " style={{backgroundColor:'#43B4D2'}}>
                              <h5 style={{fontSize:'14px'}}> fitness training</h5>
                              <h6 style={{color:'white'}}> 7 vidieos </h6>
                              <p style={{color:'white',fontSize:'12px'}}> Enroll now &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; $10</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="card" >
                            <img src={img4} className="card-img-top d-block mx-auto" alt="image not found" style={{height:'120px'}}/>
                            <div className="card-body p-2" style={{backgroundColor:'#43B4D2'}}>
                              <h5 style={{fontSize:'14px'}}> fitness training</h5>
                              <h6 style={{color:'white'}}> 7 vidieos </h6>
                              <p style={{color:'white',fontSize:'12px'}}> Enroll now &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; $10</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="card" >
                            <img src={img2} className="card-img-top d-block mx-auto" alt="image not found" style={{height:'120px'}}/>
                            <div className="card-body p-2" style={{backgroundColor:'#43B4D2'}}>
                              <h5 style={{fontSize:'14px'}}> fitness training</h5>
                              <h6 style={{color:'white'}}> 7 vidieos </h6>
                              <p style={{color:'white',fontSize:'12px'}}> Enroll now &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; $10</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-3 ">
                          <div className="card" >
                            <img src={img4} className="card-img-top d-block mx-auto" alt="image not found" style={{height:'120px'}}/>
                            <div className="card-body p-2" style={{backgroundColor:'#43B4D2'}}>
                              <h5 style={{fontSize:'14px'}}> fitness training</h5>
                              <h6 style={{color:'white'}}> 7 vidieos </h6>
                              <p style={{color:'white',fontSize:'12px'}}> Enroll now &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; $10</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="carousel-item">
                    
                    {/* slider- card - here */}

                  </div>
                  <div className="carousel-item">

                    {/* slider- card - here */}
                    
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
        </div>
    )
}

export default Slider_section;
