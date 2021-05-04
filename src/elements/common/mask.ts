import { Base } from '../base'

import { Desc } from '../descriptive/desc'
import { Metadata } from '../descriptive/metadata'
import { Title } from '../descriptive/title'

import { Animate } from '../animation/animate'
import { AnimateColor } from '../animation/animate-color'
import { AnimateMotion } from '../animation/animate-motion'
import { AnimateTransform } from '../animation/animate-transform'

import { Circle } from '../shapes/circle'
import { Ellipse } from '../shapes/ellipse'
import { Line } from '../shapes/line'
import { Path } from '../shapes/path'
import { Polygon } from '../shapes/polygon'
import { Polyline } from '../shapes/polyline'
import { Rect } from '../shapes/rect'

import { SVG } from '../svg'
import { Defs } from '../structural/defs'
import { G } from '../structural/g'
import { SVGSymbol } from '../structural/symbol'
import { Use } from '../structural/use'

import { LinearGradient } from '../gradient/linear-gradient'
import { RadialGradient } from '../gradient/radial-gradient'

import { SVGText } from '../text/text'

import { Font } from '../font-face/font'
import { FontFace } from '../font-face/font-face'

import { SVGSet } from './set'
import { A } from './a'
import { ForeignObject } from './forign-object'
import { SVGImage } from './image'
import { Marker } from './marker'
import { Pattern } from './pattern'
import { Script } from './script'
import { SVGStyle } from './style'
import { Switch } from './switch'
import { View } from './view'

import {
  CoreAttributes,
  ConditionalProcessingAttributes,
  PresentationAttributes,
  CommonStyleAttributes,
  ExternalResourceAttributes
} from '../../types/common-attributes'

type MaskAttributes = CoreAttributes &
  ConditionalProcessingAttributes &
  PresentationAttributes &
  CommonStyleAttributes &
  ExternalResourceAttributes & {
    x?: string
    y?: string
    width?: string
    height?: string
    maskUnits?: string
    maskContentUnits?: string
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
  | SVGText
  | Font
  | FontFace
  | A
  | ForeignObject
  | SVGImage
  | Marker
  | Mask
  | Pattern
  | Script
  | SVGStyle
  | Switch
  | View

class Mask extends Base<'mask'> {
  constructor() {
    super('mask')
  }

  public setAttributes(attrs: MaskAttributes) {
    super.setAttributes(attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { Mask, MaskAttributes }
