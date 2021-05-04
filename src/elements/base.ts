type AllSVGElementTagNameMap = SVGElementTagNameMap & {
  animate: SVGAnimateElement
  animateColor: SVGAnimationElement
  animateMotion: SVGAnimateMotionElement
  mpath: SVGElement
  animateTransform: SVGAnimateTransformElement
  set: SVGElement
  altGlyph: SVGTextContentElement
  tref: SVGTextContentElement
  font: SVGElement
  fontFace: SVGElement
  fontFaceName: SVGElement
  fontFaceFormat: SVGElement
  fontFaceUri: SVGElement
  fontFaceSrc: SVGElement
}

type SVGElementTagName = keyof AllSVGElementTagNameMap

type Attrs = { [key: string]: string | undefined }

abstract class Base<K extends SVGElementTagName, A extends Attrs> {
  public static SVGXMLNS = 'http://www.w3.org/2000/svg'
  public element: AllSVGElementTagNameMap[K]

  constructor(name: K, attrs?: A) {
    this.element = this.createElement(name)
    if (attrs) {
      this.setAttributes(attrs)
    }
  }

  private createElement(name: K) {
    return document.createElementNS(
      Base.SVGXMLNS,
      name
    ) as AllSVGElementTagNameMap[K]
  }

  public setAttributes(attrs: A) {
    for (const [key, value] of Object.entries(attrs)) {
      if (value != undefined) {
        this.element.setAttribute(key, value)
      } else {
        this.element.removeAttribute(key)
      }
    }
  }

  protected appendSVG<V extends Base<SVGElementTagName, Attrs>>(child: V) {
    this.element.appendChild(child.element)
  }
}

export { Base }
