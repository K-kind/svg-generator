import { Base } from '../base'

import {
  CoreAttributes,
  ConditionalProcessingAttributes,
  GraphicalEventAttributes,
  PresentationAttributes,
  CommonStyleAttributes,
  ExternalResourceAttributes,
  TransformAttributes
} from '../../types/common-attributes'

type ForeignObjectAttributes = CoreAttributes &
  ConditionalProcessingAttributes &
  GraphicalEventAttributes &
  PresentationAttributes &
  CommonStyleAttributes &
  ExternalResourceAttributes &
  TransformAttributes & {
    x?: string
    y?: string
    width?: string
    height?: string
  }
class ForeignObject extends Base<'foreignObject', ForeignObjectAttributes> {
  public tagName = 'foreignObject' as const

  constructor(attrs?: ForeignObjectAttributes) {
    super('foreignObject', attrs)
  }
}

export { ForeignObject, ForeignObjectAttributes }
