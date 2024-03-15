const Experience = () => {
  return (
    <>
    <div id='experience' className='space-y-[20px] mt-60'>
    <h1 className="text-3xl font-semibold">Experience / Education</h1>
    <section className="p-3">
      <div>
        <div className="flex justify-between">
        <h2 className="text-2xl">Code Platoon</h2>
        <h2 className="lg:text-lg md:text-sm self-end">October 2023 - January 2024</h2>
        </div>
        <p className="text-lg">Full Stack Software Engineering bootcamp training in Javascript, Python, Django, Django-REST-framework, SQL, and PostgreSQL.</p>
      </div>
    </section>

    <section className="p-3">
      <div className="flex justify-between">
            <h2 className="text-2xl">Yonsei Korean Language Institute</h2>
            <h2 className="lg:text-lg md:text-sm self-end">March 2021 - February 2023</h2>
          </div>
          <p className="text-lg">2 year immersive Korean language program located at Yonsei University in Seoul, South Korea.</p>
    </section>

    <section className="p-3">
      <div>
        <div className="flex justify-between">
            <h2 className="text-2xl">United States Army</h2>
            <h2 className="lg:text-lg md:text-sm self-end">February 2015 - February 2021</h2>
          </div>
            <p className="text-lg">Provided medical care to Soldiers, retirees, and their families under the supervision of a physician or registered nurse.</p>
            <p className="text-lg">Texas State Board of Nursing - #331768</p>
      </div>
    </section>

    <section className="p-3">
      <div>
        <div className="flex justify-between">
            <h2 className="text-2xl">Florida State University</h2>
            <h2 className="lg:text-lg md:text-sm">August 2010 - May 2014</h2>
          </div>
            <p className="text-lg">{"Bachelor's of Science in Exercise Science"}</p>
      </div>
    </section>
    </div>
    </>
  )
}

export default Experience