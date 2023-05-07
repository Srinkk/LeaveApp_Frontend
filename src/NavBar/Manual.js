import NavBar from "./NavBar"
import image3 from "../images/compose_mail.png"
import image4 from "../images/admin sign up1.png"
import image5 from "../images/Admin sign up2.png"
import image6 from "../images/student signup.png"
import image7 from "../images/student sign in.png" 
import image8 from "../images/admin log in.png"
import image9 from "../images/admin dashboard.png"
import image10 from "../images/student dashboard.png"
import image11 from "../images/student dashboard after.png";


const Manual = () => {
    return (
    
        <>
            <NavBar/>
            <div className='bg_manual'>
          
                 <div>
                
                    
                    
                        <h2><b>Learn More About LeaveApp!!</b></h2>
                        <ol>
                        <p><br></br><div className='manualcontentext'>1) Should you choose to create your new institute and register the same, enter your <i><b>“Admin Id”, “Name” </b></i>and <i><b>“College Name” </b></i>both in capitals, a  8-20  alpha-numeric <i><b>“Password”</b></i>, and an<i><b> “Institution Code” </b></i>in the respective boxes. Once you’re done, click on<i><b> “SignUp”.</b></i></div></p>
                        <img className='image_manual' src={image4} alt="image4"/>
                        
                
                        <p><br></br><div className='manualcontentext'>2) Once you’re done filling in your institution details, enter your contact no. and your unique code to access the services.</div></p>
                    
                        <img className='image_manual' src={image5} alt="image5"/>
                        <p><br></br><div className='manualcontentext'>3) To create your new account on LeaveApp, enter your credentials in the respective boxes, and click on <i><b>“SignUP”.</b></i></div></p>
                        <img className='image_manual' src={image6} alt="image6"/>
                        <p><br></br><div className='manualcontentext'>4) If you’re an existing student user of LeaveApp, fill up your credentials in the student sign in page here in the respective boxes to get started.</div></p>
                        <img className='image_manual' src={image7} alt="image7"/>
                        <p><br></br><div className='manualcontentext'>5) If you’re an existing admin of LeaveApp, fill up your credentials in the admin log in page here in the respective boxes and get started.</div></p>
                        <img className='image_manual' src={image8} alt="image8"/>
                        <p><br></br><div className='manualcontentext'>6) Mention your subject, your respective department head, number of days you want to take a leave for and state your cause in the following boxes.</div></p>
                        <img className='image_manual' src={image3} alt="image3"/>
                        <p><br></br><div className='manualcontentext'>7) The admin dashboard is now present with the application just being composed. The application can be granted or denied by clicking on <i><b>“Grant” or “Deny”</b></i> </div></p>
                        <img className='image_manual' src={image9} alt="image9"/>
                        <p><br></br><div className='manualcontentext'>8) In the student dashboard, the application just sent is present in  <i><b>“Your Pending Applications”</b></i>table as it is not being responded by the concerned admin yet. The columns are clearly representing the components of your application i.e. <i><b> “Subject”</b></i>, their <i><b>“Status”</b></i>, the professor you <i><b>“Sent to”</b></i>. Should you wish to edit your context, click on <i><b>“Edit”</b></i>, and if you want to delete your mail from the Dashboard, click on <i><b>“Delete”</b></i>. Click on <i><b>“Compose New”</b></i> if you wish to create another new application. </div></p>
                        <img className='image_manual' src={image10} alt="image10"/>
                        <p><br></br><div className='manualcontentext'>9) Now after the admin responded to the application, it will shift from  <i><b>“Your Pending Applications”</b></i> to <i><b> “Your Past Applications”</b></i>, where the columns are <i><b> “Subject”</b></i>, their <i><b>“Status”</b></i>,(Granted or denied) the concerned admin you <i><b>“Concerned admin”</b></i>. Should you wish to delete your application, click on <i><b>“Delete”</b></i></div></p>
                        <img className='image_manual' src={image11} alt="image11"/>
                        

                    
                      </ol>  
                </div>
                </div>
               
                
                    
                    

            
        
            
        



        </>
    
    )
}

export default Manual
