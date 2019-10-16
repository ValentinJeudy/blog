import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Editor as SlateEditor } from 'slate-react'
import { Value } from 'slate'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'A line of text in a paragraph.'
          }
        ]
      }
    ]
  }
})

const Editor = ({ article, setArticle }) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = ({ value }) => {
    console.log('e ===> ', value)
    setValue(value)
  }

  return (
    <div>
      <SlateEditor
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

Editor.propTypes = {
  article: PropTypes.object,
  setArticle: PropTypes.func
}

export default Editor
