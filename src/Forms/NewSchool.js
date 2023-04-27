import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'

import { FormContainer } from './FormContainer'
import { useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import React from 'react'

const NewSchool = () => {
    const [name,setName]=useState('')
    const [contact,setContact]=useState('')
    const[code,setCode]=useState('')
  return (
    <div>
			<NavBar/>
			<div className='justify-content-center'>

				<FormContainer>
					<h2>Enter the details</h2>
					<hr className='md-3'/>
					<Form method='POST'>
						<Form.Group controlId='Name'></Form.Group>
						<Form.Label><h5>School/College Name</h5></Form.Label>  

						<Form.Control
						type='digit' placeholder='School/College Name' name='name' value={name}
						onChange={e=>setName(e.target.value)}>
						</Form.Control>

						<Form.Group controlId='contact'></Form.Group>
						<Form.Label><h5>Contact No</h5></Form.Label>        
						
						<Form.Control
						type='text' placeholder='91+' name='contact' onChange={e=>setContact(e.target.value)} value={contact}>
						</Form.Control>

						<Form.Group controlId='code'></Form.Group>
						<Form.Label><h5>Code</h5></Form.Label>

						<Form.Control
						type='text' placeholder='The code must be provided to all the admins' name='code' onChange={e=>setCode(e.target.value)} value={code}>
						</Form.Control>
						
					</Form>
					<hr className='md-3'/>

					{err?.length ? (<p>{err}</p>) : <></>}

					<Button variant='secondary' type='submit' onClick={onCreateSchoolClicked}>Create New School</Button>

				</FormContainer>
			</div>
		</div>
	
  )
}

export default NewSchool

