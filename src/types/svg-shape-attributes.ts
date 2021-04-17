import {
  CommonShapeAttributes,
  CommonSvgAttributes
} from './svg-common-attributes'

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
