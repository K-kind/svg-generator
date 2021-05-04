import { Base } from '../base'

import { Desc } from '../descriptive/desc'
import { Metadata } from '../descriptive/metadata'
import { Title } from '../descriptive/title'

import { Animate } from '../animation/animate'
import { AnimateColor } from '../animation/animate-color'
import { AnimateMotion } from '../animation/animate-motion'
import { AnimateTransform } from '../animation/animate-transform'

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
  ConditionalProcessingAttributes,
  GraphicalEventAttributes,
  PresentationAttributes,
  XLinkAttributes,
  CommonStyleAttributes,
  ExternalResourceAttributes,
  TransformAttributes
} from '../../types/common-attributes'

type UseAttributes = CoreAttributes &
  ConditionalProcessingAttributes &
  GraphicalEventAttributes &
  PresentationAttributes &
  XLinkAttributes &
  CommonStyleAttributes &
  ExternalResourceAttributes &
  TransformAttributes & {
    x?: string
    y?: string
    width?: string
    height?: string
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

class Use extends Base<'use'> {
  constructor() {
    super('use')
  }

  public setAttributes(attrs: UseAttributes) {
    super.setAttributes(attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { Use, UseAttributes }
