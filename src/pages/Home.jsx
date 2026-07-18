import "./styles/Home.css"
import { useNavigate } from "react-router-dom";
export default function Home(){
  const navigate = useNavigate();
    return(
    <main className="home">
      <div className="hero">
        <h1>Abderrahim Ouazine</h1> 
        <h1>frontend <span className="accent">developer</span></h1>

        <p className="hero-text">
          I create modern, responsive, and user-friendly websites using React,
          JavaScript, HTML, and CSS.
        </p>

        <div className="hero-buttons">
          <button className="fbtn" onClick={() => navigate("/projects")}>View Projects</button>
          <button onClick={() => navigate("/contact")}>Contact Me</button>
        </div>
      </div>
    </main>
    )
}