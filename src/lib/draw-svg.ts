import { SVGXMLNS } from '../constants/XMLNSs'

import { SvgAttributes } from '../types/attributes/svg'

import {
  RectAttributes,
  CircleAttributes,
  EllipseAttributes,
  LineAttributes,
  PolylineAttributes,
  PolygonAttributes,
  PathAttributes
} from '../types/attributes/shapes'

export const setAttributes = (
  element: SVGElement,
  attrs: { [key: string]: string | undefined }
) => {
  for (const [key, value] of Object.entries(attrs)) {
    if (value != undefined) {
      element.setAttribute(key, value)
    }
  }
}

export const generateSvg = (attrs: SvgAttributes) => {
  const svg = document.createElementNS(SVGXMLNS, 'svg')
  setAttributes(svg, attrs)
  return svg
}

export const generateRect = (attrs: RectAttributes) => {
  const rect = document.createElementNS(SVGXMLNS, 'rect')
  setAttributes(rect, attrs)
  return rect
}

export const generateCircle = (attrs: CircleAttributes) => {
  const circle = document.createElementNS(SVGXMLNS, 'circle')
  setAttributes(circle, attrs)
  return circle
}

export const generateEllipse = (attrs: EllipseAttributes) => {
  const ellipse = document.createElementNS(SVGXMLNS, 'ellipse')
  setAttributes(ellipse, attrs)
  return ellipse
}

export const generateLine = (attrs: LineAttributes) => {
  const line = document.createElementNS(SVGXMLNS, 'line')
  setAttributes(line, attrs)
  return line
}

export const generatePolyline = (attrs: PolylineAttributes) => {
  const polyline = document.createElementNS(SVGXMLNS, 'polyline')
  setAttributes(polyline, attrs)
  return polyline
}

export const generatePolygon = (attrs: PolygonAttributes) => {
  const polygon = document.createElementNS(SVGXMLNS, 'polygon')
  setAttributes(polygon, attrs)
  return polygon
}

export const generatePath = (attrs: PathAttributes) => {
  const path = document.createElementNS(SVGXMLNS, 'path')
  setAttributes(path, attrs)
  return path
}
