import { Base } from '../base'
import {
  CoreAttributes,
  CommonStyleAttributes,
  ExternalResourceAttributes
} from '../../types/common-attributes'

type DescAttributes = CoreAttributes &
  CommonStyleAttributes &
  ExternalResourceAttributes

class Desc extends Base<'desc'> {
  constructor() {
    super('desc')
  }

  public setAttributes(attrs: DescAttributes) {
    super.setAttributes(attrs)
  }
}

export { Desc, DescAttributes }
