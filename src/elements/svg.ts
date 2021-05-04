import { Base } from './base'

import { Desc } from './descriptive/desc'
import { Metadata } from './descriptive/metadata'
import { Title } from './descriptive/title'

import { Animate } from './animation/animate'
import { AnimateColor } from './animation/animate-color'
import { AnimateMotion } from './animation/animate-motion'
import { AnimateTransform } from './animation/animate-transform'

import { Circle } from './shapes/circle'
import { Ellipse } from './shapes/ellipse'
import { Line } from './shapes/line'
import { Path } from './shapes/path'
import { Polygon } from './shapes/polygon'
import { Polyline } from './shapes/polyline'
import { Rect } from './shapes/rect'

import { Defs } from './structural/defs'
import { G } from './structural/g'
import { SVGSymbol } from './structural/symbol'
import { Use } from './structural/use'

import { LinearGradient } from './gradient/linear-gradient'
import { RadialGradient } from './gradient/radial-gradient'

import { SVGSet } from './common/set'

import {
  CoreAttributes,
  ConditionalProcessingAttributes,
  GraphicalEventAttributes,
  PresentationAttributes,
  CommonStyleAttributes,
  ExternalResourceAttributes,
  DocumentEventAttributes
} from '../types/common-attributes'

type SVGAttributes = CoreAttributes &
  ConditionalProcessingAttributes &
  GraphicalEventAttributes &
  PresentationAttributes &
  CommonStyleAttributes &
  ExternalResourceAttributes &
  DocumentEventAttributes & {
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
  | Circle
  | Ellipse
  | Line
  | Path
  | Polygon
  | Polyline
  | Rect
  | Defs
  | G
  | SVG
  | SVGSymbol
  | Use
  | LinearGradient
  | RadialGradient

class SVG extends Base<'svg', SVGAttributes> {
  constructor(attrs?: SVGAttributes) {
    super('svg', attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { SVG, SVGAttributes }
