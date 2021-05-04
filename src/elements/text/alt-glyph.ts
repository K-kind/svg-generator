import { Base } from '../base'

import {
  CoreAttributes,
  ConditionalProcessingAttributes,
  GraphicalEventAttributes,
  PresentationAttributes,
  XLinkAttributes,
  CommonStyleAttributes,
  ExternalResourceAttributes
} from '../../types/common-attributes'

type AltGlyphAttributes = CoreAttributes &
  ConditionalProcessingAttributes &
  GraphicalEventAttributes &
  PresentationAttributes &
  XLinkAttributes &
  CommonStyleAttributes &
  ExternalResourceAttributes & {
    x?: string
    y?: string
    dx?: string
    dy?: string
    glyphRef?: string
    format?: string
    rotate?: string
  }
class AltGlyph extends Base<'altGlyph', AltGlyphAttributes> {
  public tagName = 'altGlyph' as const

  constructor(attrs?: AltGlyphAttributes) {
    super('altGlyph', attrs)
  }
}

export { AltGlyph, AltGlyphAttributes }
