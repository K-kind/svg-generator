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

type AnimateColorAttributes = ConditionalProcessingAttributes &
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

class AnimateColor extends Base<'animateColor', AnimateColorAttributes> {
  constructor(attrs?: AnimateColorAttributes) {
    super('animateColor', attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { AnimateColor, AnimateColorAttributes }
