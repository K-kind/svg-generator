import { Base } from '../base'
import {
  CoreAttributes,
  CommonStyleAttributes,
  ExternalResourceAttributes
} from '../../types/common-attributes'

type TitleAttributes = CoreAttributes &
  CommonStyleAttributes &
  ExternalResourceAttributes

class Title extends Base<'title', TitleAttributes> {
  public tagName = 'title' as const

  constructor(attrs?: TitleAttributes) {
    super('title', attrs)
  }
}

export { Title, TitleAttributes }
