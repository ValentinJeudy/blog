
const DEFAULT_NODE = 'paragraph'

const hasMark = (type, value) => {
  return value.activeMarks.some(mark => mark.type === type)
}

const hasBlock = (type, value) => {
  return value.blocks.some(node => node.type === type)
}

const onClickBlock = (event, type, editor) => {
  event.preventDefault()

  const { value } = editor
  const { document } = value

  console.log('valuse ===> ', value)

  // Handle everything but list buttons.
  if (type !== 'bulleted-list' && type !== 'numbered-list') {
    const isActive = hasBlock(type, value)
    const isList = hasBlock('list-item', value)

    if (isList) {
      editor
        .setBlocks(isActive ? DEFAULT_NODE : type)
        .unwrapBlock('bulleted-list')
        .unwrapBlock('numbered-list')
    } else {
      editor.setBlocks(isActive ? DEFAULT_NODE : type)
    }
  } else {
    // Handle the extra wrapping required for list buttons.
    const isList = hasBlock('list-item', value)
    const isType = value.blocks.some(block => {
      return !!document.getClosest(block.key, parent => parent.type === type)
    })

    if (isList && isType) {
      editor
        .setBlocks(DEFAULT_NODE)
        .unwrapBlock('bulleted-list')
        .unwrapBlock('numbered-list')
    } else if (isList) {
      editor
        .unwrapBlock(
          type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
        )
        .wrapBlock(type)
    } else {
      editor.setBlocks('list-item').wrapBlock(type)
    }
  }
}

const onClickMark = (event, type, editor) => {
  event.preventDefault()
  editor.toggleMark(type)
}

export {
  hasMark,
  hasBlock,
  onClickMark,
  onClickBlock
}
