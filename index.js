function scaleToFit(opts) {
  var view;
  var content;

  if (opts) {
    view = opts.view;
    content = opts.content;
  }

  var viewWidth = view.right - view.left;
  var viewHeight = view.bottom - view.top;
  var contentWidth = content.right - content.left;
  var contentHeight = content.bottom - content.top;

  var offsetX = content.left - view.left;
  var offsetY = content.top - view.top;

  var viewToContentRatioX = viewWidth/contentWidth;
  var viewToContentRatioY = viewHeight/contentHeight;

  var relevantRatio = viewToContentRatioY;
  if (viewToContentRatioX < viewToContentRatioY) {
    relevantRatio =  viewToContentRatioX;
  }

  return [
    relevantRatio,
    0,
    0,
    relevantRatio,
    view.left - content.left * relevantRatio,
    view.top - content.top * relevantRatio
  ];
}

module.exports = scaleToFit;
