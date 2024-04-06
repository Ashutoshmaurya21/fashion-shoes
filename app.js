import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
     <div className="logo">Fashion Shoes</div>
     <ul>
      <li href="#">Home</li>
      <li href="#">Location</li>
      <li href="#">About</li>
      <li href="#">Contact</li>

     </ul>

     <button >Login</button>
    </div>

    <div className="shoescontainer">

      <div className="details">


        <h1 className='heading'>YOU DESERVE BEST SHOES FOR YOUR FEET</h1>
        <p>WALK THE TALK IN STYLE! OUR LATEST SHOE LINE IS HERE TO MAKE HEADS TURN
           AND HEARTS SKIP A BEAT. STEP UP YOUR GAME WITH UNPARALLELED COMFORT AND TREND-SETTING DESIGNS. 
          DON'T JUST FOLLOW THE CROWD, LEAD THE WAY WITH OUR EXCLUSIVE COLLECTION. GET YOURS TODAY AND LET YOUR SHOES DO THE TALKING</p>
          <button className='shop'>Shop Now</button>
          <button className='cate'>Category</button>
          <p>Also Available on</p>
          <div className="brand-icon">
            <img src="amazon.png" alt="" />
            <img src="flipkart.png" alt="" />
          </div>
     </div>
     
      <img  className="image"src="shoes.webp" alt="pict" />
    </div>

    </div>
  );
}

export default App;
