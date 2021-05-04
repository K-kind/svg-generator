import { Base } from '../base'
import { CoreAttributes } from '../../types/common-attributes'

type FontFaceNameAttributes = CoreAttributes & {
  name?: string
}

class FontFaceName extends Base<'fontFaceName'> {
  constructor() {
    super('fontFaceName')
  }

  public setAttributes(attrs: FontFaceNameAttributes) {
    super.setAttributes(attrs)
  }
}

export { FontFaceName, FontFaceNameAttributes }
