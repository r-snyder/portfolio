import { IconMatch } from "~/components/libs/icon"
import { AnchorText } from "~/components/ui/anchor-text"
import { ButtonAnchor } from "~/components/ui/button-anchor"
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

export function ContentIntro() {
  useEffect(() => {
    AOS.init({ duration: 1000 }) // Initialize AOS with a 1 second duration for animations
  }, [])

  return (
    <div className="space-y-10">
      <header className="space-y-10 text-pretty">
        <h1
          id="intro"
          className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text font-display tracking-tight text-transparent"
        >
          Ryan Snyder's Resume
        </h1>
        <h2>Software Engineer | Data Scientist | Chess Enthusiast</h2>

        <div className="flex flex-wrap gap-4">
          <ButtonAnchor size="lg" variant="default" href="https://github.com/r-snyder">
            <IconMatch icon="github" className="size-5" />
            <span>GitHub Profile</span>
          </ButtonAnchor>
          <ButtonAnchor size="lg" variant="secondary" href="https://www.linkedin.com/in/ryansnyder">
            <IconMatch icon="linkedin" className="size-5" />
            <span>LinkedIn Profile</span>
          </ButtonAnchor>
        </div>
      </header>

      <div className="prose-config">
        <p data-aos="fade-up">
          I am a software engineer with a passion for developing innovative solutions and working on exciting projects. With experience in machine learning, web development, and ethical hacking, I strive to leverage my skills to create impactful software.
        </p>

        <p data-aos="fade-up" data-aos-delay="200">
          My expertise includes working with technologies such as Remix, React, Tailwind CSS, and Prisma ORM. I am always eager to learn new technologies and contribute to collaborative projects.
        </p>

        <p data-aos="fade-up" data-aos-delay="400">
          Here are some highlights of my work and skills:
        </p>

        <ul data-aos="fade-up" data-aos-delay="600">
          <li>
            <strong>GitHub:</strong> <AnchorText href="https://github.com/r-snyder">github.com/r-snyder</AnchorText>
          </li>
          <li>
            <strong>Portfolio:</strong> <AnchorText href="https://ryansnyder.dev">ryansnyder.dev</AnchorText>
          </li>
          <li>
            <strong>LinkedIn:</strong> <AnchorText href="https://www.linkedin.com/in/ryansnyder">linkedin.com/in/ryansnyder</AnchorText>
          </li>
        </ul>

        <p data-aos="fade-up" data-aos-delay="800">
          Feel free to reach out to me for any opportunities or collaborations. I am excited about the future and look forward to connecting with like-minded professionals.
        </p>
      </div>
    </div>
  )
}
