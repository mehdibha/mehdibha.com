import { INavItem } from "./nav"
import { IPortfolio } from "./portfolio"

export interface ILinks {
  github: string
  linkedin: string
  twitter: string
  mail: string
  codepen: string
}

export interface ISiteConfig {
  name: string
  description: string
  nav: INavItem[]
  links: ILinks
  portfolio: IPortfolio
}
