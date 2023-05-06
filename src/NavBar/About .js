import NavBar from "./NavBar"
import image2 from "../images/groupic.jpg"

const About  = () => {
    return (
		<>
		<NavBar/>
		<div className='bg_about'>
	
	     <div className='section'>
			<div className='containers'>
				<div className='content-section'>
					<div class='title'>
			<h2><b>Manage Your Leaves Easily With Us!!</b></h2></div>
			<div className='content'>
			<p>LeaveApp is designed and developed to be a unique mail management system for leave of absence requests, specifically tailored for college professors.This system allows students to submit their requests electronically and provide professors with an intuitive interface for approving or denying requests.This system also provides a dashboard for professors to monitor the status of all leave of absence requests. This system is secure, accessible, and compliant with relevant institutional policies and regulations.
By creating such a system, we aim to help college professors streamline the leave of absence process, reduce administrative burden, improve accuracy and transparency, and enhance communication and collaboration between students and professors.</p>
<div className='new_text'><i><b><p>Your Adoption is Our Inspiration!!!</p></b></i></div>
<div className='button_learn'>
	<a href="">Learn more</a>
</div>



</div>

</div>

</div>

<img className='image-section' src={image2} alt="image2"/>
<div className='refer'>leaveappteam@2023.gmail|+918777777745</div>
</div>
</div>






		</>	
    )
}

export default About 
