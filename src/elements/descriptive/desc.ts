import { Base } from '../base'
import {
  CoreAttributes,
  CommonStyleAttributes,
  ExternalResourceAttributes
} from '../../types/common-attributes'

type DescAttributes = CoreAttributes &
  CommonStyleAttributes &
  ExternalResourceAttributes

class Desc extends Base<'desc', DescAttributes> {
  constructor(attrs?: DescAttributes) {
    super('desc', attrs)
  }
}

export { Desc, DescAttributes }
