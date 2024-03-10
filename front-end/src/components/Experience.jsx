const Experience = () => {
  return (
    <>
    <h1>Experience / Education</h1>
    <section className="experience" style={{border:'black solid 1px'}}>
    <div style={{display:'flex'}}>
        <div>
          <h2>Code Platoon - Student</h2>
          <h2>October 2023 - January 2024</h2>
          <p>Full Stack Software Engineering bootcamp training in Javascript, Python, Django, Django-REST-framework, SQL, and PostgreSQL.</p>
        </div>
    </div>
    </section>

    <section className="experience" style={{border:'black solid 1px'}}>
    <div style={{display:'flex'}}>
        <div>
          <h2>Yonsei Korean Language Institute</h2>
          <h2>March 2021 - February 2023</h2>
          <p>2 year immersive Korean language program located at Yonsei University in Seoul, South Korea.</p>
        </div>
    </div>
    </section>
    </>
  )
}

export default Experience