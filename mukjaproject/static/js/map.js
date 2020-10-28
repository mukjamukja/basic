var mapposition = {
    p1:(37.484559, 126.928429),
    p2:(37.484262, 126.92815),
    p3:(37.481759, 126.929214),
    p4:(37.484249,126.929418),
    p5:(37.483683,126.928517),
    p6:(37.485375,126.930741),
    p7:(37.483168,126.927552),
    p8:(37.482702,126.929376),
    p9:(37.482125,126.928968),
    p10:(37.48193,126.929747),
    p11:(37.481896,126.930176),
    p12:(37.485487,126.929956),
    p13:(37.484697,126.927772)
}
var HOME_PATH = window.HOME_PATH || '.';
var shinrim = new naver.maps.LatLng(37.489894,126.927110), //처음 맵 기준 
    map = new naver.maps.Map('map', {
        center: shinrim,
        zoom: 16
    }),
    meal = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(37.484559, 126.928429),
    });

var contentString = [
        '<div class="iw_inner">',
        '   <h3>통큰갈비</h3>',
        '      <img src="../img/thumb/tn_1.png'+ HOME_PATH +' width="10%" height="15" alt="사진">',
        '       <div>주소 : 신림동 1599-4</div>',
        '       <div>평점 : 8</div>',
        '       <div>정보 : 돼지 갈비 무한리필점이다.  가격 대비 가성비가 좋다.</div>',
        '</div>'
    ].join('');

var infowindow = new naver.maps.InfoWindow({
    content: contentString,
    maxWidth: 180,
    backgroundColor: "white",
    borderColor: "green",
    borderWidth: 5,
    anchorSize: new naver.maps.Size(10, 10),
    anchorSkew: true,
    anchorColor: "white",
    pixelOffset: new naver.maps.Point(30, -20)
});

naver.maps.Event.addListener(meal, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, meal);
    }
});

//                               //

var meal2 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.484262, 126.92815),
    map: map
});  //맵핀

var contentString2 = [
    '<div class="iw_inner">',
        '   <h3>막불감동</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_2.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 신림동 1433-60</div>',
        '       <div>평점 : 8</div>',
        '       <div>정보 : 면을 시키면 고기가 서비스로 나오지만 고기 퀄리티가 좀 떨어진다.</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

    var infowindow2 = new naver.maps.InfoWindow({
        content: contentString2,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal2, "click", function(e) {
        if (infowindow2.getMap()) {
            infowindow2.close();
        } else {
            infowindow2.open(map, meal2);
        }
    }); //이벤트 발생 if문

//                                  //

var meal3 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.481759, 126.929214),
    map: map
});  //맵핀

var contentString3 = [
    '<div class="iw_inner">',
        '   <h3>르브와 </h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_3.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 서원동 34 3층</div>',
        '       <div>평점 : 8</div>',
        '       <div>정보 : 신림역 3번출구에 위치하며 크림파스타가 주메뉴다. </div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

    var infowindow3 = new naver.maps.InfoWindow({
        content: contentString3,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal3, "click", function(e) {
        if (infowindow3.getMap()) {
            infowindow3.close();
        } else {
            infowindow3.open(map, meal3);
        }
    }); //이벤트 발생 if문

//                                  //

var meal4 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.484249,126.929418),
    map: map
});  //맵핀

var contentString4 = [
    '<div class="iw_inner">',
        '   <h3>용궁중화요리</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_4.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 신림동 1640-1</div>',
        '       <div>평점 : 6</div>',
        '       <div>정보 : 짜장면에 고기,야채 등이 잘게 다져서 보통 짜장면보다 더 맛있다.</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

    var infowindow4 = new naver.maps.InfoWindow({
        content: contentString4,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal4, "click", function(e) {
        if (infowindow4.getMap()) {
            infowindow4.close();
        } else {
            infowindow4.open(map, meal4);
        }
    }); //이벤트 발생 if문

//                                  //

var meal5 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.483683,126.928517),
    map: map
});  //맵핀

