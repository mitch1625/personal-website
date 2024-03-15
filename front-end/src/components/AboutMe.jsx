import github from "../icons/github.png"
import email from "../icons/email.png"
import linkedin from "../icons/linkedin.png"

const AboutMe = () => {
    return (
			<>
				<div id='aboutme' className="gap-[15px]">
          <div className="col-span-2"> 
            <h1 className="text-4xl">Hello.</h1>
            <h1 className="text-4xl">My name is Eric Mitchell.</h1>
          </div>
          <div className="p-3 text-lg">
            <p>I spent six years in the Army working as a Licensed Practical Nurse. After finishing my contract, I wanted to spend some time aboard and study Korean in South Korea. I came back to the United States in 2023 to pursue a career in software development.</p>
            <p>{"I'm actively seeking new opportunities for work. Feel free to connect with me."}</p>
          </div>
          <div className="flex">
            <img style={{width:'40px', height:'40px'}} src={github}/>
            <img style={{width:'40px', height:'40px'}} src={email}/>
            <img style={{width:'40px', height:'40px'}} src={linkedin}/>
          </div>
        </div>
			</>
    )
}

export default AboutMe