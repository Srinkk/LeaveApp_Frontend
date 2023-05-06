import NavBar from "../../NavBar/NavBar"
import { useLocation } from "react-router-dom"

const AssureSchool = () => {

    const location = useLocation()

    const { schoolName } = location.state || {}

    return (
        <>
            <NavBar/>
            <div className='background'>
             <div classsName='dashboard_overlay'>
            <h2><div classname='head1'>New Institute {schoolName} is successfully created!</div></h2>
            <div className='subhead1'>
            <p><a href="/home">Go Back to Home Page</a></p>
            <p><a href="/signup/admin">Signup As An Admin</a></p>
            </div>
            </div>
            </div>
        </>
    )
}

export default AssureSchool
