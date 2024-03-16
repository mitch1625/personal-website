import github from "../icons/github.png"
import website from "../icons/website.png"

const Projects = () => {
  return (
    <>
    <div id='projects' className='grid w-full lg:col-span-2 space-y-[20px] mt-60'>
      <h1 className="text-5xl font-bold">Projects</h1>
      <section className="p-3">
        <div className="flex gap-5">
          <h2 className="text-4xl font-semibold">Tiki Taka</h2>
          <a href="https://github.com/mitch1625/tiki_taka" target="blank">
            <img style={{width:'30px', height:'30px'}} src={github}/>
          </a>
        </div>
        <div className="text-xl">
          <p>{"Full stack language learning / social media web application. User's display feed is from other members whose native language targets the useer's target learning language."}</p>
          <p className="italic">Built with React.js, JavaScript, Python, Django, and PostgreSQL</p>
        </div>
      </section>
      
      <section>
        <div className="p-3">
          <div className="flex gap-5">
            <h2 className="text-4xl font-semibold">The Sacred Scrolls</h2>
            <a href="https://github.com/andrew-hagstrom/Sacred_Scrolls_Project" target="blank">
              <img style={{width:'30px', height:'30px'}} src={github}/>
            </a>
            <a href="https://sacredscrolls.org/" target="blank">
              <img style={{width:'30px', height:'30px'}} src={website}/>
            </a>
          </div>
            <div className="text-xl">
              <p>{"Web application that allows users to explore the similarities and differences between the Bible, Quaran, and  Bhagavad Gita."}</p>
              <p className="italic">Built with React.js, JavaScript, Python, Django, and PostgreSQL</p>
            </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Projects