var contentString5 = [
    '<div class="iw_inner">',
        '   <h3>스시오</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_5.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 신림동 1640-2</div>',
        '       <div>평점 : 6</div>',
        '       <div>정보 : 각종 샐러드, 냉모밀, 스시, 튀김 ,치킨 등등 뷔페 느낌이다.</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

    var infowindow5 = new naver.maps.InfoWindow({
        content: contentString5,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal5, "click", function(e) {
        if (infowindow5.getMap()) {
            infowindow5.close();
        } else {
            infowindow5.open(map, meal5);
        }
    }); //이벤트 발생 if문

    //                                  //

var meal6 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.485375,126.930741),
    map: map
});  //맵핀

var contentString6 = [
    '<div class="iw_inner">',
        '   <h3>전주식당</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_6.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 신림동 신림로66길20</div>',
        '       <div>평점 : 8</div>',
        '       <div>정보 : 냉동 삼겹살집이다. 고기에 육즙이 많다.</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

    var infowindow6 = new naver.maps.InfoWindow({
        content: contentString6,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal6, "click", function(e) {
        if (infowindow6.getMap()) {
            infowindow6.close();
        } else {
            infowindow6.open(map, meal6);
        }
    }); //이벤트 발생 if문

    //                                  //

var meal7 = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.483168,126.927552),
        map: map
    });  //맵핀
    
var contentString7 = [
        '<div class="iw_inner">',
            '   <h3>24시서울밥집</h3>',
            '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_7.png" width="15" height="15" alt="사진"></a>',
            '       <div>주소 : 서원동 관천로36-1</div>',
            '       <div>평점 : 7</div>',
            '       <div>정보 : 신림역 4번출구에 위치하며 제육볶음이 푸짐하다.</div>',
            '</div>'
        ].join('');  //핀 이벤트의 html
    
    var infowindow7 = new naver.maps.InfoWindow({
            content: contentString7,
            maxWidth: 180,
            backgroundColor: "white",
            borderColor: "green",
            borderWidth: 5,
            anchorSize: new naver.maps.Size(10, 10),
            anchorSkew: true,
            anchorColor: "white",
            pixelOffset: new naver.maps.Point(30, -20)
        }); //핀 이벤트의 css
        naver.maps.Event.addListener(meal7, "click", function(e) {
            if (infowindow7.getMap()) {
                infowindow7.close();
            } else {
                infowindow7.open(map, meal7);
            }
        }); //이벤트 발생 if문

//                                  //

var meal8 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.482702,126.929376),
    map: map
});  //맵핀

var contentString8 = [
    '<div class="iw_inner">',
        '   <h3>틈새라면</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_8.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 신림동 1638-20</div>',
        '       <div>평점 : 7</div>',
        '       <div>정보 : 매운라면으로 유명하다. 매운맛 조절이 가능하다.</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow8 = new naver.maps.InfoWindow({
        content: contentString8,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal8, "click", function(e) {
        if (infowindow8.getMap()) {
            infowindow8.close();
        } else {
            infowindow8.open(map, meal8);
        }
    }); //이벤트 발생 if문

    //                                  //

var meal9 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.482125,126.928968),
    map: map
});  //맵핀

var contentString9 = [
    '<div class="iw_inner">',
        '   <h3>뽕잎사랑</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_9.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 서원동 신원로 35</div>',
        '       <div>평점 : 8</div>',
        '       <div>정보 : 메뉴가 굉장히 많다. 다양한 패키지로 준비되서 기호에 맞게 골라 먹으면 된다.</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow9 = new naver.maps.InfoWindow({
        content: contentString9,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal9, "click", function(e) {
        if (infowindow9.getMap()) {
            infowindow9.close();
        } else {
            infowindow9.open(map, meal9);
        }
    }); //이벤트 발생 if문

//                                  //

var meal10 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.48193,126.929747),
    map: map
});  //맵핀

var contentString10 = [
    '<div class="iw_inner">',
        '   <h3>싸움의 고수</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_10.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 서원동 신림로307</div>',
        '       <div>평점 : 7</div>',
        '       <div>정보 : 보쌈은 항상 비싸다는 편견을 깨주는 음식점이다.</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow10 = new naver.maps.InfoWindow({
        content: contentString10,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal10, "click", function(e) {
        if (infowindow10.getMap()) {
            infowindow10.close();
        } else {
            infowindow10.open(map, meal10);
        }
    }); //이벤트 발생 if문

//                                  //

