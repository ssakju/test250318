// main.js

document.addEventListener("DOMContentLoaded", function () {
    const mapOptions = {
        center: new naver.maps.LatLng(37.5665, 126.9780), // 서울 시청 좌표
        zoom: 12
    };

    const map = new naver.maps.Map("map", mapOptions);
});
