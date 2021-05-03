import {
  CoreAttributes,
  ConditionalProcessingAttributes,
  GraphicalEventAttributes,
  PresentationAttributes,
  CommonStyleAttributes,
  TransformAttributes
} from './common'

type CommonShapeAttributes = CoreAttributes &
  ConditionalProcessingAttributes &
  GraphicalEventAttributes &
  PresentationAttributes &
  CommonStyleAttributes &
  TransformAttributes

export type RectAttributes = CommonShapeAttributes & {
  x?: string
  y?: string
  width?: string
  height?: string
  rx?: string
  ry?: string
}

export type CircleAttributes = CommonShapeAttributes & {
  cx?: string
  cy?: string
  r?: string
}

export type EllipseAttributes = CommonShapeAttributes & {
  cx?: string
  cy?: string
  rx?: string
  ry?: string
}

export type LineAttributes = CommonShapeAttributes & {
  x1?: string
  y1?: string
  x2?: string
  y2?: string
}

export type PolylineAttributes = CommonShapeAttributes & {
  points?: string
}

export type PolygonAttributes = CommonShapeAttributes & {
  points?: string
}

export type PathAttributes = CommonShapeAttributes & {
  d?: string
  pathLength?: string
}