var meal11 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.481896,126.930176),
    map: map
});  //맵핀

var contentString11 = [
    '<div class="iw_inner">',
        '   <h3>두끼떡볶이</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_11.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 서원동 신림로310</div>',
        '       <div>평점 : 7</div>',
        '       <div>정보 : 떡볶이 무한 리필점이다. 각종 토핑과 튀김류들이 뷔페형식으로 진열 돼있다.</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow11 = new naver.maps.InfoWindow({
        content: contentString11,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal11, "click", function(e) {
        if (infowindow11.getMap()) {
            infowindow11.close();
        } else {
            infowindow11.open(map, meal11);
        }
    }); //이벤트 발생 if문

//                                  //

var meal12 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.485487,126.929956),
    map: map
});  //맵핀

var contentString12 = [
    '<div class="iw_inner">',
        '   <h3>서가앤쿡</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_12.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 신림동 신림로350</div>',
        '       <div>평점 : 6</div>',
        '       <div>정보 : 목살 스테이크로 유명한 맛집이다.</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow12 = new naver.maps.InfoWindow({
        content: contentString12,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal12, "click", function(e) {
        if (infowindow12.getMap()) {
            infowindow12.close();
        } else {
            infowindow12.open(map, meal12);
        }
    }); //이벤트 발생 if문

//                                  //

var meal13 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.484697,126.927772),
    map: map
});  //맵핀

var contentString13 = [
    '<div class="iw_inner">',
        '   <h3>깡통 닭갈비</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_13.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 남부순환로 1597-14</div>',
        '       <div>평점 : 8</div>',
        '       <div>정보 : 숯불 닭갈비집이다. 2인분이상 주문시 치즈를 서비스로 준다.</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow13 = new naver.maps.InfoWindow({
        content: contentString13,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal13, "click", function(e) {
        if (infowindow13.getMap()) {
            infowindow13.close();
        } else {
            infowindow13.open(map, meal13);
        }
    }); //이벤트 발생 if문

//                                  //

var meal14 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.49143,126.923997),
    map: map
});  //맵핀

var contentString14 = [
    '<div class="iw_inner">',
        '   <h3>마라탕 전문점</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_14.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 신대방동 395-69번지 2층 211호</div>',
        '       <div>평점 : 8</div>',
        '       <div>정보 : 취향대로 바구니에 담아서 먹으면된다. 매운맛 조절이 가능하다.</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow14 = new naver.maps.InfoWindow({
        content: contentString14,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal14, "click", function(e) {
        if (infowindow14.getMap()) {
            infowindow14.close();
        } else {
            infowindow14.open(map, meal14);
        }
    }); //이벤트 발생 if문


//                                  //

var meal15 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.489686,126.927956),
    map: map
});  //맵핀

var contentString15 = [
    '<div class="iw_inner">',
        '   <h3>예가 돈가스</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_14.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 서울특별시 관악구 보라매동 971-1</div>',
        '       <div>평점 : 5</div>',
        '       <div>정보 : 돈가스 맛집 예가돈까스. 바삭하고 맛있는 돈가스를 판매하고 있다. 기름지지 않고 맛있어 인기가 많다.</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow15 = new naver.maps.InfoWindow({
        content: contentString15,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal15, "click", function(e) {
        if (infowindow15.getMap()) {
            infowindow15.close();
        } else {
            infowindow15.open(map, meal15);
        }
    }); //이벤트 발생 if문

//                                  //

var meal16 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.490483,126.924865),
    map: map
});  //맵핀

var contentString16 = [
    '<div class="iw_inner">',
        '   <h3>부엉이 돈가스</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_14.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 서울특별시 관악구 봉천동 봉천로 209 롯데백화점 7층</div>',
        '       <div>평점 : 6</div>',
        '       <div>정보 : 비교적 비싼음식점들이 모여있는 롯데백와점 7층에 위치해 있다. 돈가스의 맛은 있으나 가격에 비해 양이 적은것이 단점이다. 소스가 특히 맛있다.</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow16 = new naver.maps.InfoWindow({
        content: contentString16,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal16, "click", function(e) {
        if (infowindow16.getMap()) {
            infowindow16.close();
        } else {
            infowindow16.open(map, meal16);
        }
    }); //이벤트 발생 if문


