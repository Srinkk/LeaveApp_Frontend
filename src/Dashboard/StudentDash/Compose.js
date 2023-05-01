import { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import NavBarDashBoard from '../../NavBar/NavBarDashboard'
import {FormContainer} from '../../Forms/FormContainer'

import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Compose = () => {

	const [admins, setAdmins] = useState([])
	const [subject, setSubject] = useState('')
	const [receiverId, setReceiverId] = useState('')
	const [days, setDays] = useState('')
	const [body, setBody] = useState('')
	const [err, setErr] = useState(null)
	
	const navigate = useNavigate()
	const location = useLocation()   

	const { studentId, studentName } = location.state || {} 

	useEffect(() => {
		axios.post("http://localhost:3500/students/sameschooladmins", { _id: studentId })
		.then(response => {
			const admins_received = response.data
			setAdmins(admins_received)
			if (admins?.length === 1) {
				setReceiverId(admins[0]._id)
			}
		})
		.catch(error => {
			console.log(error)
		})
	})

	const handleSelectAdmin = (e) => {
		setReceiverId(e.target.value)
	}

	const handleSubmit = () => {
		console.log(receiverId)
		if (!receiverId?.length) {
            return setErr('Can\'t send application as no receiver can be found.')
        }

		axios.post("http://localhost:3500/mails", {
				subject,
				days,
				body,
				senderId: studentId,
				receiverId:receiverId
			})
			.then(response => {
				const data = response.data
				console.log(data.message)
				navigate('/student', { state: { student_id: studentId, student_name: studentName } })
			})
			.catch(error => {
				setErr(error.response.data.message)
				console.log(error)
			})
	}


	return (
		<>
			<NavBarDashBoard
				student_id={studentId}
				admin_id=''
			/>
			
			<div className="justify-content-center">
			<div className='bagc'>
				
					<div className='dashboard_bg'>
					 <div className='dashboard_overlay'>
					<h2><div className='form_head1'>Compose your Application</div></h2>
					<hr className='md-6'/>
					<div className='container'>
						
						<Form method="POST" >
							<Form.Group controlId="subject"></Form.Group>
							<Form.Label><h6><div className='days2'>Subject</div></h6></Form.Label>
							<Form.Control
								type='text' placeholder='write the subject' name='subject' value={subject} onChange={(e)=>setSubject(e.target.value)}
								></Form.Control>

							<div className="sender_days">
								<Form.Label><h6 className='days'>Send to</h6></Form.Label>
								<Form.Select value={receiverId} onChange={handleSelectAdmin}>
										{admins?.length ? (
										admins.map(admin=>(
						
											<option className='admin_box' key={admin._id} value={admin._id} > {admin.name} </option>
											))
											) : <option disabled selected value=''>No admin found for this school</option>
										}
								</Form.Select>
			
								<Form.Group controlId='days'></Form.Group>
								<Form.Label><h6 className='days'>Days</h6></Form.Label>
								<Form.Control 
								type='digit' name='Days' value={days} onChange={(e)=>setDays(e.target.value)} ></Form.Control>        
							</div>
						
							<Form.Label className='days1'><h6>Write Your Application</h6></Form.Label>
							<FloatingLabel controlId="floatingTextarea" label="Write your application">
				
								<Form.Control
									as="textarea"
									placeholder="Leave a comment here"
									style={{ height: '280px' }}
									value={body}
									onChange={(e)=>setBody(e.target.value)}
								/>
							</FloatingLabel>
						
						</Form>
						

						{ err ? <p>{err}</p> : <></>}

						<button onClick={handleSubmit} className='send' >Send</button>
					
						<button  onClick={() => {navigate('/student', { state: { student_id: studentId, student_name: studentName } }) }} className='cancel'>Cancel</button>
					</div>
        		</div>
				</div>
				</div>
				</div>
  			
		</>
	)
}

export default Compose
