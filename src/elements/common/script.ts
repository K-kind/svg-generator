import { Base } from '../base'

import {
  CoreAttributes,
  XLinkAttributes,
  ExternalResourceAttributes
} from '../../types/common-attributes'

type ScriptAttributes = CoreAttributes &
  XLinkAttributes &
  ExternalResourceAttributes & {
    type?: string
  }

class Script extends Base<'script', ScriptAttributes> {
  constructor(attrs: ScriptAttributes) {
    super('script', attrs)
  }
}

export { Script, ScriptAttributes }