//                                  //

var meal17 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.49034,126.92907),
    map: map
});  //맵핀

var contentString17 = [
    '<div class="iw_inner">',
        '   <h3>강서중화요리</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_14.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 서울특별시 관악구 보라매동 당곡길 22</div>',
        '       <div>평점 : 8</div>',
        '       <div>정보 : 동네 중국집느낌이며 , 짬뽕이 깔끔하고 시원한 맛이다. </div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow17 = new naver.maps.InfoWindow({
        content: contentString17,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal17, "click", function(e) {
        if (infowindow17.getMap()) {
            infowindow17.close();
        } else {
            infowindow17.open(map, meal17);
        }
    }); //이벤트 발생 if문

//                                  //

var meal18 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.490585,126.925013),
    map: map
});  //맵핀

var contentString18 = [
    '<div class="iw_inner">',
        '   <h3>삿뽀로</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_14.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 서울특별시 관악구 봉천동 봉천로 209</div>',
        '       <div>평점 : 7</div>',
        '       <div>정보 : 정통 일식을 저가로 즐길수있다. </div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow18 = new naver.maps.InfoWindow({
        content: contentString18,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal18, "click", function(e) {
        if (infowindow18.getMap()) {
            infowindow18.close();
        } else {
            infowindow18.open(map, meal18);
        }
    }); //이벤트 발생 if문


//                                  //

var meal19 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.48895,126.92677),
    map: map
});  //맵핀

var contentString19 = [
    '<div class="iw_inner">',
        '   <h3>삼촌집</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_14.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 서울특별시 관악구 신림동 봉천로8길 12</div>',
        '       <div>평점 : 8</div>',
        '       <div>정보 : 초밥 연어튀김 새우튀김이 주메뉴이다. 가성비가 정말 좋다. </div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow19 = new naver.maps.InfoWindow({
        content: contentString19,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal19, "click", function(e) {
        if (infowindow19.getMap()) {
            infowindow19.close();
        } else {
            infowindow19.open(map, meal19);
        }
    }); //이벤트 발생 if문


//                                  //

var meal20 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.48895,126.92677),
    map: map
});  //맵핀

var contentString20 = [
    '<div class="iw_inner">',
        '   <h3>아이포</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_14.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 서울특별시 관악구 봉천동 보라매로3길 29</div>',
        '       <div>평점 : 8</div>',
        '       <div>정보 : 주메뉴는 쌀국수이고 월남쌈 주문시 쌀국수가 서비스다. </div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow20 = new naver.maps.InfoWindow({
        content: contentString20,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal20, "click", function(e) {
        if (infowindow20.getMap()) {
            infowindow20.close();
        } else {
            infowindow20.open(map, meal20);
        }
    }); //이벤트 발생 if문


//                                  //

var meal21 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.49125,126.92736),
    map: map
});  //맵핀

var contentString21 = [
    '<div class="iw_inner">',
        '   <h3>전티마이 베트남쌀국수</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_14.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 봉천동 702-36번지 하동 1층 관악구 서울특별시 KR</div>',
        '       <div>평점 : 8</div>',
        '       <div>정보 : 국물이 진하고 가성비가 좋다. </div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow21 = new naver.maps.InfoWindow({
        content: contentString21,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal21, "click", function(e) {
        if (infowindow21.getMap()) {
            infowindow21.close();
        } else {
            infowindow21.open(map, meal21);
        }
    }); //이벤트 발생 if문

//                                  //

var meal22 = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.4922,126.92347),
    map: map
});  //맵핀

var contentString22 = [
    '<div class="iw_inner">',
        '   <h3>하노이의 아침</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/thumb/tn_14.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 서울특별시 동작구 신대방동 395-65</div>',
        '       <div>평점 : 6</div>',
        '       <div>정보 : 쌀국수 종류가 많다. 가성비 대비는 좀 안좋은편. </div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow22 = new naver.maps.InfoWindow({
        content: contentString22,
        maxWidth: 180,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(meal22, "click", function(e) {
        if (infowindow22.getMap()) {
            infowindow22.close();
        } else {
            infowindow22.open(map, meal22);
        }
    }); //이벤트 발생 if문
