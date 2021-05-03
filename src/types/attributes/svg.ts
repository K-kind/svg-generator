import {
  CoreAttributes,
  ConditionalProcessingAttributes,
  GraphicalEventAttributes,
  PresentationAttributes,
  CommonStyleAttributes,
  DocumentEventAttributes
} from './common'

type CommonSvgAttributes = CoreAttributes &
  ConditionalProcessingAttributes &
  GraphicalEventAttributes &
  PresentationAttributes &
  CommonStyleAttributes &
  DocumentEventAttributes

export type SvgAttributes = CommonSvgAttributes & {
  x?: string
  y?: string
  width?: string
  height?: string
  viewBox?: string
  preserveAspectRatio?: string
  zoomAndPan?: string
  version?: string
  baseProfile?: string
  contentScriptType?: string
  contentStyleType?: string
}
