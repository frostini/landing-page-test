import React from 'react'
import Markdoc from '@markdoc/markdoc';

const source = '# Markdoc';
const ast = Markdoc.parse(source);
const content = Markdoc.transform(ast, /* config */);

export default function Saver() {
  return (
    <section>
      { Markdoc.renderers.react(content, React) }
    </section>
  )
}
