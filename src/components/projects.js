import { Link } from "react-router-dom";
import '../styles/projects.css'


const projects = [
    {
        title : "Todo App",
        description : "Front end React App",
        info : "Handled input from the client, displaying todos and storing todos using basics of Redux.",
        url : "https://github.com/MastanKhan1/ToDoApp"
    },
    {
        title : "News Portal",
        description : "Front end React App",
        info : "Handled data from NewsAPI using fetch method, Shimmer to display when slow network and isOnline.",
        url : "https://github.com/MastanKhan1/NewsPortal"
    },
    {
        title : "Harmony",
        description : "Front end App",
        info : "Handled multiple pages. Created using html, css and javascript.",
        url : "https://mastankhan1.github.io/harmony_frontEnd/"
    },
]


const ProjectCard = ({title, description, info, url})=>{
    return(
        <>
            <Link to={url}>
                <div className="projects-item">
                    <h3 className="projects-title">{title}</h3>
                    <h5>{description}</h5>
                    <p>{info}</p>
                </div>
            </Link>
        </>
    )
}

const Projects = ()=>{
    return(
        <>
        <div className="projects">
            <h1>Here are some of my Projects</h1>
            <div className="projects-container">
                    
                    {
                        projects?.map(item=>{
                            return(
                                <>
                                <ProjectCard {...item}/>
                                </>
                            )
                        })
                    }
                </div>
        </div>
        </>
    )
}

export default Projects;