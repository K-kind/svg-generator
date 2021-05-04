import { Base } from '../base'
import { CoreAttributes } from '../../types/common-attributes'

type FontFaceNameAttributes = CoreAttributes & {
  name?: string
}

class FontFaceName extends Base<'fontFaceName', FontFaceNameAttributes> {
  constructor(attrs: FontFaceNameAttributes) {
    super('fontFaceName', attrs)
  }
}

export { FontFaceName, FontFaceNameAttributes }
