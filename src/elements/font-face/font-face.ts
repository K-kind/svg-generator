import { Base } from '../base'

import { Desc } from '../descriptive/desc'
import { Metadata } from '../descriptive/metadata'
import { Title } from '../descriptive/title'

import { FontFaceSrc } from './font-face-src'

import { CoreAttributes } from '../../types/common-attributes'

type FontFaceAttributes = CoreAttributes & {
  'font-family'?: string
  'font-style'?: string
  'font-variant'?: string
  'font-weight'?: string
  'font-stretch'?: string
  'font-size'?: string
  'unicode-range'?: string
  'units-per-em'?: string
  'panose-1'?: string
  stemv?: string
  stemh?: string
  slope?: string
  'cap-height'?: string
  'x-height'?: string
  'accent-height'?: string
  ascent?: string
  descent?: string
  widths?: string
  bbox?: string
  ideographic?: string
  alphabetic?: string
  mathematical?: string
  hanging?: string
  'v-ideographic'?: string
  'v-alphabetic'?: string
  'v-mathematical'?: string
  'v-hanging'?: string
  'underline-position'?: string
  'underline-thickness'?: string
  'strikethrough-position'?: string
  'strikethrough-thickness'?: string
  'overline-position'?: string
  'overline-thickness'?: string
}

type ChildElement = Desc | Metadata | Title | FontFaceSrc

class FontFace extends Base<'fontFace', FontFaceAttributes> {
  constructor(attrs?: FontFaceAttributes) {
    super('fontFace', attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { FontFace, FontFaceAttributes }
