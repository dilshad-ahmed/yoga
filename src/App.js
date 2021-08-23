import './App.css';
import img1 from './images/yoga1.jpg';
import img2 from './images/yoga2.jpg';
import img3 from './images/yoga3.jpg';
import img4 from './images/yoga4.jpg';
import img5 from './images/yoga5.jpg';
import img6 from './images/yoga6.jpg';
import demovid from './images/demovideo.png';


function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark back-color">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse list-items" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto py-2 mb-2 mb-lg-0 ">
                <li className="nav-item mx-3">
                  <a className="nav-link " aria-current="page" href="#"> <h6 className="text-white"> Exlpore</h6></a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link active text-info " aria-current="page" href="#" > <h6> Instructor</h6> </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link " aria-current="page" href="#"> <h6 className="text-white"> Shop</h6> </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link " aria-current="page" href="#"> <h6 className="text-white">Contact us</h6> </a>
                </li>
              </ul>
              <i class="far fa-bell text-white px-3"> </i>
              <i class="fas fa-cart-plus text-white px-3"></i>
              <a href="#" className="px-3"> <img src={img1} alt="not found" style={{height:'40px',width:'40px',borderRadius:'50px',border:'2px solid aqua'}}/> </a>

            </div>
          </div>
        </nav>


        {/* banner */}

        <div className="banner" >
          <div className="banner-content">
          <h2 style={{fontSize:'35px',fontWeight:'bold'}} > ENERGIZE YOUR YOGA PRACTICE</h2>
          <p style={{fontSize:'14px'}}> ENERGIZE YOUR YOGA PRACTICEENERGIZE YOUR YOGA </p>
            <div className="mt-4">
              <div className="d-flex justify-content-center align-items-center ">
                <h5 className="btn btn-warning text-white  font-weight-bold" style={{borderRadius:'50px'}}>Yoga</h5>
                <h5 className="px-4">Holistic Healing</h5>
                <h5 className="px-4">Measure</h5>
                <h5 className="px-4">Nutrionlist</h5>
              </div>
            </div>
          </div>
        </div>
        {/* banner end */}

        <div>
          <div className="row p-5">
          <div className="col-md-9 ">
            <h2 className="text-white pb-3"> <span style={{borderBottom:'2px solid orange'}}> YOG</span>A  CLASSES</h2>
            {/* <hr style={{width:'40px',height:'4px', color:'yellow'}}/> */}
            <p style={{fontSize:'12px', color:'white'}} >
            ENERGIZE YOUR YOGA PRACTICEENERGIZE YOUR YOGA PRACTICEENERGIZE YOUR YOGA PRACTICEENERGIZE YOUR YOGA  PRACTICEENERGIZE YOUR YOGA PRACTICENERGIZE YOUR YOGA PRACTICEENERGIZE YOUR YOGA PRACTICEENERGIZE YOUR YOGA PRACTIC
            <br/>
            ENERGIZE YOUR YOGA PRACTICEENERGIZE YOUR YOGA PRACTICEENERGIZE YOUR
            </p>
          </div>

            <div className="row my-4 d-flex justify-content-around">
              <div className="col-md-2">
                <div className="card" >
                  <img src={img2} class="card-img-top" alt="image not found" style={{height:'120px'}}/>
                  <div className="card-body p-2" style={{backgroundColor:'#43B4D2'}}>
                    <h5 style={{fontSize:'14px'}}> fitness training</h5>
                    <h6 style={{color:'white'}}> 7 vidieos </h6>
                    <p style={{color:'white',fontSize:'12px'}}> Enroll now &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; $10</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card" >
                  <img src={img3} class="card-img-top" alt="image not found" style={{height:'120px'}}/>
                  <div className="card-body p-2" style={{backgroundColor:'#43B4D2'}}>
                    <h5 style={{fontSize:'14px'}}> fitness training</h5>
                    <h6 style={{color:'white'}}> 7 vidieos </h6>
                    <p style={{color:'white',fontSize:'12px'}}> Enroll now &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; $10</p>
                  </div>
                </div>
              </div><div className="col-md-2">
                <div className="card" >
                  <img src={img4} class="card-img-top" alt="image not found" style={{height:'120px'}}/>
                  <div className="card-body p-2" style={{backgroundColor:'#43B4D2'}}>
                    <h5 style={{fontSize:'14px'}}> fitness training</h5>
                    <h6 style={{color:'white'}}> 7 vidieos </h6>
                    <p style={{color:'white',fontSize:'12px'}}> Enroll now &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; $10</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card" >
                  <img src={img5} class="card-img-top" alt="image not found" style={{height:'120px'}}/>
                  <div className="card-body p-2" style={{backgroundColor:'#43B4D2'}}>
                    <h5 style={{fontSize:'14px'}}> fitness training</h5>
                    <h6 style={{color:'white'}}> 7 vidieos </h6>
                    <p style={{color:'white',fontSize:'12px'}}> Enroll now &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; $10</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card" >
                  <img src={img6} class="card-img-top" alt="image not found" style={{height:'120px'}}/>
                  <div className="card-body p-2" style={{backgroundColor:'#43B4D2'}}>
                    <h5 style={{fontSize:'14px'}}> fitness training</h5>
                    <h6 style={{color:'white'}}> 7 vidieos </h6>
                    <p style={{color:'white',fontSize:'12px'}}> Enroll now &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; $10</p>
                  </div>
                </div>
              </div>
              
            </div>

          </div>
        </div>


