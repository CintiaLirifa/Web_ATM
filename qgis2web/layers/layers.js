var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ugm_shp_1 = new ol.format.GeoJSON();
var features_ugm_shp_1 = format_ugm_shp_1.readFeatures(json_ugm_shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ugm_shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ugm_shp_1.addFeatures(features_ugm_shp_1);
var lyr_ugm_shp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ugm_shp_1, 
                style: style_ugm_shp_1,
                interactive: true,
                title: '<img src="styles/legend/ugm_shp_1.png" /> ugm_shp'
            });
var format_bangunan_ugm_2 = new ol.format.GeoJSON();
var features_bangunan_ugm_2 = format_bangunan_ugm_2.readFeatures(json_bangunan_ugm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunan_ugm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunan_ugm_2.addFeatures(features_bangunan_ugm_2);
var lyr_bangunan_ugm_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bangunan_ugm_2, 
                style: style_bangunan_ugm_2,
                interactive: true,
                title: '<img src="styles/legend/bangunan_ugm_2.png" /> bangunan_ugm'
            });
var format_survey_bangunan_3 = new ol.format.GeoJSON();
var features_survey_bangunan_3 = format_survey_bangunan_3.readFeatures(json_survey_bangunan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_survey_bangunan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_survey_bangunan_3.addFeatures(features_survey_bangunan_3);
var lyr_survey_bangunan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_survey_bangunan_3, 
                style: style_survey_bangunan_3,
                interactive: true,
                title: '<img src="styles/legend/survey_bangunan_3.png" /> survey_bangunan'
            });
var format_atm_4 = new ol.format.GeoJSON();
var features_atm_4 = format_atm_4.readFeatures(json_atm_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_atm_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_atm_4.addFeatures(features_atm_4);
var lyr_atm_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_atm_4, 
                style: style_atm_4,
                interactive: true,
                title: '<img src="styles/legend/atm_4.png" /> atm'
            });
var format_jalan_ugm_5 = new ol.format.GeoJSON();
var features_jalan_ugm_5 = format_jalan_ugm_5.readFeatures(json_jalan_ugm_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_ugm_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_ugm_5.addFeatures(features_jalan_ugm_5);
var lyr_jalan_ugm_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_ugm_5, 
                style: style_jalan_ugm_5,
                interactive: true,
                title: '<img src="styles/legend/jalan_ugm_5.png" /> jalan_ugm'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ugm_shp_1.setVisible(true);lyr_bangunan_ugm_2.setVisible(true);lyr_survey_bangunan_3.setVisible(true);lyr_atm_4.setVisible(true);lyr_jalan_ugm_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ugm_shp_1,lyr_bangunan_ugm_2,lyr_survey_bangunan_3,lyr_atm_4,lyr_jalan_ugm_5];
lyr_ugm_shp_1.set('fieldAliases', {'id': 'id', });
lyr_bangunan_ugm_2.set('fieldAliases', {'osm_id': 'osm_id', 'building': 'building', 'roof_mater': 'roof_mater', 'name': 'name', 'addr_stree': 'addr_stree', 'isced_leve': 'isced_leve', 'capacity': 'capacity', 'addr_house': 'addr_house', 'amenity': 'amenity', 'building_m': 'building_m', 'access_roo': 'access_roo', });
lyr_survey_bangunan_3.set('fieldAliases', {'fid': 'fid', 'Nama_ATM': 'Nama_ATM', 'Jenis_Bank': 'Jenis_Bank', 'Min_nominal': 'Min_nominal', 'Setor_Tunai': 'Setor_Tunai', 'Alamat': 'Alamat', 'Jumlah_Mesin': 'Jumlah_Mesin', 'Ket': 'Ket', 'Foto_ATM': 'Foto_ATM', });
lyr_atm_4.set('fieldAliases', {'fid': 'fid', 'NamaATM': 'NamaATM', 'JenisBank': 'JenisBank', 'NominalTar': 'NominalTar', 'SetorTunai': 'SetorTunai', 'Alamat': 'Alamat', 'JumlahMesi': 'JumlahMesi', 'Keterangan': 'Keterangan', 'FotoATM': 'FotoATM', });
lyr_jalan_ugm_5.set('fieldAliases', {'osm_id': 'osm_id', 'smoothness': 'smoothness', 'bridge': 'bridge', 'surface': 'surface', 'name': 'name', 'layer': 'layer', 'oneway': 'oneway', 'width': 'width', 'highway': 'highway', 'tunnel': 'tunnel', });
lyr_ugm_shp_1.set('fieldImages', {'id': '', });
lyr_bangunan_ugm_2.set('fieldImages', {'osm_id': '', 'building': '', 'roof_mater': '', 'name': '', 'addr_stree': '', 'isced_leve': '', 'capacity': '', 'addr_house': '', 'amenity': '', 'building_m': '', 'access_roo': '', });
lyr_survey_bangunan_3.set('fieldImages', {'fid': 'Hidden', 'Nama_ATM': 'TextEdit', 'Jenis_Bank': 'TextEdit', 'Min_nominal': 'TextEdit', 'Setor_Tunai': 'CheckBox', 'Alamat': 'TextEdit', 'Jumlah_Mesin': 'TextEdit', 'Ket': 'TextEdit', 'Foto_ATM': 'ExternalResource', });
lyr_atm_4.set('fieldImages', {'fid': '', 'NamaATM': '', 'JenisBank': '', 'NominalTar': '', 'SetorTunai': '', 'Alamat': '', 'JumlahMesi': '', 'Keterangan': '', 'FotoATM': '', });
lyr_jalan_ugm_5.set('fieldImages', {'osm_id': '', 'smoothness': '', 'bridge': '', 'surface': '', 'name': '', 'layer': '', 'oneway': '', 'width': '', 'highway': '', 'tunnel': '', });
lyr_ugm_shp_1.set('fieldLabels', {'id': 'no label', });
lyr_bangunan_ugm_2.set('fieldLabels', {'osm_id': 'no label', 'building': 'no label', 'roof_mater': 'no label', 'name': 'no label', 'addr_stree': 'no label', 'isced_leve': 'no label', 'capacity': 'no label', 'addr_house': 'no label', 'amenity': 'no label', 'building_m': 'no label', 'access_roo': 'no label', });
lyr_survey_bangunan_3.set('fieldLabels', {'Nama_ATM': 'no label', 'Jenis_Bank': 'no label', 'Min_nominal': 'no label', 'Setor_Tunai': 'no label', 'Alamat': 'no label', 'Jumlah_Mesin': 'no label', 'Ket': 'no label', 'Foto_ATM': 'no label', });
lyr_atm_4.set('fieldLabels', {'fid': 'no label', 'NamaATM': 'header label', 'JenisBank': 'header label', 'NominalTar': 'header label', 'SetorTunai': 'header label', 'Alamat': 'header label', 'JumlahMesi': 'header label', 'Keterangan': 'header label', 'FotoATM': 'header label', });
lyr_jalan_ugm_5.set('fieldLabels', {'osm_id': 'no label', 'smoothness': 'no label', 'bridge': 'no label', 'surface': 'no label', 'name': 'no label', 'layer': 'no label', 'oneway': 'no label', 'width': 'no label', 'highway': 'no label', 'tunnel': 'no label', });
lyr_jalan_ugm_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});