import { Base } from '../base'
import { CoreAttributes } from '../../types/common-attributes'

type FontFaceFormatAttributes = CoreAttributes & {
  string?: string
}

class FontFaceFormat extends Base<'fontFaceFormat', FontFaceFormatAttributes> {
  public tagName = 'fontFaceFormat' as const

  constructor(attrs?: FontFaceFormatAttributes) {
    super('fontFaceFormat', attrs)
  }
}

export { FontFaceFormat, FontFaceFormatAttributes }
