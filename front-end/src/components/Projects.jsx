import github from "../icons/github.png"
import website from "../icons/website.png"

const Projects = () => {
  return (
    <>
    <div id='projects' className='grid w-full lg:col-span-2 space-y-[20px] mt-60'>
      <h1 className="text-3xl font-semibold">Projects</h1>
      <section className="p-3">
        <div className="flex gap-5">
          <h2 className="text-2xl">Tiki Taka</h2>
          <a href="https://github.com/mitch1625/tiki_taka" target="blank">
            <img style={{width:'30px', height:'30px'}} src={github}/>
          </a>
        </div>
        <div className="text-lg">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsam esse placeat, doloremque, in tenetur similique est animi rerum odio vel quas, dolorem iste eos earum vero iure enim quasi!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quis cupiditate, harum saepe minus voluptas sequi minima nam exercitationem vel necessitatibus tempora animi cumque dolorem fugit aut beatae, optio officia.</p>
        </div>
      </section>
      
      <section>
        <div className="p-3">
          <div className="flex gap-5">
            <h2 className="text-2xl">The Sacred Scrolls</h2>
            <a href="https://github.com/andrew-hagstrom/Sacred_Scrolls_Project" target="blank">
              <img style={{width:'30px', height:'30px'}} src={github}/>
            </a>
            <a href="https://sacredscrolls.org/" target="blank">
              <img style={{width:'30px', height:'30px'}} src={website}/>
            </a>
          </div>
            <div className="text-lg">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsam esse placeat, doloremque, in tenetur similique est animi rerum odio vel quas, dolorem iste eos earum vero iure enim quasi!</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quis cupiditate, harum saepe minus voluptas sequi minima nam exercitationem vel necessitatibus tempora animi cumque dolorem fugit aut beatae, optio officia.</p>
            </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Projects