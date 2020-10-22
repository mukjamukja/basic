var HOME_PATH = window.HOME_PATH || '.';
var shinrim = new naver.maps.LatLng(37.489889, 126.927168),
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
        '   <h3>식당 1</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_2.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 주소</div>',
        '       <div>평점 : 8</div>',
        '       <div>정보 : 정보1</div>',
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
    position: new naver.maps.LatLng(37.490113, 126.926183),
    map: map
});  //맵핀

var contentString2 = [
    '<div class="iw_inner">',
        '   <h3>식당 2</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 주소2</div>',
        '       <div>평점 : 5</div>',
        '       <div>정보 : 정보2</div>',
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
    position: new naver.maps.LatLng(37.493122, 126.926122),
    map: map
});  //맵핀

var contentString3 = [
    '<div class="iw_inner">',
        '   <h3>식당 3</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 주소3</div>',
        '       <div>평점 : 5</div>',
        '       <div>정보 : 정보3</div>',
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
    position: new naver.maps.LatLng(37.48896,126.927876 ),
    map: map
});  //맵핀

var contentString4 = [
    '<div class="iw_inner">',
        '   <h3>식당 4</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 주소4</div>',
        '       <div>평점 : 5</div>',
        '       <div>정보 : 정보4</div>',
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
    position: new naver.maps.LatLng(37.488833,126.927136 ),
    map: map
});  //맵핀

var contentString5 = [
    '<div class="iw_inner">',
        '   <h3>식당 5</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 주소5</div>',
        '       <div>평점 : 5</div>',
        '       <div>정보 : 정보5</div>',
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
    position: new naver.maps.LatLng(37.49242,126.925549 ),
    map: map
});  //맵핀

var contentString6 = [
    '<div class="iw_inner">',
        '   <h3>식당 6</h3>',
        '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
        '       <div>주소 : 주소6</div>',
        '       <div>평점 : 5</div>',
        '       <div>정보 : 정보6</div>',
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
        position: new naver.maps.LatLng(37.490274,126.927795),
        map: map
    });  //맵핀
    
var contentString7 = [
        '<div class="iw_inner">',
            '   <h3>식당 7</h3>',
            '      <a href="#" target="_blank"> <img src="'+ HOME_PATH +'../img/details/d4_3.png" width="15" height="15" alt="사진"></a>',
            '       <div>주소 : 주소7</div>',
            '       <div>평점 : 5</div>',
            '       <div>정보 : 정보7</div>',
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
