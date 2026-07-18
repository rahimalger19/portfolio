import "./styles/Projects.css"
import fastfoodImg from "../assets/Fastfood.png";
import ecommerce from "../assets/ecommerce.png";
import xo from "../assets/xo.png";
import calc from "../assets/calc.png";
const projects = [
  { title: "Fast Food Website", image: fastfoodImg , link:"https://burger-five-kappa.vercel.app"},
  { title: "E-commerce", image: ecommerce , link: "https://e-commerce-chi-three-49.vercel.app" },
  { title: "XO Game", image: xo, link: "https://xo-game-sepia.vercel.app" },
   { title: "Calculator", image: calc, link: "https://calculator-seven-dusky-95.vercel.app" },
];


function Projects() {
  return <>
<div className="projects">
<h1>My Projects</h1>
   
    <div className="projects-grid">
      {projects.map((p) => (
        <div
          key={p.title}
          className="project-card"
          onClick={() => window.open(p.link, "_blank")}
        >
          <img src={p.image} alt={p.title} />
          <div className="project-title">{p.title}</div>
        </div>
      ))}
    </div>
    </div>
  </>;
 
}

export default Projects;
