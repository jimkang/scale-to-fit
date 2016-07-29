var editize = require('editize');
var d3 = require('d3-selection');
require('d3-selection-multi');
var scaleToFit = require('./index');;

d3.select('#form').selectAll('.number-field').each(editizeThis);

function editizeThis() {
  editize(this).onEndEdit(render);
}

function render() {
  var opts = {
    view: {
      left: parseFloat(d3.select('#view-left').text()),
      bottom: parseFloat(d3.select('#view-bottom').text()),
      right: parseFloat(d3.select('#view-right').text()),
      top: parseFloat(d3.select('#view-top').text())
    },
    content: {
      left: parseFloat(d3.select('#content-left').text()),
      bottom: parseFloat(d3.select('#content-bottom').text()),
      right: parseFloat(d3.select('#content-right').text()),
      top: parseFloat(d3.select('#content-top').text())
    }
  };
  // console.log(opts);
  var board = d3.select('#board');
  board.selectAll('.view').attrs({
    x: opts.view.left,
    y: opts.view.bottom,
    width: opts.view.right - opts.view.left,
    height: opts.view.top - opts.view.bottom
  });
}
