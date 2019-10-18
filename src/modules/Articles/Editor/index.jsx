import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import { Editor as SlateEditor } from 'slate-react'
import { Value } from 'slate'
import './styles.scss'

import {
  hasMark,
  hasBlock,
  onClickMark,
  onClickBlock
} from './utils'

// import EditorToolbar from '../EditorToolbar'

// Styles
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
  const [editor, setEditor] = useState(null)
  const [value, setValue] = useState(initialValue)

  const renderBlockButton = (type, icon) => {
    if (!editor) {
      return ''
    }
    let isActive = hasBlock(type, value)

    if (['numbered-list', 'bulleted-list'].includes(type)) {
      const { value: { document, blocks } } = editor

      if (blocks.size > 0) {
        const parent = document.getParent(blocks.first().key)
        isActive = hasBlock('list-item', value) && parent && parent.type === type
      }
    }

    console.log('isActive ===> ', isActive)

    return (
      <IconButton
        active={isActive}
        onMouseDown={event => onClickBlock(event, type, editor)}
      >
        <Icon fontSize='small'>{icon}</Icon>
      </IconButton>
    )
  }

  const renderMarkButton = (type, icon) => {
    if (!editor) {
      return ''
    }
    const isActive = hasMark(type, value)

    return (
      <IconButton
        active={isActive}
        onMouseDown={e => onClickMark(e, type, editor)}
      >
        <Icon fontSize='small'>{icon}</Icon>
      </IconButton>
    )
  }

  const handleChange = ({ value }) => {
    setValue(value)
  }

  const onKeyDown = (event, editor, next) => {
    next()
  }

  const ref = (editor) => {
    setEditor(editor)
  }

  const renderBlock = (props, editor, next) => {
    const { attributes, children, node } = props

    switch (node.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>
      case 'list-item':
        return <li {...attributes}>{children}</li>
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>
      default:
        return next()
    }
  }

  const renderMark = (props, editor, next) => {
    const { children, mark, attributes } = props

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>
      case 'code':
        return <code {...attributes}>{children}</code>
      case 'italic':
        return <em {...attributes}>{children}</em>
      case 'underlined':
        return <u {...attributes}>{children}</u>
      default:
        return next()
    }
  }

  return (
    <div className='editorContainer'>
      {/* <EditorToolbar editor={editor} value={value} /> */}
      <div>
        {renderMarkButton('bold', 'format_bold')}
        {renderMarkButton('italic', 'format_italic')}
        {renderMarkButton('underlined', 'format_underlined')}
        {renderMarkButton('code', 'code')}
        {renderBlockButton('heading-one', 'looks_one')}
        {renderBlockButton('heading-two', 'looks_two')}
        {renderBlockButton('block-quote', 'format_quote')}
        {renderBlockButton('numbered-list', 'format_list_numbered')}
        {renderBlockButton('bulleted-list', 'format_list_bulleted')}
      </div>
      <SlateEditor
        className='editor'
        value={value}
        ref={ref}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        renderBlock={renderBlock}
        renderMark={renderMark}
      />
    </div>
  )
}

Editor.propTypes = {
  article: PropTypes.object,
  setArticle: PropTypes.func,
  attributes: PropTypes.object,
  children: PropTypes.array,
  node: PropTypes.object
}

export default Editor
