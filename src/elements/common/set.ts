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
  ExternalResourceAttributes
} from '../../types/common-attributes'

type SVGSetAttributes = ConditionalProcessingAttributes &
  CoreAttributes &
  XLinkAttributes &
  AnimationEventAttributes &
  AnimationTargetAttributes &
  AnimationTimingAttributes &
  ExternalResourceAttributes & {
    to?: string
  }

type ChildElement = Desc | Metadata | Title

class SVGSet extends Base<'set', SVGSetAttributes> {
  public tagName = 'set' as const

  constructor(attrs?: SVGSetAttributes) {
    super('set', attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { SVGSet, SVGSetAttributes }
