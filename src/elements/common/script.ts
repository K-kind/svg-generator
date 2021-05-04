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

class Script extends Base<'script'> {
  constructor() {
    super('script')
  }

  public setAttributes(attrs: ScriptAttributes) {
    super.setAttributes(attrs)
  }
}

export { Script, ScriptAttributes }
