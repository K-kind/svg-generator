import { Base } from '../base'

import { Desc } from '../descriptive/desc'
import { Metadata } from '../descriptive/metadata'
import { Title } from '../descriptive/title'

import {
  CoreAttributes,
  ExternalResourceAttributes
} from '../../types/common-attributes'

type ViewAttributes = CoreAttributes &
  ExternalResourceAttributes & {
    viewBox?: string
    preserveAspectRatio?: string
    zoomAndPan?: string
    viewTarget?: string
  }

type ChildElement = Desc | Metadata | Title

class View extends Base<'view'> {
  constructor() {
    super('view')
  }

  public setAttributes(attrs: ViewAttributes) {
    super.setAttributes(attrs)
  }

  public append(child: ChildElement) {
    super.appendSVG(child)
  }
}

export { View, ViewAttributes }
