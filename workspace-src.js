var editize = require('editize');
var d3 = require('d3-selection');

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
    console.log(opts);
}
