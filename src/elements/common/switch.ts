import { Base } from '../base'

import { Desc } from '../descriptive/desc'
import { Metadata } from '../descriptive/metadata'
import { Title } from '../descriptive/title'

import { Animate } from '../animation/animate'
import { AnimateColor } from '../animation/animate-color'
import { AnimateMotion } from '../animation/animate-motion'
import { AnimateTransform } from '../animation/animate-transform'
import { SVGSet } from './set'

import { Circle } from '../shapes/circle'
import { Ellipse } from '../shapes/ellipse'
import { Line } from '../shapes/line'
import { Path } from '../shapes/path'
import { Polygon } from '../shapes/polygon'
import { Polyline } from '../shapes/polyline'
import { Rect } from '../shapes/rect'

import { SVG } from '../svg'
import { G } from '../structural/g'
import { Use } from '../structural/use'

import { A } from './a'
import { ForeignObject } from './forign-object'
import { SVGImage } from './image'

import { SVGText } from '../text/text'

import {
  CoreAttributes,
  ConditionalProcessingAttributes,
  GraphicalEventAttributes,
  PresentationAttributes,
  XLinkAttributes,
  CommonStyleAttributes,
  ExternalResourceAttributes,
  TransformAttributes
} from '../../types/common-attributes'

type SwitchAttributes = CoreAttributes &
  ConditionalProcessingAttributes &
  GraphicalEventAttributes &
  PresentationAttributes &
  XLinkAttributes &
  CommonStyleAttributes &
  ExternalResourceAttributes &
  TransformAttributes & {
    target?: string
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
  | Circle
  | Ellipse
  | Line
  | Path
  | Polygon
  | Polyline
  | Rect
  | A
  | G
  | SVG
  | Use
  | ForeignObject
  | SVGImage
  | SVGText
  | Switch

class Switch extends Base<'switch', SwitchAttributes> {
  constructor(attrs: SwitchAttributes) {
    super('switch', attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { Switch, SwitchAttributes }
