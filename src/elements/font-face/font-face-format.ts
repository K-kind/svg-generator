import { Base } from '../base'
import { CoreAttributes } from '../../types/common-attributes'

type FontFaceFormatAttributes = CoreAttributes & {
  string?: string
}

class FontFaceFormat extends Base<'fontFaceFormat'> {
  constructor() {
    super('fontFaceFormat')
  }

  public setAttributes(attrs: FontFaceFormatAttributes) {
    super.setAttributes(attrs)
  }
}

export { FontFaceFormat, FontFaceFormatAttributes }
