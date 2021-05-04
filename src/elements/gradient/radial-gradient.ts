import { Base } from '../base'

import { Desc } from '../descriptive/desc'
import { Metadata } from '../descriptive/metadata'
import { Title } from '../descriptive/title'

import { Animate } from '../animation/animate'
import { AnimateTransform } from '../animation/animate-transform'
import { SVGSet } from '../common/set'
import { Stop } from '../common/stop'

import {
  CoreAttributes,
  PresentationAttributes,
  XLinkAttributes,
  CommonStyleAttributes,
  ExternalResourceAttributes
} from '../../types/common-attributes'

type RadialGradientAttributes = CoreAttributes &
  PresentationAttributes &
  XLinkAttributes &
  CommonStyleAttributes &
  ExternalResourceAttributes & {
    cx?: string
    cy?: string
    r?: string
    fx?: string
    fy?: string
    gradientUnits?: string
    gradientTransform?: string
    spreadMethod?: string
  }

type ChildElement =
  | Desc
  | Metadata
  | Title
  | Animate
  | AnimateTransform
  | SVGSet
  | Stop

class RadialGradient extends Base<'radialGradient', RadialGradientAttributes> {
  public tagName = 'radialGradient' as const

  constructor(attrs?: RadialGradientAttributes) {
    super('radialGradient', attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { RadialGradient, RadialGradientAttributes }
