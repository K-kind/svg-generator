import { Base } from '../base'

import { Desc } from '../descriptive/desc'
import { Metadata } from '../descriptive/metadata'
import { Title } from '../descriptive/title'

import { FontFace } from './font-face'

import {
  CoreAttributes,
  PresentationAttributes,
  CommonStyleAttributes,
  ExternalResourceAttributes
} from '../../types/common-attributes'

type FontAttributes = CoreAttributes &
  PresentationAttributes &
  CommonStyleAttributes &
  ExternalResourceAttributes & {
    'horiz-origin-x'?: string
    'horiz-origin-y'?: string
    'horiz-adv-x'?: string
    'vert-origin-x'?: string
    'vert-origin-y'?: string
    'vert-adv-y'?: string
  }

type ChildElement = Desc | Metadata | Title | FontFace

class Font extends Base<'font', FontAttributes> {
  constructor(attrs?: FontAttributes) {
    super('font', attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { Font, FontAttributes }
