import React from 'react'
import img2 from '../images/yoga2.jpg';

function Info_card1() {
    return (
        <div>
            <div className="text-white text-center">
                <h3 className="font-weight-bold"> YOUR STUDION ON THE GO</h3>
                <p> a monthly or annual membership to get full </p>
                </div>

                <div className="container m-5 p-5">
                <div className="row text-white">
                <div className="col-md-6">
                    <p style={{fontSize:'16px'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia quae culpa! </p>
                    <p style={{fontSize:'12px'}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga similique ducimus amet aliquam alias beatae ab dolorum illum harum voluptas? </p>
                    <p style={{fontSize:'12px', color:'#b6b6b6' }}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga similique ducimus amet aliquam alias beatae ab dolorum illum harum voluptas? </p>
                    <div className="d-flex justify-content-start ">
                        <button className=" btn btn-sm btn-info text-white px-4 " style={{borderRadius:'50px'}} > Learn More</button>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <img src={img2} alt="not  shown" className="mx-auto d-block imghover" style={{height:'200px',width:'auto;'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info_card1;
