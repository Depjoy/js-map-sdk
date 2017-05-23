/**
 * Mapbox GL JS plugin to view and interact with AirMap's Airspace Rules.
 * @class Airmap.Rules
 *
 * @param {Object} options
 * @param {String} [options.accessToken=null] Required unless `mapboxgl.accessToken` is set globally
 * @example
 * const map = new Airmap.Rules()
 * map.addControl(map)
 * @return {Rules} `this`
 */
const Controls = require('./controls')

// Assign it to the global scope.
window.Airmap = window.Airmap || {}
window.Airmap.Controls = Controls

module.exports = Controls