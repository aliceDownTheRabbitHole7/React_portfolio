import ProfessionalPicture from './ProfessionalPicture'
import Qualifications from './Qaulifications'
import WebPages from './WebPages'

function SideBar() {
  
    return (
        <div id='side-bar'> 
          <ProfessionalPicture />
          <Qualifications />
          <WebPages />
        </div>
    )
}

export default SideBar