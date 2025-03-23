'use client'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <main className="font-outfit">
      <section className="bg-white border-transparent">
        <div className="container mx-auto px-6 md:px-10 md:py-[107px] lg:px-20 relative min-h-screen flex items-center bg-white">
          <div className="z-10 items-center gap-6 w-full">
            <div className="text-center">
              <h1 className="md:text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                Tilak Raj Bhandari
              </h1>
              <h2 className="md:text-white text-xl md:text-3xl lg:text-4xl">
                Visionary, Leader, Lawyer
              </h2>
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <Image
            src="/tilak-back.jpg"
            alt="about page image"
            fill
            objectFit="cover"
            className="z-0 h-screen opacity-15 md:opacity-100"
          />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-secondary via-secondary to-transparent via-50% to-100% opacity-50"></div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-6 md:px-10 lg:px-20 py-16 bg-white">
          <div className="lg:flex gap-6">
            <Image
              src="/tilak-1.jpg"
              alt="about pic"
              width={300}
              height={300}
              className="block lg:hidden lg:1/4 mx-auto pb-4 object-contain"
            />
            <div className="lg:w-3/4 md:text-lg text-justify">
              <p>
                Tilak Raj Bhandari, a committed communist leader, emerged from
                humble beginnings in a farming family to become a central
                committee member of the Nepal Communist Party (Maoist Centre).
                His political journey began after completing his School Leaving
                Certificate in 1999 (2056), when he immersed himself in
                communist ideology and underground politics. Initially active in
                student politics through the All Nepal National Independent
                Students’ Union (Revolutionary), he held key roles, including
                central vice president, before transitioning to party politics
                in 2021 (2078). Bhandari’s dedication to political activism is
                rooted in his belief that politics should serve as a selfless
                tool for societal transformation, a principle that has guided
                his influential role in the party.
              </p>
              <br />
              <p className="hidden xl:block">
                Despite financial struggles, Bhandari’s determination to pursue
                education never wavered. From a young age, he worked as a
                laborer, carrying sand and gravel to fund his schooling. At 11,
                after his 7th-grade exams in 1996 (2053), he labored in road
                construction in Bajhang’s Chainpur, and in 1997 (2054), he
                worked in Solan, Himachal Pradesh, India, to support his studies
                after 8th grade. His resilience allowed him to continue his
                education while engaging in political activities, eventually
                earning a Bachelor’s degree, a Master’s in political science
                from Tribhuvan University, and an LLB from Nepal Law Campus,
                establishing himself as a lawyer.
              </p>
            </div>
            <Image
              src="/tilak-1.jpg"
              alt="about pic"
              width={300}
              height={300}
              className="hidden lg:block lg:1/4 object-contain"
            />
          </div>
          <div className="pt-4 md:text-lg text-justify">
            <p className="block xl:hidden">
              Despite financial struggles, Bhandari’s determination to pursue
              education never wavered. From a young age, he worked as a laborer,
              carrying sand and gravel to fund his schooling. At 11, after his
              7th-grade exams in 1996 (2053), he labored in road construction in
              Bajhang’s Chainpur, and in 1997 (2054), he worked in Solan,
              Himachal Pradesh, India, to support his studies after 8th grade.
              His resilience allowed him to continue his education while
              engaging in political activities, eventually earning a Bachelor’s
              degree, a Master’s in political science from Tribhuvan University,
              and an LLB from Nepal Law Campus, establishing himself as a
              lawyer.
            </p>
            <p>
              In 1998 (2055), while studying at Shiv Jan Mavi in Shrinagar,
              Salyan, Bhandari began to closely study Nepal’s political
              landscape. Alongside his studies, he became involved in the
              underground political movement led by the Communist Party of Nepal
              (Maoist) and participated in the decade long People’s War. After
              passing his SLC in 1999 (2056), Bhandari fully committed to
              underground politics while also continuing his education. He
              completed his 12th grade during the First Peace Talks in 2001
              (2058) and again during the second peace talks in 2003 (2060).
              Following the People’s Movement of 2005 (2062/063) and the
              establishment of a republic, Bhandari completed his Bachelor’s
              degree, followed by a Master’s degree in political science from
              Tribhuvan University and an LLB from Nepal Law Campus, ultimately
              becoming a lawyer. <br />
              <br />A dedicated communist with a strong sense of ideology based
              class solidarity, Bhandari is widely respected for his political
              clarity, ethical integrity, and exceptional organizational skills.
              He views politics as an avenue for selfless service and believes
              it provides an invaluable opportunity to understand and transform
              society. His involvement in the underground People’s War was
              driven by a desire to help craft a constitution and establish a
              republic in Nepal. Bhandari regards the establishment of a federal
              democratic republic and the adoption of the constitution through
              an elected constituent assembly as significant achievements. He
              also believes that the scope of democratic politics in the country
              has expanded, and it is now imperative for the new generation,
              equipped with clear political backgrounds, skills, and technical
              expertise, to step into leadership roles. He stresses the need for
              dynamic, skilled, and technically capable leadership to address
              the rapid societal changes brought about by advancements in
              information technology, which have created multi-dimensional
              challenges for individuals, society, and politics. <br />
              <br />
              In addition to his political work, Bhandari is a strong proponent
              of education and hard work. He dedicates his time not only to
              communist politics and social service but also to promoting
              self-reliance and the development of entrepreneurial ventures. He
              operates Everest Associates, a corporate law firm, and leads
              Research for Nepal, a research institute. Bhandari also gained
              experience as a public relations advisor at the Ministry of
              Energy, Water Resources, and Irrigation of the Government of
              Nepal, from 5th August, 2023 to 13th September, 2024 (31st Shrawan
              2080 to 28th Bhadra 2081) which he considers a valuable internship
              experience. <br />
              <br />
              Despite his prominence as a political leader, Bhandari lives a
              simple and transparent life, which has earned him widespread
            </p>
          </div>
          {/* <div className="mt-20 lg:flex text-center">
            <div className="lg:w-1/2 md:px-20 pb-8 lg:pb-0">
              <h3 className="font-medium text-3xl md:text-4xl">Mission</h3>
              <p className="text-justify md:text-lg"></p>
            </div>
            <div className="border-2 border-secondary" />
            <div className="lg:w-1/2 md:px-20 pt-8 lg:pt-0">
              <h3 className="font-medium text-3xl md:text-4xl">Vision</h3>
              <p className="text-justify md:text-lg"></p>
            </div>
          </div> */}
        </div>
      </section>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-secondary text-white p-2 rounded-full hover:bg-tertiary transition duration-300 shadow-md z-50 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity duration-300`}
        aria-label="Scroll to top"
      >
        <Image
          src="/up-arrow.svg"
          alt="Scroll to top"
          width={24}
          height={24}
          className="w-6 h-6 filter invert"
        />
      </button>
    </main>
  )
}

export default About
