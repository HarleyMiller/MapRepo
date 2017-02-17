(function() {
	var map = new google.maps.Map(document.querySelector('.map-wrapper')),marker;
	
	function initMap(position) {
		map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
			map.setZoom(14);
		marker = new google.maps.Marker({
			position: { lat: position.coords.latitude, lng: position.coords.longitude },
			map: map,
			title: "Google Maps Api Test"
		});
	}

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(initMap, handleError);
		} else {
			console.log('we were on a break');
		}

		function handleError() {
			console.log('something went wrong');
		}
})();