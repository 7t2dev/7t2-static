import "./about.css";
import Dakota from "../../Assets/dakota-johnson.jpg"
import Ian from "../../Assets/ian-somerhalder.png"
import Christian from "../../Assets/Christian-Bale.jpg"
import Left from "../../Assets/left.svg"
import Right from "../../Assets/right.svg"

function About() {
  return (
    <div id="about-us" className="about-us">
      <h1>What Others Thinks</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error 
        sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab
       </p>

      <div className="reviews">
        <img className="arrow-icon" src={Left} alt=""/>
        <div className="review1">
          <img src={Dakota} alt=""/>
          <p>
            A wonderful serenity has taken possession of my 
            entire soul, like these sweet mornings of spring 
            which I enjoy with my whole heart. I am alone, and feel the charm
          </p>
        </div>
        <div className="review2">
          <img src={Ian} alt=""/>
          <p>
            A wonderful serenity has taken possession of my 
            entire soul, like these sweet mornings of spring 
            which I enjoy with my whole heart. I am alone, and feel the charm
          </p>
        </div>
        <div className="review3">
          <img src={Christian} alt=""/>
          <p>
            A wonderful serenity has taken possession of my 
            entire soul, like these sweet mornings of spring 
            which I enjoy with my whole heart. I am alone, and feel the charm
          </p>
        </div>
        <img className="arrow-icon" src={Right} alt=""/>
      </div>
    </div>

  );
}

export default About;