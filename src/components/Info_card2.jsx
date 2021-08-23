import React from 'react'
import img1 from '../images/yoga1.jpg';

function Info_card2() {
    return (
        <div>
            <div className="container m-5 p-5" style={{marginTop:'30px'}}>
                <div className="row text-white">
                <div className="col-md-6">
                <img src={img1} alt="not  shown" className="mx-auto d-block imghover" style={{height:'200px',width:'auto;'}}/>
                </div>
                
                <div className="col-md-6 px-4 ">
                <p style={{fontSize:'16px',textAlign:'right'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia quae culpa! </p>
                <p style={{fontSize:'12px',textAlign:'right'}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga similique ducimus amet aliquam alias beatae ab dolorum illum harum voluptas? </p>
                <p style={{fontSize:'12px',textAlign:'right' , color:'#b6b6b6'}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga similique ducimus amet aliquam alias beatae ab dolorum illum harum voluptas? </p>
                <div className="d-flex justify-content-end ">
                    <button className=" btn btn-sm btn-info text-white px-4 " style={{borderRadius:'50px'}} > Learn More</button>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Info_card2;
