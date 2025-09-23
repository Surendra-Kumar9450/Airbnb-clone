// mapboxgl.accessToken = mapToken;

// const map = new mapboxgl.Map({
//   container: "map", // container ID
//   style: "mapbox://styles/mapbox/streets-v12", // Style URl
//   center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
//   zoom: 9, // starting zoom
// });

// const marker = new mapboxgl.marker({ color: "red" })
//   .setLngLat(listing.geometry.coordinates)
//   .setPopup(
//     new mapboxgl.Popup({ offset: 25 }).setHTML(
//       `<h4>${listing.title}<h4/><p>Exact location provided after booking<p/>`
//     )
//   )
//   .addTo(map);

var map = L.map("map").setView([28.6139, 77.209], 10); // New Delhi coords

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

L.marker([28.6139, 77.209])
  .addTo(map)
  .bindPopup("New Delhi, India")
  .openPopup();
