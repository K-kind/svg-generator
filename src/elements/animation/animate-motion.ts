import { Base } from '../base'
import { Desc } from '../descriptive/desc'
import { Metadata } from '../descriptive/metadata'
import { Title } from '../descriptive/title'
import { MPath } from './mpath'
import {
  ConditionalProcessingAttributes,
  CoreAttributes,
  XLinkAttributes,
  AnimationEventAttributes,
  AnimationTimingAttributes,
  AnimationValueAttributes,
  AnimationAdditionAttributes,
  ExternalResourceAttributes
} from '../../types/common-attributes'

type AnimateMotionAttributes = ConditionalProcessingAttributes &
  CoreAttributes &
  XLinkAttributes &
  AnimationEventAttributes &
  AnimationTimingAttributes &
  AnimationValueAttributes &
  AnimationAdditionAttributes &
  ExternalResourceAttributes & {
    path?: string
    keyPoints?: string
    rotate?: string
    origin?: string
  }

type ChildElement = Desc | Metadata | Title | MPath

class AnimateMotion extends Base<'animateMotion'> {
  constructor() {
    super('animateMotion')
  }

  public setAttributes(attrs: AnimateMotionAttributes) {
    super.setAttributes(attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { AnimateMotion, AnimateMotionAttributes }
