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
    p12:(37.485948,126.929929),
    p13:(37.484697,126.927772)
}
var HOME_PATH = window.HOME_PATH || '.';
var shinrim = new naver.maps.LatLng(37.484559, 126.928429),
    map = new naver.maps.Map('map', {
        center: shinrim,
        zoom: 16
    }),
    meal = new naver.maps.Marker({
        map: map,
        position: shinrim
    });

var contentString = [
        '<div class="iw_inner">',
        '   <h3>통큰갈비</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_2.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 신림동 1599-4</div>',
        '       <div>평점 : 4</div>',
        '       <div>정보 : 한식</div>',
        '</div>'
    ].join('');

var infowindow = new naver.maps.InfoWindow({
    content: contentString,
    maxWidth: 150,
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
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 신림동 1433-60</div>',
        '       <div>평점 : 4</div>',
        '       <div>정보 : 한식</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

    var infowindow2 = new naver.maps.InfoWindow({
        content: contentString2,
        maxWidth: 140,
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
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 서원동 34 3층</div>',
        '       <div>평점 : 4</div>',
        '       <div>정보 : 양식</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

    var infowindow3 = new naver.maps.InfoWindow({
        content: contentString3,
        maxWidth: 140,
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
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 신림동 1640-1</div>',
        '       <div>평점 : 3</div>',
        '       <div>정보 : 중식</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

    var infowindow4 = new naver.maps.InfoWindow({
        content: contentString4,
        maxWidth: 140,
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
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 신림동 1640-2</div>',
        '       <div>평점 : 3</div>',
        '       <div>정보 : 일식</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

    var infowindow5 = new naver.maps.InfoWindow({
        content: contentString5,
        maxWidth: 140,
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
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 신림동 신림로66길20</div>',
        '       <div>평점 : 4</div>',
        '       <div>정보 : 한식</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

    var infowindow6 = new naver.maps.InfoWindow({
        content: contentString6,
        maxWidth: 140,
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
            '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
            '       <div>주소 : 서원동 관천로36-1</div>',
            '       <div>평점 : 4</div>',
            '       <div>정보 : 한식</div>',
            '</div>'
        ].join('');  //핀 이벤트의 html
    
    var infowindow7 = new naver.maps.InfoWindow({
            content: contentString7,
            maxWidth: 140,
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
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 신림동 1638-20</div>',
        '       <div>평점 : 4</div>',
        '       <div>정보 : 분식</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow8 = new naver.maps.InfoWindow({
        content: contentString8,
        maxWidth: 140,
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
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 서원동 신원로 35</div>',
        '       <div>평점 : 4</div>',
        '       <div>정보 : 한식</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow9 = new naver.maps.InfoWindow({
        content: contentString9,
        maxWidth: 140,
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
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 서원동 신림로307</div>',
        '       <div>평점 : 4</div>',
        '       <div>정보 : 한식</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow10 = new naver.maps.InfoWindow({
        content: contentString10,
        maxWidth: 140,
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
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 서원동 신림로310</div>',
        '       <div>평점 : 4</div>',
        '       <div>정보 : 분식</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow11 = new naver.maps.InfoWindow({
        content: contentString11,
        maxWidth: 140,
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
    position: new naver.maps.LatLng(37.485948,126.929929),
    map: map
});  //맵핀

var contentString12 = [
    '<div class="iw_inner">',
        '   <h3>십원집</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 신림동 1424-19</div>',
        '       <div>평점 : 4</div>',
        '       <div>정보 : 한식</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow12 = new naver.maps.InfoWindow({
        content: contentString12,
        maxWidth: 140,
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
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 남부순환로 1597-14</div>',
        '       <div>평점 : 4</div>',
        '       <div>정보 : 한식</div>',
        '</div>'
    ].join('');  //핀 이벤트의 html

var infowindow13 = new naver.maps.InfoWindow({
        content: contentString13,
        maxWidth: 140,
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

