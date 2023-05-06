import axios from 'axios'
import NavBar from '../../NavBar/NavBar'
import { FormContainer } from '../../Forms/FormContainer'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateSchool = () => {

    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [code, setCode] = useState('')
    const [err, setErr] = useState(null)

    const navigate = useNavigate()

    const handleSubmit = () => {
        axios.post('http://localhost:3500/schools', { name, contact, code })
            .then(response => {
                const reply = response.data.message
                console.log(reply)
                navigate('/school/assure', { state: { schoolName: name } })
            })
            .catch(error => {
                setErr(error.response.data.message)
                console.log(error)
            })
    }

    return (
        <div>
        <NavBar/>
        <div className='bagc'>
        <div className='justify-content-center'>

            <FormContainer><div className='form_head'>
                <h2>Enter the details</h2></div>
                <hr className='md-3'/>
                <Form method='POST'>
                    <Form.Group controlId='Name'></Form.Group>
                    <Form.Label><div className='subhead1'><h5>School/College Name</h5></div></Form.Label>  

                    <Form.Control
                    type='digit' placeholder='School/College Name' name='name' value={name}
                    onChange={e=>setName(e.target.value)}>
                    </Form.Control>

                    <Form.Group controlId='contact'></Form.Group>
                    <Form.Label><div className='subhead1'><h5>Contact No</h5></div></Form.Label>        
                    
                    <Form.Control
                    type='text' placeholder='' name='contact' onChange={e=>setContact(e.target.value)} value={contact}>
                    </Form.Control>

                    <Form.Group controlId='code'></Form.Group>
                    <Form.Label><div className='subhead1'><h5>Code</h5></div></Form.Label>

                    <Form.Control
                    type='text' placeholder='The code must be provided to all the admins' name='code' onChange={e=>setCode(e.target.value)} value={code}>
                    </Form.Control>
                    
                </Form>
                <hr className='md-3'/>

                {err?.length ? (<p>{err}</p>) : <></>}

                <Button variant='secondary' type='submit' onClick={handleSubmit}><div>Create New School</div></Button>

            </FormContainer>
            </div>
        </div>
    </div>


    )

}

export default CreateSchool
