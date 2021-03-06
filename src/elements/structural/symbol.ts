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
import { Defs } from './defs'
import { G } from './g'
import { Use } from './use'

import { LinearGradient } from '../gradient/linear-gradient'
import { RadialGradient } from '../gradient/radial-gradient'

import { SVGText } from '../text/text'

import { Font } from '../font-face/font'
import { FontFace } from '../font-face/font-face'

import { SVGSet } from '../common/set'
import { A } from '../common/a'
import { ForeignObject } from '../common/forign-object'
import { SVGImage } from '../common/image'
import { Marker } from '../common/marker'
import { Mask } from '../common/mask'
import { Pattern } from '../common/pattern'
import { Script } from '../common/script'
import { SVGStyle } from '../common/style'
import { Switch } from '../common/switch'
import { View } from '../common/view'

import {
  CoreAttributes,
  GraphicalEventAttributes,
  PresentationAttributes,
  CommonStyleAttributes,
  ExternalResourceAttributes
} from '../../types/common-attributes'

type SVGSymbolAttributes = CoreAttributes &
  GraphicalEventAttributes &
  PresentationAttributes &
  CommonStyleAttributes &
  ExternalResourceAttributes & {
    preserveAspectRatio?: string
    viewBox?: string
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

class SVGSymbol extends Base<'symbol', SVGSymbolAttributes> {
  public tagName = 'symbol' as const

  constructor(attrs?: SVGSymbolAttributes) {
    super('symbol', attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { SVGSymbol, SVGSymbolAttributes }
