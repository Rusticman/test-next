const { convertToHTML } = require('draft-convert');
const { convertFromRaw } = require('draft-js');

const BLOCKS = require('./blocks');
const STYLES = require('./styles');
const ENTITIES = require('./entities');

const conversionHelpers = {
  styleToHTML(style) {
    const type = style.toLowerCase();
    if (STYLES[type]) return STYLES[type](style);
    return undefined;
  },
  blockToHTML(block, originalText) {
    const type = block.type.toLowerCase().split(':')[0];
    if (BLOCKS[type]) return BLOCKS[type](block, originalText);
    return '';
  },
  entityToHTML(entity, originalText) {
    const type = entity.type.toLowerCase();
    if (ENTITIES[type]) return ENTITIES[type](entity, originalText);
    return originalText;
  },
};

export default function rawContentStateToHtml(rawContentState) {
  const contentState = convertFromRaw(rawContentState);
  const renderedHtml = convertToHTML(conversionHelpers)(contentState);
  return { __html: renderedHtml };
}
