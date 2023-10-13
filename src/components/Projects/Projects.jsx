import projectsArray from "./ProjectsArray";

function Projects() {
  const projectsList = projectsArray.map((project) => (
    <a href={project.link} key={project.ref} className="project" target='_blank'>
      <img src={project.icon} key={project.id} />
      <h3 className='project-head'>{project.head}</h3>
    </a>
  ));

  return (
    <>
      <h1 id="projects-head">Projects</h1>
      <div className='projects-container'>
        {projectsList}
      </div>
    </>
  );
}

export default Projects;