require('../less/detail.less');

var common = require('./common');

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var tableId = params.get('id');

$('.goto-main').on('click', function() {
    location.href = 'index.html';
});

var model = {
        content: "test\n test\n test\n 1",
        goods: "레드벨벳 사인 엽서",
        groups: "레드벨벳",
        id: 2,
        img: "./img/2/21227428_118245952135014_7328286368252035072_n.jpg",
        singer: "레드벨벳",
        state: "판매완료",
        title: "레드벨벳 사인 엽서",
        writeDt: "2017-12-14 18:20:26.0",
        writer: "asdf"
    };

init();

function init() {
    /*$.ajax({
        url: '/api/goods/detail/' + tableId + '/',
        success: function (result) {
            model = result;
            tradeInit();
        }
    });*/
    tradeInit();
}

function tradeInit() {
    $('.gt-detail-title').text(model.title);
    $('.gt-detail-writer').text(model.writer);
    $('.gt-detail-groups').text(model.groups);
    $('.gt-detail-singer').text(model.singer);
    $('.gt-detail-state').text(model.state);
    $('.gt-detail-writedt').text(model.writeDt);
    $('.gt-detail-img-src').attr('src', model.img); // img의 src는 속성이니까
    var text = model.content.replace(/(?:\r\n|\r|\n)/g, '<br/>');
    $('.gt-detail-content').html(text);

}
