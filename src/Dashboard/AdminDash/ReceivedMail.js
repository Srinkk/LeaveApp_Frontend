import axios from "axios"
import { useState,useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const ReceivedMail = ({ adminId }) => {

    const [mails, setMails] = useState(null)
    const [reload, setReload] = useState(false)
    let _id = adminId
   
    useEffect(() => {
        axios.post("http://localhost:3500/mails/admins", { _id })
            .then(response => {
                const received_mails = response.data
                setMails(received_mails)
            })
            .catch(error=>{
                console.log(error)
            })
    }, [reload])

    const onAcceptClicked = (mail_id) => {
        
        const status = 'Granted'
        let _id = mail_id
        
        axios.patch("http://localhost:3500/mails/admins", { _id, status })
            .then(response => {
                console.log(_id, status)
                let data = response.data
                console.log(data.message)
                setReload(!reload)
            })
            .catch(error => {
                console.log(error)
            });
    }  

    const onRejectClicked = (mail_id) => {
        const status = 'Denied'
        let _id = mail_id

        axios.patch("http://localhost:3500/mails/admins", { _id, status })
            .then(response => { 
                let data = response.data
                console.log(data.message)
                setReload(!reload)
        })
            .catch(error => {
                console.log(error)
        });
           
    }    

    return (
        <div className='received'>
            <h4><div className='mail_head'>Here's your pending applications to check</div></h4>
        
    
    {mails?.length ?(
        mails.map(mail=>(
        <div className='box'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className='t_head2'>Subject</th>
                        <th className='t_head2'>Days</th>
                        <th className='t_head2'>Sender</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={mail._id}>
                        <td><p className='t_cont2'>{mail.subject}</p></td>
                        <td><p className='t_cont2'>{mail.days}</p></td>
                        <td><p className='t_cont2'>{mail.senderName}</p></td>
                    </tr>
                </tbody>
            </Table>
            <div key={mail._id} className='row'>
            <p className='text_area'>{mail.body}</p>
                    <div className='buttons'>
                        <Button className='grant' variant='success' onClick={()=>onAcceptClicked(mail._id)}><div className='subhead1'>Grant</div></Button>
                        <Button className='deny' variant='danger' onClick={()=>onRejectClicked(mail._id)}>Deny</Button>
                    </div>
            </div>

            </div>
            
        ))

    ):<p><div className='no_mail'> No applications Found</div> </p>}
    </div>
   

    )
        
    
}

export default ReceivedMail
