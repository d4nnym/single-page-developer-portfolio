import { ReactComponent as SvgGithub } from '../assets/images/icon-github.svg';
import {ReactComponent as SvgLinkedin} from '../assets/images/icon-linkedin.svg';
import {ReactComponent as SvgTwitter }from '../assets/images/icon-twitter.svg';
import {ReactComponent as SvgFrontendMentor} from '../assets/images/icon-frontend-mentor.svg';
import {ReactComponent as SvgPatterCircle} from '../assets/images/pattern-circle.svg';
import {ReactComponent as SvgPatterRing} from '../assets/images/pattern-rings.svg';
import imgProfileDesktop from '../assets/images/image-profile-desktop.webp';
import imgProject1Large from '../assets/images/thumbnail-project-1-large.webp';
import imgProject1Small from '../assets/images/thumbnail-project-1-small.webp';
import imgProject2Large from '../assets/images/thumbnail-project-2-large.webp';
import imgProject2Small from '../assets/images/thumbnail-project-2-small.webp';
import imgProject3Large from '../assets/images/thumbnail-project-3-large.webp';
import imgProject3Small from '../assets/images/thumbnail-project-3-small.webp';
import imgProject4Large from '../assets/images/thumbnail-project-4-large.webp';
import imgProject4Small from '../assets/images/thumbnail-project-4-small.webp';
import imgProject5Large from '../assets/images/thumbnail-project-5-large.webp';
import imgProject5Small from '../assets/images/thumbnail-project-5-small.webp';
import imgProject6Large from '../assets/images/thumbnail-project-6-large.webp';
import imgProject6Small from '../assets/images/thumbnail-project-6-small.webp';

export const websites = [
  {
    name:"github",
    SvgComponent:SvgGithub,
    title:"to Adam's Github",
    href:"#"
  }, 
  {
    name:"linkedin",
    SvgComponent:SvgLinkedin,
    title:"to Adam's Linkedin",
    href:"#"
  },
  {
    name:"twitter",
    SvgComponent:SvgTwitter,
    title:"to Adam's Twitter",
    href:"#"
  },
  {
    name:"frontendMentor",
    SvgComponent:SvgFrontendMentor,
    title:"to Adam's Frontend Mentor",
    href:"#"
  }

]

export const svgPatternCircle = {
  name: "Pattern Circle",
  SvgComponent: SvgPatterCircle,
  title: "Pattern Circle",
}

export const svgPatternRing = {
  name: "Pattern Ring",
  SvgComponent: SvgPatterRing,
  title: "Pattern Ring",
}


export const projectImages = [
  {
    id: "1",
    name: "Design Portafolio",
    tools: ["HTML", "CSS"],
    page:{
      content: "View Project",
      href: "/#" 
    },
    code:{
      content: "View Code",
      href: "/#" 
    },
    srcLarge: imgProject1Large,
    srcSmall: imgProject1Small,
    title: "Design Portafolio",
    alt: "Design Portafolio",

  },
  {
    id: "2",
    name: "E-Learning Landing Page",
    tools: ["HTML", "CSS"],
    page:{
      content: "View Project",
      href: "/#"
    },
    code:{
      content: "View Code",
      href: "/#"
    },
    srcLarge: imgProject2Large,
    srcSmall: imgProject2Small,
    title: "E-Learning Landing Page",
    alt: "E-Learning Landing Page",
  },
  {
    id: "3",
    name: "Todo Web App",
    tools: ["HTML", "CSS", "Javascript"],
    page:{
      content: "View Project",
      href: "/#"
    },
    code:{
      content: "View Code",
      href: "/#"
    },
    srcLarge: imgProject3Large,
    srcSmall: imgProject3Small,
    title: "Todo Web App",
    alt: "Todo Web App",
  },
  {
    id: "4",
    name: "Entertainment Web App",
    tools: ["HTML", "CSS", "Javascript"],
    page:{
      content: "View Project",
      href: "/#"
    },
    code:{
      content: "View Code",
      href: "/#"
    },
    srcLarge: imgProject4Large,
    srcSmall: imgProject4Small,
    title: "Entertainment Web App",
    alt: "Entertainment Web App",
  },
  {
    id: "5",
    name: "Memory Game",
    tools: ["HTML", "CSS", "Javascript"],
    page:{
      content: "View Project",
      href: "/#"
    },
    code:{
      content: "View Code",
      href: "/#"
    },
    srcLarge: imgProject5Large,
    srcSmall: imgProject5Small,
    title: "Memory Game",
    alt: "Memory Game",
  },
  {
    id: "6",
    name: "Art Gallery Showcase",
    tools: ["HTML", "CSS", "Javascript"],
    page:{
      content: "View Project",
      href: "/#"
    },
    code:{
      content: "View Code",
      href: "/#"
    },
    srcLarge: imgProject6Large,
    srcSmall: imgProject6Small,
    title: "Art Gallery Showcase",
    alt: "Art Gallery Showcase",
  }
]

export const imgProfile ={
  desktop: {
    name: "Image Profile Desktop",
    src: imgProfileDesktop,
    title: "to Adam's Image Profile Desktop",
    alt: "Adam's Image Profile Desktop",
  }
} 

