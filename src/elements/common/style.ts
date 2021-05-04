import { Base } from '../base'
import { CoreAttributes } from '../../types/common-attributes'

type SVGStyleAttributes = CoreAttributes & {
  type?: string
  media?: string
  title?: string
}

class SVGStyle extends Base<'style'> {
  constructor() {
    super('style')
  }

  public setAttributes(attrs: SVGStyleAttributes) {
    super.setAttributes(attrs)
  }
}

export { SVGStyle, SVGStyleAttributes }
