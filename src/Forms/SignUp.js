import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'

import { FormContainer } from './FormContainer'
import { useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

const SignUp = () => {

    const navigate = useNavigate()

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [inst_name, setInst_Name] = useState('')
    const [password, setPassword] = useState('')
	const [err, setErr] = useState(null)

    const onSignupClicked = async(e) => {
		e.preventDefault();

		axios.post('http://localhost:3500/students', { id, name, password, inst_name })
			.then(response => {
				const student = response.data
				console.log(response)
				navigate('/student', { state: { student_id: student._id, student_name: student.name } })

			})
			.catch(error => {
				setErr(error.response.data.message)
				console.log(error)
			})
	}
		

	return (
		<div className='form_page'>
			<NavBar/>
			<div >
			<div className='justify-content-center'>

				<FormContainer>
					<h2><div className='form_head'>SignUp</div></h2>
					<h4><div className='subhead1'>Already have an account?  <Link to='/login'>Login</Link></div></h4>

					<Button variant='secondary' href='/signup/admin'><div className='subhead1'><h5>Sign up as an admin</h5></div></Button>
					<hr className='md-3'/>
					<Form method='POST'>
						<Form.Group controlId='id'></Form.Group>
						<Form.Label ><div className='subhead1'><h5>Id</h5></div></Form.Label>  

						<Form.Control className='form_field'
						type='digit' placeholder='write enrollment number if you are from UEMK' name='id' value={id}
						onChange={e=>setId(e.target.value)}>
						</Form.Control>

						<Form.Group controlId='name'></Form.Group>
						<Form.Label><div className='subhead1'><h5>Name</h5></div></Form.Label>   

						<Form.Control className='form_field'
						type='text' placeholder='name' name='name' onChange={e=>setName(e.target.value)} value={name}>
						</Form.Control>

						<Form.Group controlId='inst_name'></Form.Group>
						<Form.Label><div className='subhead1'><h5>Insitution Name</h5></div></Form.Label>        
						
						<Form.Control className='form_field'
						type='text' placeholder='College Name' name='inst_name' onChange={e=>setInst_Name(e.target.value)} value={inst_name}>
						</Form.Control>

						<Form.Group controlId='password'></Form.Group>
						<Form.Label><div className='subhead1'><h5>Password </h5></div></Form.Label>

						<Form.Control className='form_field'
						type='password' placeholder='must be 8-20 letter long' name='password' onChange={e=>setPassword(e.target.value)} value={password}>
						</Form.Control>
						
					</Form>
					<hr className='md-3'/>

					{err?.length ? (<p>{err}</p>) : <></>}

					<Button variant='secondary' type='submit' onClick={onSignupClicked}><div>SignUp</div></Button>

				</FormContainer>
			</div>
			</div>
		</div>
	)
}
export default SignUp
