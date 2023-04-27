import axios from 'axios';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Table from 'react-bootstrap/Table'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import DeleteMailButton from './DeleteMailButton';

import { Button } from 'react-bootstrap'

const PendingMail = ({ senderId, senderName }) => {
    const [mails, setMails] = useState(null)
    const [reload, setReload] = useState(false)

    const navigate = useNavigate()

    console.log(senderName, "from pending mail")

    useEffect(() => {
        axios.post('http://localhost:3500/mails/students/pending', { senderId })
        .then(response => {
            const mailsData = response.data
            setMails(mailsData);
        })
        .catch(error => {
            console.log(error);
        });
    }, [reload]);

    const DeleteMailButton = ({ mail_id }) => {

        console.log(mail_id)
        const handleDelete = () => {
            console.log(mail_id, "from handleDelete")

            axios.delete('http://localhost:3500/mails', { data: { _id: mail_id } })
                .then(response => {
                    const reply = response.data.message
                    console.log(reply)
                    setReload(!reload)
                })
                .catch(error => {
                    console.log(error)
                })
        }

        return (
            <Button variant='secondary' onClick={() => handleDelete()}><FontAwesomeIcon icon={ faTrash }/></Button>
        )
    }

    return (
        <div className='container'>
            <h4>Your Pending Applications</h4>
            <div className='table-container'>
            <Table striped bordered hover >
                
                {mails ? (
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Status</th>
                            <th>Sent to</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                ) : <></>}
                        
                {mails?(
                    mails.map(mail=>(
                        <tbody>
                                <tr key={mail._id}>
                                    <td>{mail.subject}</td>
                                    <td>{mail.status}</td>
                                    <td>{mail.receiverName}</td>
                                    <td ><Button variant='secondary' onClick={() => {navigate('/student/editmail', { state: { senderId: senderId, senderName: senderName, mail_id: mail._id } }) }}><FontAwesomeIcon icon={faPenToSquare}/></Button></td>
                                    <td ><DeleteMailButton  mail_id={mail._id}/></td>
                                                                            
                                </tr>
                        </tbody>
                        ))
                ) : <h5  className='no_mail'>No pending mails found</h5>}
            </Table>
            </div>

            
                
        </div>
    );
}

export default PendingMail