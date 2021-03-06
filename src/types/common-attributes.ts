export type CoreAttributes = {
  id?: string
  'xml:base'?: string
  'xml:lang'?: string
  'xml:space'?: string
}

export type ConditionalProcessingAttributes = {
  requiredFeatures?: string
  requiredExtensions?: string
  systemLanguage?: string
}

export type GraphicalEventAttributes = {
  onactivate?: string
  onclick?: string
  onfocusin?: string
  onfocusout?: string
  onload?: string
  onmousedown?: string
  onmousemove?: string
  onmouseout?: string
  onmouseover?: string
  onmouseup?: string
}

export type PresentationAttributes = {
  'alignment-baseline'?: string
  'baseline-shift'?: string
  clip?: string
  'clip-path'?: string
  'clip-rule'?: string
  color?: string
  'color-interpolation'?: string
  'color-interpolation-filters'?: string
  'color-profile'?: string
  'color-rendering'?: string
  cursor?: string
  direction?: string
  display?: string
  'dominant-baseline'?: string
  'enable-background'?: string
  fill?: string
  'fill-opacity'?: string
  'fill-rule'?: string
  filter?: string
  'flood-color'?: string
  'flood-opacity'?: string
  'font-family'?: string
  'font-size'?: string
  'font-size-adjust'?: string
  'font-stretch'?: string
  'font-style'?: string
  'font-variant'?: string
  'font-weight'?: string
  'glyph-orientation-horizontal'?: string
  'glyph-orientation-vertical'?: string
  'image-rendering'?: string
  kerning?: string
  'letter-spacing'?: string
  'lighting-color'?: string
  'marker-end'?: string
  'marker-mid'?: string
  'marker-start'?: string
  mask?: string
  opacity?: string
  overflow?: string
  'pointer-events'?: string
  'shape-rendering'?: string
  'stop-color'?: string
  'stop-opacity'?: string
  stroke?: string
  'stroke-dasharray'?: string
  'stroke-dashoffset'?: string
  'stroke-linecap'?: string
  'stroke-linejoin'?: string
  'stroke-miterlimit'?: string
  'stroke-opacity'?: string
  'stroke-width'?: string
  'text-anchor'?: string
  'text-decoration'?: string
  'text-rendering'?: string
  'unicode-bidi'?: string
  visibility?: string
  'word-spacing'?: string
  'writing-mode,'?: string
}

export type CommonStyleAttributes = {
  class?: string
  style?: string
}

export type ExternalResourceAttributes = {
  externalResourcesRequired?: string
}

export type TransformAttributes = {
  transform?: string
}

export type DocumentEventAttributes = {
  onunload?: string
  onabort?: string
  onerror?: string
  onresize?: string
  onscroll?: string
  onzoom?: string
}

export type XLinkAttributes = {
  'xlink:href'?: string
  'xlink:show'?: string
  'xlink:actuate'?: string
  'xlink:type'?: string
  'xlink:role'?: string
  'xlink:arcrole'?: string
  'xlink:title'?: string
}

export type AnimationEventAttributes = {
  onbegin?: string
  onend?: string
  onrepeat?: string
  onload?: string
}

export type AnimationTargetAttributes = {
  attributeType?: string
  attributeName?: string
}

export type AnimationTimingAttributes = {
  begin?: string
  dur?: string
  end?: string
  min?: string
  max?: string
  restart?: string
  repeatCount?: string
  repeatDur?: string
  fill?: string
}

export type AnimationValueAttributes = {
  calcMode?: string
  values?: string
  keyTimes?: string
  keySplines?: string
  from?: string
  to?: string
  by?: string
}

export type AnimationAdditionAttributes = {
  additive?: string
  accumulate?: string
}
