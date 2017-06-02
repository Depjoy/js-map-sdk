/**
 * Mapbox GL JS plugin to replace Mapbox GL's default navigation and geolocation controls with a custom controls set that enables theme switching.
 * @class Airmap.Controls
 *
 * @param {String} [theme='standard'] Optional parameter that must defaults to 'standard'
 * @example
 * const map = new Airmap.Controls('light')
 * map.addControl(map)
 * @return {Controls} `this`
 */
const Controls = require('./controls')

// Assign it to the global scope.
window.Airmap = window.Airmap || {}
window.Airmap.Controls = Controls

module.exports = Controls