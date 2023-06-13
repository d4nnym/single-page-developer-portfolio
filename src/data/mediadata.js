import { ReactComponent as SvgGithub } from '../assets/images/icon-github.svg';
import {ReactComponent as SvgLinkedin} from '../assets/images/icon-linkedin.svg';
import {ReactComponent as SvgTwitter }from '../assets/images/icon-twitter.svg';
import {ReactComponent as SvgFrontendMentor} from '../assets/images/icon-frontend-mentor.svg';
import imgProfileDesktop from '../assets/images/image-profile-desktop.webp';

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

export const projects = [
  {
    name: "Image Profile Desktop",
    src: imgProfileDesktop,
    title: "to Adam's Image Profile Desktop",
    alt: "Adam's Image Profile Desktop",
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

