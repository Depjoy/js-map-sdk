/*
 *  AirMap Mapbox-GL-JS Controls Plugin
 */

const themes = [
    'standard',
    'dark',
    'light',
    'satellite'
]

const { NavigationControl, GeolocateControl } = require('mapbox-gl')

const className = 'mapboxgl-ctrl'
const customClassName = 'js-plugin-ctrl'

// create custom class to return navigation controls with custom styling
class CustomNavigationControl extends NavigationControl {

    getDiv(map) {
        this._map = map;
        this._container = document.createElement('div');
        this._container.setAttribute('class', `${customClassName} ${customClassName}-group custom-nav-controls`)
        this._container.addEventListener('contextmenu', this._onContextMenu.bind(this));

        // zoom in button
        this._zoomInButton = this._createButton(`${customClassName}`, 'Zoom In', map.zoomIn.bind(map));
        this._zoomInPlusSign = document.createElement('span')
        this._zoomInPlusSign.setAttribute('class', `${customClassName}-icon ${customClassName}-zoom-in`)
        this._zoomInButton.append(this._zoomInPlusSign)

        // zoom out button
        this._zoomOutButton = this._createButton(`${customClassName}`, 'Zoom Out', map.zoomOut.bind(map));
        this._zoomOutMinusSign = document.createElement('span')
        this._zoomOutMinusSign.setAttribute('class', `${customClassName}-icon ${customClassName}-zoom-out`)
        this._zoomOutButton.append(this._zoomOutMinusSign)

        // compass button
        this._compass = this._createButton(`${className}-icon ${className}-compass`, 'Reset North', map.resetNorth.bind(map));
        this._compassArrow = document.createElement('span')
        this._compassArrow.setAttribute('class', `${className}-compass-arrow`)
        this._compass.append(this._compassArrow)

        // add compass event listeners
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
        this._container.setAttribute('class', `${customClassName} ${customClassName}-group custom-geolocate-controls`)
        checkGeolocationSupport(this._setupUI)
        return this._container;
    }
}


class Controls {

    constructor(theme = 'standard') {

        this._map = null
        this._theme = theme
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
        themesButton.setAttribute('class', `${customClassName} custom-theme-control`)
        const themesLogo = document.createElement('span')
        themesLogo.setAttribute('class', `${customClassName}-icon ${customClassName}-themes`)
        themesButton.append(themesLogo)
        
        themesButton.addEventListener('click', () => {
            this._themeIdx = ++this._themeIdx % 4
            this._theme = themes[this._themeIdx]

            map.fire('themeSwitch.click', {
                type: 'themeSwitch',
                theme: this._theme
            })
        })

        this._container.append(navigationDiv)
        this._container.append(geolocateDiv)
        this._container.append(themesButton)

        return this._container
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}

module.exports = Controls;