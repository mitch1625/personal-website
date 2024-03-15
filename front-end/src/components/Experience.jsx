const Experience = () => {
  return (
    <>
    <div id='experience' className='space-y-[20px] mt-60'>
    <h1 className="text-3xl">Experience / Education</h1>
    <section className="p-3" style={{border:'black solid 1px'}}>
      <div>
        <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Code Platoon - Student</h2>
        <h2 className="">October 2023 - January 2024</h2>
        </div>
        <p>Full Stack Software Engineering bootcamp training in Javascript, Python, Django, Django-REST-framework, SQL, and PostgreSQL.</p>
      </div>
    </section>

    <section className="p-3" style={{border:'black solid 1px'}}>
      <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Yonsei Korean Language Institute</h2>
            <h2>March 2021 - February 2023</h2>
          </div>
          <p>2 year immersive Korean language program located at Yonsei University in Seoul, South Korea.</p>
    </section>

    <section className="p-3" style={{border:'black solid 1px'}}>
      <div>
        <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Florida State University</h2>
            <h2>August 2010 - May 2014</h2>
          </div>
            <p>{"Bachelor's of Science in Exercise Science"}</p>
      </div>
    </section>
    </div>
    </>
  )
}

export default Experience