import iconLinkedIn from '../icons/linked-in-icon.png' 
import iconGithub from '../icons/github-icon.png'

function WebPages() {
    const linkedInLink = 'https://www.linkedin.com/in/aleksander-white-0a04bb294/';
    const githubLink = "https://github.com/aliceDownTheRabbitHole7";
    
    const webPages = [
        {
          link: linkedInLink,
          icon: iconLinkedIn,
          id: 'linkedin-page',
          ref: 'linkein',
          head: 'Linked In'
        },
        {
          link: githubLink,
          icon: iconGithub,
          id: 'github-page',
          ref: 'github',
          head: 'Git Hub'
        }
    ]

    const webPagesList = webPages.map((page) => (
        <a href={page.link} key={page.id} className="page" target='_blank'>
          <img src={page.icon} key={page.ref} />
          <h3 className='page-head'>{page.head}</h3>
        </a>
    ))

    return <div className='web-pages'>{webPagesList}</div>
}

export default WebPages;