import projectsArray from "./ProjectsArray";

function Projects() {

  const projectsList = projectsArray.map((project, i) => (
    <>
      <a href={project.link} key={i} className="project" target='_blank'>
        <img src={project.icon} />
        <h3 className='project-head' key={project.ref}>{project.head}</h3>
      </a>
    </>
  ));

  return (
    <>
      <h1 id="projects-head" key='projects-head'>Projects</h1>
      <div className='projects-container'>
        {projectsList}
      </div>
    </>
  );
}


export default Projects;