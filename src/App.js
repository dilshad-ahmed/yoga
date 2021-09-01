  import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Slider_section from './components/Slider_section';
import Banner2 from './components/Banner2';
import Product_info from './components/Product_info';
import Video_section from './components/Video_section';
import Info_card1 from './components/Info_card1';
import Info_card2 from './components/Info_card2';

function App() {
  return (
    <div className="App">
        
      <Navbar/>      

      <Banner/>

        
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
            <div className="col-md-3"></div>
 
          <Slider_section/>
 
        </div>
      </div>

    <Banner2/>

    <Product_info/>

    <Video_section/>

    <Info_card1/>

    <Info_card2/>

</div>
);
}

export default App;
