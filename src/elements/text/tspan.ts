import { Base } from '../base'

import { Desc } from '../descriptive/desc'
import { Metadata } from '../descriptive/metadata'
import { Title } from '../descriptive/title'

import { Animate } from '../animation/animate'
import { AnimateColor } from '../animation/animate-color'

import { SVGSet } from '../common/set'
import { A } from '../common/a'

import { AltGlyph } from './alt-glyph'
import { Tref } from './tref'

import {
  CoreAttributes,
  ConditionalProcessingAttributes,
  GraphicalEventAttributes,
  PresentationAttributes,
  CommonStyleAttributes,
  ExternalResourceAttributes
} from '../../types/common-attributes'

type TspanAttributes = CoreAttributes &
  ConditionalProcessingAttributes &
  GraphicalEventAttributes &
  PresentationAttributes &
  CommonStyleAttributes &
  ExternalResourceAttributes & {
    x?: string
    y?: string
    dx?: string
    dy?: string
    rotate?: string
    textLength?: string
    lengthAdjust?: string
  }

type ChildElement =
  | Desc
  | Metadata
  | Title
  | Animate
  | AnimateColor
  | SVGSet
  | A
  | AltGlyph
  | Tref
  | Tspan

class Tspan extends Base<'tspan', TspanAttributes> {
  constructor(attrs: TspanAttributes) {
    super('tspan', attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { Tspan, TspanAttributes }
