import { Base } from '../base'
import { CoreAttributes } from '../../types/common-attributes'

type MetadataAttributes = CoreAttributes

class Metadata extends Base<'metadata'> {
  constructor() {
    super('metadata')
  }

  public setAttributes(attrs: MetadataAttributes) {
    super.setAttributes(attrs)
  }
}

export { Metadata, MetadataAttributes }
