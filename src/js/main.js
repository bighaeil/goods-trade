require('bootstrap');
require('../less/main.less');
var common = require('./common');

var model = [
    {
        content: "test test test 1",
        goods: "레드벨벳 사인 엽서",
        groups: "레드벨벳",
        id: 2,
        img: "./img/2/21227428_118245952135014_7328286368252035072_n.jpg",
        singer: "레드벨벳",
        state: "판매완료",
        title: "레드벨벳 사인 엽서",
        writeDt: "2017-12-14 18:20:26.0",
        writer: "asdf"
    }, {
        content:"test test test 1",
        goods: "레드벨벳 사인 엽서",
        groups: "레드벨벳",
        id: 1,
        img: "./img/2/21227428_118245952135014_7328286368252035072_n.jpg",
        singer: "아이린",
        state: "판매완료",
        title: "아이린 사인 엽서",
        writeDt: "2017-12-14 18:20:26.0",
        writer: "asdf"
    }]; // 값 넣어서 쓸거면 - 순서 중요

init();

function init() {
    /*$.ajax({
        url: '/api/goods/list/',
        success: function (result) {
            model = result;
            tradeListInit();
        }
    });*/
    tradeListInit();
    tradeListClick();
}

function tradeListInit() {
    var template = require('../template/trade.hbs');
    var html = template(model);
    $('.gt-trade-list').html(html);
}

function tradeListClick() {
    $('.gt-trade-list li').on('click', function() {
        var tableId = $(this).attr('table-id');
        location.href = 'detail.html?' + 'id=' + tableId;
    });
}
