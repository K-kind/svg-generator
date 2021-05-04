import { Base } from '../base'

import { FontFaceFormat } from './font-face-format'

import { CoreAttributes, XLinkAttributes } from '../../types/common-attributes'

type FontFaceUriAttributes = CoreAttributes & XLinkAttributes

type ChildElement = FontFaceFormat

class FontFaceUri extends Base<'fontFaceUri', FontFaceUriAttributes> {
  constructor(attrs: FontFaceUriAttributes) {
    super('fontFaceUri', attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { FontFaceUri, FontFaceUriAttributes }
