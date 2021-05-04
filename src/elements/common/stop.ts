import { Base } from '../base'

import { Animate } from '../animation/animate'
import { AnimateColor } from '../animation/animate-color'
import { SVGSet } from './set'

import {
  CoreAttributes,
  PresentationAttributes,
  CommonStyleAttributes
} from '../../types/common-attributes'

type StopAttributes = CoreAttributes &
  PresentationAttributes &
  CommonStyleAttributes & {
    offset?: string
  }

type ChildElement = Animate | AnimateColor | SVGSet

class Stop extends Base<'stop', StopAttributes> {
  constructor(attrs?: StopAttributes) {
    super('stop', attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { Stop, StopAttributes }
