import { IconsGithub, IconsInstagram, IconsLinkedin, IconsPage, IconsTwitter } from "../assets/Icons"

export const SocialComponent = ({configTheme}) => {
  const socials = [
    {
      "id": 1,
      "social": "Instagram",
      "link": "https://www.instagram.com/chipredev",
      "component": <IconsInstagram isPrimary={configTheme} />
    },
    {
      "id": 2,
      "social": "Twitter",
      "link": "https://twitter.com/chipredev",
      "component": <IconsTwitter isPrimary={configTheme} />
    },
    {
      "id": 3,
      "social": "Github",
      "link": "https://github.com/achipre",
      "component": <IconsGithub isPrimary={configTheme} />
    },
    {
      "id": 4,
      "social": "Linkedin",
      "link": "https://www.linkedin.com/in/alexchipre",
      "component": <IconsLinkedin isPrimary={configTheme} />
    },
    {
      "id": 5,
      "social": "Blog",
      "link": "https://chipre.netlify.app",
      "component": <IconsPage isPrimary={configTheme} />
    }
  ]
  return (
    <>
    {socials.map(data => (
      <a key={data.id} href={data.link} target="_blank" rel="noopener noreferrer">
        {data.component}
      </a>
      ))}
    </>
    
  )
}
