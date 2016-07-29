var test = require('tape');
var scaleToFit = require('../index');

var testCases = [
  {
    opts: {
      view: {
        left: 0,
        top: 0,
        right: 16,
        bottom: 9
      },
      content: {
        left: 3,
        top: 7,
        right: 10,
        bottom: 13
      }
    },
    expected: {
      a: 1.5,
      b: 0,
      c: 0,
      d: 1.5,
      e: -4.5,
      f: -10.5,
    }
  }
];

testCases.forEach(runTest);

function runTest(testCase) {
  test('Basic test', basicTest);

  function basicTest(t) {
    var result = scaleToFit(testCase.opts);
    console.log(JSON.stringify(result, null, '  '));
    t.deepEqual(result, testCase.expected, 'Transform is correct.');
    t.end();
  }
}
