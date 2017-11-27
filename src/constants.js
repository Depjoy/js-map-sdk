exports.mapboxStyles = 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.css'
exports.mapboxGeocoder = 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v2.0.1/mapbox-gl-geocoder.js'
exports.mapboxGeocoderStyles = 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v2.0.1/mapbox-gl-geocoder.css'
exports.poweredByLogo = 'https://cdn.airmap.io/img/airmap-powered-logo.png'
exports.poweredByLogoWhite = 'https://cdn.airmap.io/img/airmap-powered-logo-white.png'
exports.minZoom = 0
exports.maxZoom = 18

exports.supportedThemes = [
    'standard',
    'dark',
    'light',
    'satellite'
]

exports.staticLayers = [
    'aerial_recreational_areas',
    'airports_recreational',
    'airports_commercial',
    'airports_recreational_private',
    'airports_commercial_private',
    'cities',
    'class_b',
    'class_c',
    'class_d',
    'class_e0',
    'custom',
    'emergencies',
    'fires',
    'hazard_areas',
    'heliports',
    'heliports-marker',
    'hospitals',
    'national_parks',
    'noaa',
    'power_plants',
    'prisons',
    'schools',
    'sua_prohibited',
    'sua_restricted',
    'tfrs',
    'universities',
    'wildfires'
]

exports.displayTypes = {
    'aerial_recreational_areas': 'Aerial Recreational Areas',
    'airports_recreational': 'Airports (Recreational Rules)',
    'airports_recreational_private': 'Private Airports (Recreational Rules)',
    'airports_commercial': 'Airports (Commercial Rules)',
    'airports_commercial_private': 'Private Airports (Commercial Rules)',
    'cities': 'Cities',
    'class_b': 'Controlled Airspace (Class B)',
    'class_c': 'Controlled Airspace (Class C)',
    'class_d': 'Controlled Airspace (Class D)',
    'class_e0': 'Controlled Airspace (Class E to Ground)',
    'custom': 'Custom',
    'emergencies': 'First Responder Activity',
    'fires': 'Fires',
    'hazard_areas': 'Hazard Areas',
    'heliports': 'Heliports',
    'hospitals': 'Hospitals',
    'national_parks': 'National Parks',
    'noaa': 'NOAA Marine Protection Areas',
    'power_plants': 'Power Plants',
    'prisons': 'Prisons',
    'sua_prohibited': 'Prohibited Special Use Airspace',
    'sua_restricted': 'Restricted Special Use Airspace',
    'schools': 'Schools',
    'stadiums': 'Stadiums',
    'tfrs': 'Temporary Flight Restrictions',
    'universities': 'Universities & Colleges',
    'wildfires': 'Wildfires'
}

exports.displayProperties = {
    name: 'Name',
    type: 'Type',
    tfr_type: 'TFR Type',
    url: 'URL',
    phone: 'Phone',
    icao: 'ICAO',
    date_effective: 'Start',
    date_expire: 'End',
    size: 'Size'
}

exports.supportedLabelLocaleCodes = [
    'en',
    'es',
    'de',
    'fr',
    'ru',
    'zh'
]

exports.labelLayers = [
    'airport-label',
    'country-label-lg',
    'country-label-md',
    'country-label-sm',
    'housenum-label',
    'marine-label-lg-ln',
    'marine-label-lg-pt',
    'marine-label-md-ln',
    'marine-label-md-pt',
    'marine-label-sm-ln',
    'marine-label-sm-pt',
    'place-city-lg-n',
    'place-city-lg-s',
    'place-city-md-n',
    'place-city-md-s',
    'place-city-sm',
    'place-hamlet',
    'place-island',
    'place-islet-archipelago-aboriginal',
    'place-neighbourhood',
    'place-residential',
    'place-suburb',
    'place-town',
    'place-village',
    'poi-parks_scalerank',
    'poi-parks-scalerank1',
    'poi-parks-scalerank2',
    'poi-parks-scalerank3',
    'poi-scalerank1',
    'poi-scalerank2',
    'poi-scalerank3',
    'poi-scalerank4-l1',
    'poi-scalerank4-l15',
    'rail-label',
    'road-label-large',
    'road-label-medium',
    'road-label-small',
    'state-label-lg',
    'state-label-md',
    'state-label-sm',
    'water-label',
    'water-label-sm',
    'waterway-label'
]
