import { Base } from '../base'
import { Desc } from '../descriptive/desc'
import { Metadata } from '../descriptive/metadata'
import { Title } from '../descriptive/title'
import {
  CoreAttributes,
  XLinkAttributes,
  ExternalResourceAttributes
} from '../../types/common-attributes'

type MPathAttributes = CoreAttributes &
  XLinkAttributes &
  ExternalResourceAttributes & {
    path?: string
    keyPoints?: string
    rotate?: string
    origin?: string
  }

type ChildElement = Desc | Metadata | Title

class MPath extends Base<'mpath'> {
  constructor() {
    super('mpath')
  }

  public setAttributes(attrs: MPathAttributes) {
    super.setAttributes(attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { MPath, MPathAttributes }
