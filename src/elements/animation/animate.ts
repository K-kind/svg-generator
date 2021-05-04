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

type AnimateAttributes = ConditionalProcessingAttributes &
  CoreAttributes &
  XLinkAttributes &
  AnimationEventAttributes &
  AnimationTargetAttributes &
  AnimationTimingAttributes &
  AnimationValueAttributes &
  AnimationAdditionAttributes &
  PresentationAttributes &
  ExternalResourceAttributes

type ChildElement = Desc | Metadata | Title

class Animate extends Base<'animate'> {
  constructor() {
    super('animate')
  }

  public setAttributes(attrs: AnimateAttributes) {
    super.setAttributes(attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { Animate, AnimateAttributes }
