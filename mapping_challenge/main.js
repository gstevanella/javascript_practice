// map inside html
// inside a <div> in the html

  // Set up initial map center and zoom level
  const map = L.map('map', {
    center: [40.7648,-73.9808], // centering map
    zoom: 15,  // note to self from 1 to 18 -- decrease to zoom out, increase to zoom in
    scrollWheelZoom: true,
    tap: false
  });

  /* Control panel to display map layers */
  let controlLayers = L.control.layers( null, null, null, null, {
    position: "topright",
    collapsed: true
  }).addTo(map);


  /* Stamen colored basemap Streets tiles with labels */
    const basemapStreets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 0,
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
    controlLayers.addBaseLayer(basemapStreets, 'OSM Map');
 
  const basemapStamenTerrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 19,
    ext: 'png'
}).addTo(map);
controlLayers.addBaseLayer(basemapStamenTerrain, 'Terrain Map');


  // library utilised: https://leaflet-extras.github.io/leaflet-providers/preview/

  // Read markers data from data.csv
  $.get('resto.csv', function(csvString) {

    // Use PapaParse to convert string to array of objects
    const data = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;

    // incorporating older syntax with papa.parse - reverting to var
    for (var i in data) {
      var row = data[i];
     // var imagePopup = row.filepath // removed

      let popupContent = "<p>"+"This is where the "+row.RESTAURANT+" is </p>";
      let marker = L.marker([row.LATITUDE, row.LONGITUDE], {
        opacity: 0.9, 
// Customising icon
          icon: L.icon({
          iconUrl:  'location.png',
          iconSize: [30, 30] })
      }).bindPopup(popupContent);

      marker.addTo(map);


    }


  });
