export function mediaUrl(slug, size = 'lg') {
  return `https://cdn.checkd.media/images/${slug}-${size}.jpg`;
}

/**
 * @param editorState
 * @param length
 * @return excerpt
 ***/
export function createExcerpt(editorState, length){
  const parsed = JSON.parse(editorState);
  let text = '';

  parsed.blocks.forEach((block) => {
    if (block.type === 'unstyled' && block.text.length) {
      text += block.text;
    }
  });

  if (text.length > length) {
    text = text.substring(0, length);
  }

  return text;
}


export function isServer() {
  return Object.prototype.toString.call(global.process) === '[object process]';
}
