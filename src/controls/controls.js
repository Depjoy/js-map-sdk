/*
 * AirMap Mapbox-GL-JS Controls Plugin
*/

const { NavigationControl, GeolocateControl } = require('mapbox-gl')

const className = 'mapboxgl-ctrl'
const customClassName = 'js-plugin-ctrl'

// creates custom navigation class to return navigation controls with custom styling
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

// native mapboxgl helper function to check if browser supports geolocation
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

// creates custom class to return geolocation controls with custom styling
class CustomGeolocateControl extends GeolocateControl { 

    getDiv(map) {
        this._map = map;
        this._container = document.createElement('div')
        this._container.setAttribute('class', `${customClassName} ${customClassName}-group custom-geolocate-controls`)
        checkGeolocationSupport(this._setupUI)
        return this._container;
    }
}


/**
 * Creates a new custom controls instance. 
 * @param {String} [theme='standard'] Optional parameter that must defaults to 'standard'
*/

class Controls {

    constructor(theme = 'standard') {
        this._map = null
        this._theme = theme
        this._container = null
    }

    /**
    * Adds the custom controls to the map. This is called by `map.addControl`,
    */
    onAdd(map) {
        this._map = map

        this._container = document.createElement('div')
        this._container.setAttribute('class', 'mapboxgl-ctrl mapboxgl-ctrl-group')

        this.setup()
        return this._container
    }

    /**
     * Removes the control from the map it has been added to. This is called by `map.removeControl`,
     * which is the recommended method to remove controls.
     *
     * @returns {Controls} - `this`
    */
    onRemove(map) {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
        return this
    }

    setup() {
        const navigationDiv = new CustomNavigationControl().getDiv(this._map);
        const geolocateDiv = new CustomGeolocateControl().getDiv(this._map);

        // create theme switcher button
        const themesButton = document.createElement('button')
        themesButton.setAttribute('class', `${customClassName} custom-theme-control`)
        const themesLogo = document.createElement('span')
        themesLogo.setAttribute('class', `${customClassName}-icon ${customClassName}-themes`)
        themesButton.append(themesLogo)
        
        // adds an event listener that emits a themeSwitch.click event when the themes button is pressed
        themesButton.addEventListener('click', () => {
            this._map.fire('themeSwitch.click', {
                type: 'themeSwitch',
                theme: this._theme
            })
        })

        // appends controls to the container
        this._container.append(navigationDiv)
        this._container.append(geolocateDiv)
        this._container.append(themesButton)
    }
}

module.exports = Controls;