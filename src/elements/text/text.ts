import { Base } from '../base'

import { Desc } from '../descriptive/desc'
import { Metadata } from '../descriptive/metadata'
import { Title } from '../descriptive/title'

import { Animate } from '../animation/animate'
import { AnimateColor } from '../animation/animate-color'
import { AnimateMotion } from '../animation/animate-motion'
import { AnimateTransform } from '../animation/animate-transform'

import { SVGSet } from '../common/set'
import { A } from '../common/a'

import { AltGlyph } from './alt-glyph'
import { TextPath } from './text-path'
import { Tref } from './tref'
import { Tspan } from './tspan'

import {
  CoreAttributes,
  ConditionalProcessingAttributes,
  GraphicalEventAttributes,
  PresentationAttributes,
  CommonStyleAttributes,
  ExternalResourceAttributes,
  TransformAttributes
} from '../../types/common-attributes'

type SVGTextAttributes = CoreAttributes &
  ConditionalProcessingAttributes &
  GraphicalEventAttributes &
  PresentationAttributes &
  CommonStyleAttributes &
  ExternalResourceAttributes &
  TransformAttributes & {
    lengthAdjust?: string
    x?: string
    y?: string
    dx?: string
    dy?: string
    rotate?: string
    textLength?: string
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
  | A
  | AltGlyph
  | TextPath
  | Tref
  | Tspan

class SVGText extends Base<'text', SVGTextAttributes> {
  constructor(attrs?: SVGTextAttributes) {
    super('text', attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { SVGText, SVGTextAttributes }
