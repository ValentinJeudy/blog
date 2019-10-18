
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Icon,
  Button
} from '@material-ui/core'

const EditorToolbar = ({ editor, value }) => {
  const DEFAULT_NODE = 'paragraph'

  useEffect(() => {
    console.log('editor ===> ', editor)
  }, [])

  return (
    <div className='toolbar'>
      {renderMarkButton('bold', 'format_bold')}
      {renderMarkButton('italic', 'format_italic')}
      {renderMarkButton('underlined', 'format_underlined')}
      {renderMarkButton('code', 'code')}
      {/* {renderBlockButton('heading-one', 'looks_one')}
      {renderBlockButton('heading-two', 'looks_two')}
      {renderBlockButton('block-quote', 'format_quote')}
      {renderBlockButton('numbered-list', 'format_list_numbered')}
      {renderBlockButton('bulleted-list', 'format_list_bulleted')} */}
    </div>
  )
}

EditorToolbar.propTypes = {
  editor: PropTypes.object,
  value: PropTypes.object
}

export default EditorToolbar
