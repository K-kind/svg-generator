import { Base } from '../base'

import { FontFaceName } from './font-face-name'
import { FontFaceUri } from './font-face-uri'

import { CoreAttributes } from '../../types/common-attributes'

type FontFaceSrcAttributes = CoreAttributes

type ChildElement = FontFaceName | FontFaceUri

class FontFaceSrc extends Base<'fontFaceSrc', FontFaceSrcAttributes> {
  public tagName = 'fontFaceSrc' as const

  constructor(attrs?: FontFaceSrcAttributes) {
    super('fontFaceSrc', attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { FontFaceSrc, FontFaceSrcAttributes }
