import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/esm/Table';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const PastMail = ({ senderId }) => {
    const [mails, setMails] = useState(null);
    const [reload, setReload] = useState(false)

    useEffect(() => {
        axios.post('http://localhost:3500/mails/students/nonpending', { _id: senderId })
        .then(response => {
            const mailsData = response.data;
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
        <div className='bagc'>
        <div className='conatiner'>
        <h4><div className='mail_head'>Your Past Applications</div></h4>
         <div className='table-container'>
        <Table striped  hover >
            {mails?.length ? (
                <thead>
                    <tr>
                        <th className='t_head'>Subject</th>
                        <th className='t_head'>Status</th>
                        <th className='t_head'>Concerned Admin</th>
                        <th className='t_head'>Delete</th>
                    </tr>
                </thead>
            ) : <></>}
            
            {mails?.length ? (
                mails.map(mail => (
                    <tbody>
            
                        <tr key={mail._id}>
                            <td><p className='t_cont'>{mail.subject}</p></td>
                            <td><p className='t_cont'>{mail.status}</p></td>
                            <td><p className='t_cont'>{mail.receiverName}</p></td>
                            <td><DeleteMailButton mail_id={mail._id}/></td>
                        </tr>

                    </tbody>
            )) 
            ): (
                <h5 className='no_mail'>No applications found.</h5>
            )}
            </Table>
            </div> 
            
        </div>
        </div>
        
    );
};

export default PastMail
