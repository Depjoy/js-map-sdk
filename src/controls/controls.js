/*
 *  AirMap Mapbox-GL-JS Controls Plugin
 */

const themes = [
    'standard',
    'dark',
    'light',
    'satellite'
]

const buttons = [
    '+', '-', '^', 'o'
]

const mapboxgl = require('mapbox-gl')
const { NavigationControl, GeolocateControl } = mapboxgl;


// create custom class to return navigation controls with custom styling
class CustomNavigationControl extends NavigationControl {

    getDiv(map) {
        this._map = map;
        this._container = document.createElement('div');
        this._container.setAttribute('class', 'custom-nav-controls')
        this._container.addEventListener('contextmenu', this._onContextMenu.bind(this));

        this._zoomInButton = this._createButton('zoom-in', 'Zoom In', map.zoomIn.bind(map));
        this._zoomOutButton = this._createButton('zoom-out', 'Zoom Out', map.zoomOut.bind(map));
        this._compass = this._createButton('compass', 'Reset North', map.resetNorth.bind(map));

        this._compassArrow = document.createElement('span', 'compass-arrow', this._compass);

        this._compass.addEventListener('mousedown', this._onCompassDown.bind(this));
        this._onCompassMove = this._onCompassMove.bind(this);
        this._onCompassUp = this._onCompassUp.bind(this);

        this._map.on('rotate', this._rotateCompassArrow);
        this._rotateCompassArrow();

        return this._container;
    }
}

// helper function to check if browser supports geolocation
let supportsGeolocation;

function checkGeolocationSupport(callback) {
    if (supportsGeolocation !== undefined) {
        callback(supportsGeolocation);

    } else if (window.navigator.permissions !== undefined) {
        // navigator.permissions has incomplete browser support
        // http://caniuse.com/#feat=permissions-api
        // Test for the case where a browser disables Geolocation because of an
        // insecure origin
        window.navigator.permissions.query({ name: 'geolocation' }).then((p) => {
            supportsGeolocation = p.state !== 'denied';
            callback(supportsGeolocation);
        });

    } else {
        supportsGeolocation = !!window.navigator.geolocation;
        callback(supportsGeolocation);
    }
}

// create custom class to return geolocation controls with custom styling
class CustomGeolocateControl extends GeolocateControl {

    getDiv(map) {
        this._map = map;
        this._container = document.createElement('div')
        this._container.setAttribute('class', 'mapboxgl-control custom-geolocate-controls')
        checkGeolocationSupport(this._setupUI)
        return this._container;
    }
}


class Controls {

    constructor() {
        this._map = null
        this._theme = map.opts.theme ? map.opts.theme : 'light'
        this._themeIdx = themes.indexOf(this._theme)
    }

    onAdd(map) {
        this._map = map

        this._container = document.createElement('div')
        this._container.setAttribute('class', 'mapboxgl-ctrl mapboxgl-ctrl-group')

        const navigationDiv = new CustomNavigationControl().getDiv(this._map);
        const geolocateDiv = new CustomGeolocateControl().getDiv(this._map);

        // create theme switcher button
        const themesButton = document.createElement('button')
        themesButton.setAttribute('class', 'mapboxgl-ctrl')
        
        themesButton.addEventListener('click', () => {
            this._themeIdx = ++this._themeIdx % 4
            this._theme = themes[this._themeIdx]

            map.fire('themeSwitch.click', {
                type: 'themeSwitch',
                theme: this._theme
            })
        })

        this._container.append(navigationDiv);
        this._container.append(geolocateDiv);

        this._container.append(themesButton)

        return this._container;
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}

module.exports = Controls;