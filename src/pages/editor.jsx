import React from 'react'
import { Wysimark, useEditor } from '@wysimark/react'

const MyComponent = () => {
  const editor = useEditor({ initialMarkdown: "# Hello World" })
  return <Wysimark editor={editor} />
}

export default MyComponent;