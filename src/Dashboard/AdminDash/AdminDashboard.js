import NavBarDashBoard from '../../NavBar/NavBarDashboard';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReceivedMail from './ReceivedMail';

import './style.css'



import { Link } from 'react-router-dom';
import { Container } from 'react-dom';
import SignUp from '../../Forms/SignUp';
import { useLocation } from 'react-router-dom';

const AdminDashboard = () => {
      
    const location = useLocation()
	const { admin_id, admin_name } = location.state || {}

	return (
		<div>
			<NavBarDashBoard
				admin_id = {admin_id}
				student_id = ''
			/> 
			<div className='head  '>
				<h3 className='welcome'>Welcome {admin_name}</h3>	
			</div>
			<div className='container'>
			<h5>Here is your pending mails to check</h5>
				
				
				<ReceivedMail 
					adminId = {admin_id}
				/>
				
				</div>

			</div>
		
	)
}

export default AdminDashboard