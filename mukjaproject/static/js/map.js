var HOME_PATH = window.HOME_PATH || '.';
var shinrim = new naver.maps.LatLng(37.484218,126.929708),
    map = new naver.maps.Map('map', {
        center: shinrim,
        zoom: 17
    }),
    marker = new naver.maps.Marker({
        map: map,
        position: shinrim
    });

var contentString = [
        '<div class="iw_inner">',
        '   <h3>신림역</h3>',
        '       <img src="'+ HOME_PATH +'/img/파일경로 " width="15" height="15" alt="신림" class="thumb" /><br />',
        '       <a href="#" target="_blank"></a>',
        '</div>'
    ].join('');

var infowindow = new naver.maps.InfoWindow({
    content: contentString,
    maxWidth: 140,
    backgroundColor: "white",
    borderColor: "green",
    borderWidth: 5,
    anchorSize: new naver.maps.Size(10, 10),
    anchorSkew: true,
    anchorColor: "white",
    pixelOffset: new naver.maps.Point(30, -20)
});

naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, marker);
    }
});

//                               //

var burger = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.483875,126.929338),
    map: map
});  //맵핀

var contentString0 = [
    '<div class="iw_inner">',
    '   <h3>롯데리아</h3>',
    '       <img src="'+ HOME_PATH +'/img/파일경로" width="90" height="30" alt="롯데리아" class="thumb" /><br />',
    '       <a href="#" target="_blank"></a>',
        '</div>'
    ].join('');  //핀 이벤트의 html

    var infowindow0 = new naver.maps.InfoWindow({
        content: contentString0,
        maxWidth: 140,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 5,
        anchorSize: new naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "white",
        pixelOffset: new naver.maps.Point(30, -20)
    }); //핀 이벤트의 css
    naver.maps.Event.addListener(burger, "click", function(e) {
        if (infowindow0.getMap()) {
            infowindow0.close();
        } else {
            infowindow0.open(map, burger);
        }
    }); //이벤트 발생 if문

//                                  //

var c = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.483656,126.929491),
    map: map
});  //맵핀
