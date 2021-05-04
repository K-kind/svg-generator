import { Base } from '../base'

import { Desc } from '../descriptive/desc'
import { Metadata } from '../descriptive/metadata'
import { Title } from '../descriptive/title'

import { Animate } from '../animation/animate'
import { AnimateColor } from '../animation/animate-color'
import { AnimateMotion } from '../animation/animate-motion'
import { AnimateTransform } from '../animation/animate-transform'
import { SVGSet } from '../common/set'

import {
  CoreAttributes,
  ConditionalProcessingAttributes,
  GraphicalEventAttributes,
  PresentationAttributes,
  CommonStyleAttributes,
  ExternalResourceAttributes,
  TransformAttributes
} from '../../types/common-attributes'

type RectAttributes = CoreAttributes &
  ConditionalProcessingAttributes &
  GraphicalEventAttributes &
  PresentationAttributes &
  CommonStyleAttributes &
  ExternalResourceAttributes &
  TransformAttributes & {
    x?: string
    y?: string
    width?: string
    height?: string
    viewBox?: string
    preserveAspectRatio?: string
    zoomAndPan?: string
    version?: string
    baseProfile?: string
    contentScriptType?: string
    contentStyleType?: string
  }

type ChildElement =
  | Desc
  | Metadata
  | Title
  | Animate
  | AnimateColor
  | AnimateMotion
  | AnimateTransform
  | SVGSet

class Rect extends Base<'rect', RectAttributes> {
  public tagName = 'rect' as const

  constructor(attrs?: RectAttributes) {
    super('rect', attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { Rect, RectAttributes }
