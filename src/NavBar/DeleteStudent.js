import axios from 'axios'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import { FormContainer } from '../Forms/FormContainer'
import { Form } from 'react-bootstrap'
import NavBarDashBoard from './NavBarDashboard'

const DeleteStudent = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [password, setPassword] = useState('')
    const [err, setErr] = useState(null)

    const { _id } = location.state || {}

    // console.log(_id)

    const handleDelete = (e) => {
        e.preventDefault()

        console.log(_id)

        axios.delete("http://localhost:3500/students", { data: { _id: _id, password: password } })
            .then(response => {
                
                const name = response.data.name
                navigate('/deleted', { state: { name: name } })
                
            })
            .catch(error => {
                setErr(error.response.data.message)
                console.log(error)
            })
    }

    return (
        <div>
        <div className='bagc'>
        <NavBarDashBoard
            student_id={_id}
            admin_id=''
        />
        <FormContainer>
            <div className='form_head'>
            <Form.Group controlId="inst_name">
                <Form.Label><h4>Please Enter Your Password</h4></Form.Label>
                <Form.Control
                    type='password'
                    name="password"
                    placeholder='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </Form.Group>

            {err?.length ? (<p>{err}</p>) : <></>}	

            <Button className='confirm_pw' onClick={handleDelete}>Confirm Password</Button>
            </div>
        </FormContainer>
        </div>
    </div>
    )
}

export default DeleteStudent
