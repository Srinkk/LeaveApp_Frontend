import axios from "axios"
import { useState,useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const ReceivedMail = ({ adminId }) => {

    const [mails, setMails] = useState(null)
    const [mailCount, setMailCount] = useState('')
    let _id = adminId
   
    useEffect(() => {
        axios.post("http://localhost:3500/mails/admins", { _id })
            .then(response => {
                const received_mails = response.data
                setMailCount(received_mails.length)
                setMails(received_mails)
                console.log(received_mails)
            })
            .catch(error=>{
                console.log(error)
            })
    }, [mailCount])

    const onAcceptClicked = (mail_id) => {
        
        const status = 'Granted'
        let _id = mail_id
        
        axios.patch("http://localhost:3500/mails/admins", { _id, status })
            .then(response => {
                console.log(_id, status)
                let data = response.data
                console.log(data.message)

                let received = [mails]
                setMails(received)
            })
            .catch(error => {
                console.log(error)
            });
    }  

    const onRejectClicked = (mail_id) => {
        let received = [mails]
        const status = 'Denied'
        let _id = mail_id
        
        setMails(received)

        axios.patch("http://localhost:3500/mails/admins", { _id, status })
            .then(response => { 
                let data = response.data
                console.log(data.message)
        })
            .catch(error => {
                console.log(error)
        });
           
    }    

    return (
        <div className='received'>
        
        {mails?(
            mails.map(mail=>(
            <div className='box'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Days</th>
                            <th>Sender</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={mail._id}>
                            <td>{mail.subject}</td>
                            <td>{mail.days}</td>
                            <td>{mail.sender}</td>
                        </tr>
                    </tbody>
                </Table>
                <div key={mail._id} className='row'>
                <p className='text_area'>{mail.body}</p>
                        <div className='buttons'>
                            <Button className='grant' variant='success' onClick={()=>onAcceptClicked(mail._id)}>Grant</Button>
                            <Button className='deny' variant='danger' onClick={()=>onRejectClicked(mail._id)}>Deny</Button>
                        </div>
                </div>

                </div>
                
            ))

        ):<p> No mails Found </p>}
        </div>
     

    )
        
    
}

export default ReceivedMail