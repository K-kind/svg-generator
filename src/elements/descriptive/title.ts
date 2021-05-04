import { Base } from '../base'
import {
  CoreAttributes,
  CommonStyleAttributes,
  ExternalResourceAttributes
} from '../../types/common-attributes'

type TitleAttributes = CoreAttributes &
  CommonStyleAttributes &
  ExternalResourceAttributes

class Title extends Base<'title'> {
  constructor() {
    super('title')
  }

  public setAttributes(attrs: TitleAttributes) {
    super.setAttributes(attrs)
  }
}

export { Title, TitleAttributes }
