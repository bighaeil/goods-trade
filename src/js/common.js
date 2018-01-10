var script = require('scriptjs');

var user = {};

script('//developers.kakao.com/sdk/js/kakao.min.js', function() {
    Kakao.init('8c3534cceee63f4aa32c50bc762a4006');

    $('#kakao-login-btn').on('click', function () {
        // 로그인 창을 띄웁니다.
        Kakao.Auth.login({
            success: function(authObj) {
                // 로그인 성공시, API를 호출합니다.
                Kakao.API.request({
                    url: '/v1/user/me',
                    success: function(res) {
                        //alert(JSON.stringify(res));
                        user = res;
                        kakaoLogOut();
                        alert('로그인 하셨습니다.');
                    },
                    fail: function(error) {
                        alert(JSON.stringify(error));
                    }
                });
            },
            fail: function(err) {
                alert(JSON.stringify(err));
            }
        });
    });

    $('#kakao-logout-btn').on('click', function () {
        Kakao.Auth.logout(); // 브라우저의 쿠키가 삭제되지 않아서 다시 로그인할때 팝업창이 뜨지 않음
        user = {};
        kakaoLogIn();
        alert('로그아웃 하셨습니다.');
    });

    kakaoLogIn();

    function kakaoLogIn() {
        $('#kakao-logout-btn').hide();
        $('#kakao-login-btn').show();
    }

    function kakaoLogOut() {
        $('#kakao-login-btn').hide();
        $('#kakao-logout-btn').show();
    }

});



$('.header-home').on('click', function() {
    location.href = 'index.html';
});

$('.header-request').on('click', function() {
    location.href = 'request.html';
});

