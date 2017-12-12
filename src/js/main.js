require('bootstrap');
require('../less/main.less');
var common = require('./common');

$('.gt-trade-list li').on('click', function() {
    location.href = 'detail.html';
});
