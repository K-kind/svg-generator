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

class ForeignObject extends Base<'foreignObject'> {
  constructor() {
    super('foreignObject')
  }

  public setAttributes(attrs: ForeignObjectAttributes) {
    super.setAttributes(attrs)
  }
}

export { ForeignObject, ForeignObjectAttributes }
