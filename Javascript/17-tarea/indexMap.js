let markers, map;

function initMap() {
  const posicion = {
    lat: -38.03163011469487,
    lng: -57.5593353210807
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: -38.03000754499395, 
        lng: -57.56139525752666,
        map,
        title: "Mar del Plata",
      },
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 36.164983935422484,
        lng: -86.78260332112534,
      },
      map,
      title: "Nashville",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 36.242150706885596,
        lng: -6.0775131009957715,
      },
      map,
      title: "El Palmar",
    })
  );
}