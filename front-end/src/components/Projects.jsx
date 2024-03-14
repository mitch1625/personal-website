const Projects = () => {
  return (
    <>
    <div id='projects' className='space-y-[35px] mt-20 '>
      <h1 className="text-3xl">Projects</h1>
      <section className='project'>
        <div className="flex">
          <p className="" style={{backgroundColor:'black', width: '200px'}}></p>
          <div>
            <h2 className="text-xl font-semibold">Tiki Taka</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsam esse placeat, doloremque, in tenetur similique est animi rerum odio vel quas, dolorem iste eos earum vero iure enim quasi!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quis cupiditate, harum saepe minus voluptas sequi minima nam exercitationem vel necessitatibus tempora animi cumque dolorem fugit aut beatae, optio officia.</p>
          </div>
        </div>
      </section>
      
      <section style={{border:'red solid 2px'}}>
        <div style={{display:'flex'}}>
          <p style={{backgroundColor:'black', width: '200px'}}>faw</p>
          <div>
            <h2>The Sacred Scrolls</h2>
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