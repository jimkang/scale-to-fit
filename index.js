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

  return {
    a: relevantRatio,
    b: 0,
    c: 0,
    d: relevantRatio,
    e: -relevantRatio * offsetX,
    f: -relevantRatio * offsetY
  };
}

module.exports = scaleToFit;
