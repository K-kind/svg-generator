import { Base } from '../base'
import { CoreAttributes } from '../../types/common-attributes'

type SVGStyleAttributes = CoreAttributes & {
  type?: string
  media?: string
  title?: string
}

class SVGStyle extends Base<'style', SVGStyleAttributes> {
  public tagName = 'style' as const

  constructor(attrs?: SVGStyleAttributes) {
    super('style', attrs)
  }
}

export { SVGStyle, SVGStyleAttributes }
