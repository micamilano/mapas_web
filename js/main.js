// Layers  ----------------

let lyrGoogleSatelite = new ol.layer.Tile({
  title: 'Google Satelite',     // A layer must have a title to appear in the layerswitcher
  //Setting type to 'base' results in it having a radio button and only one base layer being visibile at a time
  type: 'base',
  // Setting combine to true causes sub-layers to be hidden in the layerswitcher, only the parent is shown
  combine: true,
  visible: false,  //Defauld
  source: new ol.source.XYZ({
    url: "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
  })
})

let lyrGoogle = new ol.layer.Tile({
  title: 'Google Maps',
  type: 'base',
  visible: false,  
  source: new ol.source.XYZ({
    url: "https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
  })
})

let lyrOMS = new ol.layer.Tile({
  title: 'OMS',
  type: 'base',
  visible: true,  
  source: new ol.source.OSM()
})


// Mapa base 
var map = new ol.Map({    //crea un objeto OpenLayers Map.
  target: 'map',         //El valor de target es el id de div donde va el mapa
  layers: [             //layers-> lista de capas disponibles en el mapa 
    new ol.layer.Group({   // Goup layers
      title: 'Base maps',
      layers: [
        lyrOMS,
        lyrGoogle,
        lyrGoogleSatelite
      ],
    }),

    new ol.layer.Group({
      title: 'Overlayers',
      //fold: 'open',  // Adding a 'fold' property set to either 'open' or 'close' makes the group layer collapsible
      layers: [
        new ol.layer.Image({
          title: 'Countries',
          source: new ol.source.ImageArcGISRest({
            ratio: 1,
            params: { LAYERS: 'show:0' },
            url:
              'https://ons-inspire.esriuk.com/arcgis/rest/services/Administrative_Boundaries/Countries_December_2016_Boundaries/MapServer'
          })
        })
      ],
    }),
  ],
  view: new ol.View({     //view especificar el centro,  resolución y rotación del mapa
    center: ol.proj.fromLonLat([-60.51, -31.74]),
    //center: ol.proj.transform([-0.92, 52.96], 'EPSG:4326', 'EPSG:3857')
    zoom: 6
  })
});




// Add control to map
var layerSwitcher = new ol.control.LayerSwitcher({
  tipLabel: 'Legend',
  groupSelectStyle: 'children' // Can be 'children' [default], 'group' or 'none'
});
map.addControl(layerSwitcher);

