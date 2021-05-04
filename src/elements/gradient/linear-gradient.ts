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

type LinearGradientAttributes = CoreAttributes &
  PresentationAttributes &
  XLinkAttributes &
  CommonStyleAttributes &
  ExternalResourceAttributes & {
    x1?: string
    y1?: string
    x2?: string
    y2?: string
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

class LinearGradient extends Base<'linearGradient'> {
  constructor() {
    super('linearGradient')
  }

  public setAttributes(attrs: LinearGradientAttributes) {
    super.setAttributes(attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { LinearGradient, LinearGradientAttributes }
