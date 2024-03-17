import github from "../icons/github.png"
import email from "../icons/email.png"
import linkedin from "../icons/linkedin.png"

const AboutMe = () => {
    return (
			<>
				<div id='aboutme' className="gap-[15px]">
          <div className="col-span-2"> 
            <h1 className="text-9xl -mx-1.5">Hello</h1>
            <h1 className="text-6xl">My name is Eric Mitchell.</h1>
          </div>
          <div className="p-3 text-xl">
            <p>I spent six years in the Army working as a licensed practical nurse. After finishing my contract, I wanted to spend some time aboard and decided to study Korean in South Korea for two years. I came back to the United States in 2023 to pursue a career in software development.</p>
            <p>{"Currently I'm learning Typescript."}</p>
            <p>{"I'm actively seeking new opportunities for work. Feel free to connect with me."}</p>
          </div>
          <div className="flex justify-end gap-3">
            <a href="https://www.github.com/mitch1625" target="blank">
              <img style={{width:'30px', height:'30px'}} src={github}/>
            </a>
            <a href="https://www.linkedin.com/in/ericmitchell1625/" target="blank">
              <img style={{width:'30px', height:'30px'}} src={linkedin}/>
            </a>
            <a href="mailto:ericmitchell16255@gmail.com">
              <img style={{width:'30px', height:'30px'}} src={email}/>
            </a>
          </div>
        </div>
			</>
    )
}

export default AboutMe