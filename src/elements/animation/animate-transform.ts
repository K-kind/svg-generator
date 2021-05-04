import { Base } from '../base'
import { Desc } from '../descriptive/desc'
import { Metadata } from '../descriptive/metadata'
import { Title } from '../descriptive/title'
import {
  ConditionalProcessingAttributes,
  CoreAttributes,
  XLinkAttributes,
  AnimationEventAttributes,
  AnimationTargetAttributes,
  AnimationTimingAttributes,
  AnimationValueAttributes,
  AnimationAdditionAttributes,
  PresentationAttributes,
  ExternalResourceAttributes
} from '../../types/common-attributes'

type AnimateTransformAttributes = ConditionalProcessingAttributes &
  CoreAttributes &
  XLinkAttributes &
  AnimationEventAttributes &
  AnimationTargetAttributes &
  AnimationTimingAttributes &
  AnimationValueAttributes &
  AnimationAdditionAttributes &
  PresentationAttributes &
  ExternalResourceAttributes & {
    type?: string
  }

type ChildElement = Desc | Metadata | Title

class AnimateTransform extends Base<'animateTransform'> {
  constructor() {
    super('animateTransform')
  }

  public setAttributes(attrs: AnimateTransformAttributes) {
    super.setAttributes(attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { AnimateTransform, AnimateTransformAttributes }
