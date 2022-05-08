// Layers  ----------------

let lyrGoogleSatelite = new ol.layer.Tile({
  title: 'Google Satelite',      // A layer must have a title to appear in the layerswitcher
  source: new ol.source.XYZ({
    url: "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
  })
})

let lyrGoogle = new ol.layer.Tile({
  title: 'Google Maps',
  source: new ol.source.XYZ({
    url: "https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
  })
})

let lyrOMS = new ol.layer.Tile({
  title: 'OMS',
  source: new ol.source.OSM()
})


// Mapa base 
var map = new ol.Map({    //crea un objeto OpenLayers Map.
  target: 'map',         //El valor de target es el id de <div> donde va el mapa
  layers: [             //layers se utiliza para la lista de capas disponibles en el mapa 
   new ol.layer.Group({   // crea un grupo de layers
    title: 'Base maps',
    layers: [
        lyrOMS
    ]
   })
  ],
  view: new ol.View({     //view especificar el centro,  resolución y la rotación del mapa
    center: ol.proj.fromLonLat([-60.51, -31.74]),
    zoom: 12
  })
});


// Add control to map
var layerSwitcher = new ol.control.LayerSwitcher({
  tipLabel: 'Legend', 
  groupSelectStyle: 'children' // Can be 'children' [default], 'group' or 'none'
});
map.addControl(layerSwitcher);

