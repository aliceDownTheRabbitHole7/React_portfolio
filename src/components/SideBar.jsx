import professional_picture from './icons/professional_picture.jpg'
import linkedin_icon from './icons/linked-in-icon.png' 
import github_icon from './icons/github-icon.png'

function SideBar() {
    return (
        <div id='side-bar'>

            {/* Picture of me */}

            <div id='self-pic-div'>
              <img src={professional_picture} id='self-pic' />
            </div>

            {/* Qualifications */}

            <h2 id="qualifications-head">
              <b>Qualifications</b>
            </h2>
            <ul id="qualifications-list">
              <li className="list-item">Effective team player.</li>
              <li className="list-item">Expert analytical capabilities.</li>
              <li className="list-item">Superior communication skills.</li>
              <li className="list-item">Able to grasp complex subjects.</li>
              <li className="list-item">Exceedingly diligent worker.</li>
            </ul>   

            {/* Linked In Icon */}

            <div id="linkedin-section">
              <a href="https://www.linkedin.com/in/aleksander-white-0a04bb294/" target="_blank">
                <img src={linkedin_icon} id="linked-in-image" />
                <h6 id='linkedin-header'>LinkedIn Page</h6>
              </a>
            </div>

            {/* Git Hub Icon */}

            <div id="github-section">
              <a href="https://github.com/aliceDownTheRabbitHole7" target="_blank" >
                <img src={github_icon} id="github-icon" />
                <h6 id='github-header'>GitHub Page</h6>
              </a>
            </div>

        </div>
    )
}

export default SideBar