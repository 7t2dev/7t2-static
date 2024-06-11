import "./mainpage.css" 

function Mainpage() {
  return (
    <div className="mainpage">
      <div className="content">
        <h1 className="heading"> Investment </h1>
        <h2 className="sub-heading"> Growth </h2>
        <p className="description">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, 
          consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, 
          consectetur, adipisci velit
        </p>
        <div className="button">
          <button className="get-started">Get Started</button>
          <button className="free-trial">Free Trial</button>
        </div>
      </div>

      <div className="img1">
        <img src="test.svg" alt="" />
      </div>   
    </div>
  );
}

export default Mainpage;