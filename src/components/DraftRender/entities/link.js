const React = require('react');

export default function linkToHTML(entity, originalText) {
  return React.createElement('a', { href: entity.data.url }, originalText);
  // TODO: https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/
  // TODO <a target="_blank" rel="noopener">
}
