import { Base } from '../base'
import { CoreAttributes } from '../../types/common-attributes'

type MetadataAttributes = CoreAttributes

class Metadata extends Base<'metadata', MetadataAttributes> {
  public tagName = 'metadata' as const

  constructor(attrs?: MetadataAttributes) {
    super('metadata', attrs)
  }
}

export { Metadata, MetadataAttributes }