{/* image banner */}
        <div className="banner2 " >
          <div className="container p-5">  
            <div className="row">
              <div className="col-md-4  text-mute ">
                <h2 className="font-weight-bold"> FLOW WITH TOP INSTRUCTOR</h2>
                <p style={{fontSize:'12px'}}> ENERGIZE YOUR YOGA  YOGA PRACTICEENERGIZE YOUR YOGA PRACTIC</p>
                <button className="btn btn-sm btn-warning text-white" style={{borderRadius:'50px'}}> Check Instructions </button>
              </div>
              <div className="col-md-8"></div>
            </div>
          </div>
        </div>

      <div className="container p-5">
        <div className="row  text-white">
          <h3> HOW IT WORKS</h3>
          <p style={{fontSize:'12px'}}>ENERGIZE YOUR YOGA PRACTICEENERGIZE YOUR YOGA PRACTICEENERGIZE  </p>    
        </div>
      </div>  


<div className="container p-5"> 
<div className="row text-white">
      <div className="col-md-3">
          <h6 className="mb-4"> sign up to unlock live and in demand classes </h6>
          <p style={{fontSize:'12px'}}> choose  a monthly or annual membership to get full access</p>
      </div>
      <div className="col-md-3">
          <h6 className="mb-4"> sign up to unlock live and in demand classes </h6>
          <p style={{fontSize:'12px'}}> choose  a monthly or annual membership to get full access</p>
      </div>
      <div className="col-md-3">
          <h6 className="mb-4"> sign up to unlock live and in demand classes </h6>
          <p style={{fontSize:'12px'}}> choose  a monthly or annual membership to get full access</p>
      </div>
      <div className="col-md-3">
          <h6 className="mb-4"> sign up to unlock live and in demand classes </h6>
          <p style={{fontSize:'12px'}}> choose  a monthly or annual membership to get full access</p>
      </div>
</div>
</div>

<div className="row d-flex justify-content-center">
<hr style={{ width:'40%',height:' 3px',color:'orange' }} />
</div>
{/* demo video */}
<div className="row d-flex  my-5">
    <div>
      <img className="d-block mx-auto" src={demovid} style={{hight:'180px',width:'auto'}} alt="not showing" />
    </div>
</div>

{/* demo video end */}

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
      <img src={img2} alt="not  shown" className="mx-auto d-block imghover" style={{height:'200px',width:'100px;'}}/>
    </div>
  </div>
</div>

<div className="container m-5 p-5" style={{marginTop:'30px'}}>
  <div className="row text-white">
    <div className="col-md-6">
      <img src={img1} alt="not  shown" className="mx-auto d-block imghover" style={{height:'200px',width:'100px;'}}/>
    </div>
    
    <div className="col-md-6">
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
  );
}

export default App;
