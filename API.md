<a name="AirspaceMap"></a>

## AirspaceMap
Class that wraps Mapbox GL and allows for working with airspace layers.

**Kind**: global class  

* [AirspaceMap](#AirspaceMap)
    * [new AirspaceMap(config, opts)](#new_AirspaceMap_new)
    * [.mapboxgl](#AirspaceMap+mapboxgl)
    * [.setLayers(layers)](#AirspaceMap+setLayers) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
    * [.getLayers()](#AirspaceMap+getLayers) ⇒ <code>Array</code>
    * [.addLayer(layer)](#AirspaceMap+addLayer) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
    * [.removeLayer(layer)](#AirspaceMap+removeLayer) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
    * [.hasLayer(layer)](#AirspaceMap+hasLayer) ⇒ <code>boolean</code>
    * [.move(latitude, longitude, [zoom])](#AirspaceMap+move) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
    * [.flyTo([options])](#AirspaceMap+flyTo) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
    * [.zoom(zoom, [options])](#AirspaceMap+zoom) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
    * [.zoomIn(delta)](#AirspaceMap+zoomIn) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
    * [.zoomOut(delta)](#AirspaceMap+zoomOut) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
    * [.resize()](#AirspaceMap+resize) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
    * [.fitBounds(bounds, [options])](#AirspaceMap+fitBounds) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
    * [.getCenter()](#AirspaceMap+getCenter) ⇒ <code>Object</code>
    * [.getZoom()](#AirspaceMap+getZoom) ⇒ <code>number</code>
    * [.getSource(id)](#AirspaceMap+getSource) ⇒ <code>Object</code>
    * [.addSource(id, source)](#AirspaceMap+addSource)
    * [.addControl(control)](#AirspaceMap+addControl) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
    * [.removeControl(control)](#AirspaceMap+removeControl) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
    * [.getTheme()](#AirspaceMap+getTheme) ⇒ <code>string</code>
    * [.theme(theme)](#AirspaceMap+theme)
    * [.getContainer()](#AirspaceMap+getContainer) ⇒ <code>HTMLElement</code>
    * [.addMarker(latitude, longitude, [properties])](#AirspaceMap+addMarker) ⇒ <code>string</code>
    * [.removeMarker(id)](#AirspaceMap+removeMarker) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
    * [.remove()](#AirspaceMap+remove)
    * [.on(type, listener)](#AirspaceMap+on)
    * [.off(type, listener)](#AirspaceMap+off)

<a name="new_AirspaceMap_new"></a>

### new AirspaceMap(config, opts)
Configure map, set options, and load stylesheets.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| config | <code>Object</code> |  | AirMap configuration object containing an API Key and Mapbox Access Token. |
| config.airmap.api_key | <code>string</code> |  | AirMap API Key from the developer dashboard. |
| config.mapbox.access_token | <code>string</code> |  | Mapbox access token. |
| opts | <code>Object</code> |  | Map options. |
| opts.container | <code>string</code> |  | ID of the DOM element to load the map inside. |
| [opts.center] | <code>Array</code> | <code>[0,0]</code> | An array with [latitude, longitude] coordinates for where the map should be centered on load. |
| [opts.layers] | <code>Array</code> | <code>[]</code> | Airspace layers to make visible on load. |
| [opts.theme] | <code>string</code> | <code>&quot;standard&quot;</code> | Map theme: standard, dark, light, or satellite. |
| [opts.zoom] | <code>number</code> | <code>7</code> | Map zoom level on load. |
| [opts.pitch] | <code>number</code> | <code>0</code> | Map pitch on load. |
| [opts.bearing] | <code>number</code> | <code>0</code> | Map bearing on load. |
| [opts.interactive] | <code>boolean</code> | <code>true</code> | Specifies whether users can click on and manipulate the map. |
| [opts.showControls] | <code>boolean</code> | <code>true</code> | Show controls for zoom and bearing. |
| [opts.showPopups] | <code>boolean</code> | <code>true</code> | Show a popup with airspace information when a user clicks on the map. |
| [opts.showSearch] | <code>boolean</code> | <code>false</code> | Render a search bar that allows users to query for a specific location. |
| [opts.useLocation] | <code>boolean</code> | <code>true</code> | Attempt to center the map on a user location. |
| [opts.createFlights] | <code>boolean</code> | <code>false</code> | Insert button in popups that allows users to create a flight using DNAS Basic Integration. |
| [opts.suppressWarnings] | <code>boolean</code> | <code>false</code> | Suppress developer warnings. |

<a name="AirspaceMap+mapboxgl"></a>

### airspaceMap.mapboxgl
Returns the underlying mapboxgl.Map instance, providing access to any
Mapbox GL methods not wrapped in this SDK.

**Kind**: instance property of <code>[AirspaceMap](#AirspaceMap)</code>  
**Access:** public  
<a name="AirspaceMap+setLayers"></a>

### airspaceMap.setLayers(layers) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
Set the visible layers on the map and hide all other layers.

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>[AirspaceMap](#AirspaceMap)</code> - - `this`  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| layers | <code>Array</code> | List of layer names you want the map to display. |

<a name="AirspaceMap+getLayers"></a>

### airspaceMap.getLayers() ⇒ <code>Array</code>
Retrieve a list of currently active layers.

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>Array</code> - layers - List of visible layers.  
**Access:** public  
<a name="AirspaceMap+addLayer"></a>

### airspaceMap.addLayer(layer) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
Show an airspace layer if it is not currently visible.

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>[AirspaceMap](#AirspaceMap)</code> - - `this`  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| layer | <code>string</code> &#124; <code>object</code> | Name of the airspace layer to add. If an object is passed, this will be handed off to [mapboxgl.Map.addLayer](https://www.mapbox.com/mapbox-gl-js/api/#addLayer). |

<a name="AirspaceMap+removeLayer"></a>

### airspaceMap.removeLayer(layer) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
Hide an airspace layer if it is currently visible.

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>[AirspaceMap](#AirspaceMap)</code> - - `this`  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| layer | <code>string</code> | Name of the layer to add. |

<a name="AirspaceMap+hasLayer"></a>

### airspaceMap.hasLayer(layer) ⇒ <code>boolean</code>
Checks if the provided layer is currently active on the map.

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| layer | <code>string</code> | Name of the layer to check. |

<a name="AirspaceMap+move"></a>

### airspaceMap.move(latitude, longitude, [zoom]) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
Moves the map to a new location.

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>[AirspaceMap](#AirspaceMap)</code> - - `this`  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| latitude | <code>number</code> | Latitude of the location to move to. |
| longitude | <code>number</code> | Longitude of the location to move to. |
| [zoom] | <code>string</code> | Zoom level when centering on the new location. |

<a name="AirspaceMap+flyTo"></a>

### airspaceMap.flyTo([options]) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
Wraps Mapbox GL's Map.flyTo.
[[docs]](https://www.mapbox.com/mapbox-gl-js/api/#Map#flyTo)

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>[AirspaceMap](#AirspaceMap)</code> - - `this`  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Mapbox GL [Map.flyTo options](https://www.mapbox.com/mapbox-gl-js/api/#flyTo). |

<a name="AirspaceMap+zoom"></a>

### airspaceMap.zoom(zoom, [options]) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
Wraps Mapbox GL's Map.zoomTo.
[[docs]](https://www.mapbox.com/mapbox-gl-js/api/#Map#zoomTo)

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>[AirspaceMap](#AirspaceMap)</code> - - `this`  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| zoom | <code>number</code> | The zoom level to transition to. |
| [options] | <code>Object</code> | Mapbox GL [AnimationOptions](https://www.mapbox.com/mapbox-gl-js/api/#AnimationOptions). |

<a name="AirspaceMap+zoomIn"></a>

### airspaceMap.zoomIn(delta) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
Zoom in to the map by a specified amount.

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>[AirspaceMap](#AirspaceMap)</code> - - `this`  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| delta | <code>number</code> | The amount to add to the current zoom level. |

<a name="AirspaceMap+zoomOut"></a>

### airspaceMap.zoomOut(delta) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
Zoom out of the map by a specified amount.

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>[AirspaceMap](#AirspaceMap)</code> - - `this`  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| delta | <code>number</code> | The amount to subtract from the current zoom level. |

<a name="AirspaceMap+resize"></a>

### airspaceMap.resize() ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
Wraps Mapbox GL's Map.resize. Resizes the map according to the dimensions of its container element.
[[docs]](https://www.mapbox.com/mapbox-gl-js/api/#Map#resize)

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>[AirspaceMap](#AirspaceMap)</code> - - `this`  
**Access:** public  
<a name="AirspaceMap+fitBounds"></a>

### airspaceMap.fitBounds(bounds, [options]) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
Wraps Mapbox GL's Map.fitBounds.
Pans and zooms the map to contain its visible area within the specified geographical bounds.
[[docs]](https://www.mapbox.com/mapbox-gl-js/api/#Map#fitBounds)

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>[AirspaceMap](#AirspaceMap)</code> - - `this`  
**Access:** public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| bounds | <code>Array</code> |  | Mapbox GL [LngLatBoundsLike](https://www.mapbox.com/mapbox-gl-js/api/#LngLatBoundsLike). |
| [options] | <code>Object</code> | <code></code> | Mapbox GL [fitBounds options](https://www.mapbox.com/mapbox-gl-js/api/#Map#fitBounds). |

<a name="AirspaceMap+getCenter"></a>

### airspaceMap.getCenter() ⇒ <code>Object</code>
Wraps Mapbox GL's Map.getCenter. Returns the map's geographical centerpoint.
[[docs]](https://www.mapbox.com/mapbox-gl-js/api/#Map#getCenter)

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>Object</code> - LngLat - Mapbox GL [LngLat](https://www.mapbox.com/mapbox-gl-js/api/#LngLat).  
**Access:** public  
<a name="AirspaceMap+getZoom"></a>

### airspaceMap.getZoom() ⇒ <code>number</code>
Wraps Mapbox GL's Map.getZoom. Returns the map's current zoom level.
[[docs]](https://www.mapbox.com/mapbox-gl-js/api/#Map#getZoom)

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>number</code> - zoom - Current zoom level.  
**Access:** public  
<a name="AirspaceMap+getSource"></a>

### airspaceMap.getSource(id) ⇒ <code>Object</code>
Wraps Mapbox GL's Map.getSource. Returns the source with the specified ID in the map's style.
[[docs]](https://www.mapbox.com/mapbox-gl-js/api/#Map#getSource)

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>Object</code> - source - The style source with the specified ID, or undefined if the ID corresponds to no existing sources.  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the source to get. |

<a name="AirspaceMap+addSource"></a>

### airspaceMap.addSource(id, source)
Wraps Mapbox GL's Map.addSource.
[[docs]](https://www.mapbox.com/mapbox-gl-js/api/#Map#addSource)

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the source to get. |
| source | <code>Object</code> | The source object, conforming to the Mapbox Style Specification's [source definition](https://www.mapbox.com/mapbox-gl-style-spec/#sources). |

<a name="AirspaceMap+addControl"></a>

### airspaceMap.addControl(control) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
Wraps Mapbox GL's Map.addControl.
[[docs]](https://www.mapbox.com/mapbox-gl-js/api/#Map#addControl)

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>[AirspaceMap](#AirspaceMap)</code> - - `this`  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| control | <code>Object</code> | The [Control](https://www.mapbox.com/mapbox-gl-js/api/#Control) to add. |

<a name="AirspaceMap+removeControl"></a>

### airspaceMap.removeControl(control) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
Wraps Mapbox GL's Map.removeControl.
[[docs]](https://www.mapbox.com/mapbox-gl-js/api/#Map#removeControl)

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>[AirspaceMap](#AirspaceMap)</code> - - `this`  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| control | <code>Object</code> | The [Control](https://www.mapbox.com/mapbox-gl-js/api/#Control) to remove. |

<a name="AirspaceMap+getTheme"></a>

### airspaceMap.getTheme() ⇒ <code>string</code>
Returns the theme that is currently active.

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>string</code> - theme - Theme that is currently displayed on the map.  
**Access:** public  
<a name="AirspaceMap+theme"></a>

### airspaceMap.theme(theme)
Updates the current theme by requesting new map tiles.

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Throws**:

- <code>BadOptionError</code> - Will throw an error if the provided theme is invalid.

**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| theme | <code>string</code> | Theme to display on the map. |

<a name="AirspaceMap+getContainer"></a>

### airspaceMap.getContainer() ⇒ <code>HTMLElement</code>
Wraps Mapbox GL's Map.getContainer.
[[docs]](https://www.mapbox.com/mapbox-gl-js/api/#Map#getContainer)

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>HTMLElement</code> - - The map's container.  
**Access:** public  
<a name="AirspaceMap+addMarker"></a>

### airspaceMap.addMarker(latitude, longitude, [properties]) ⇒ <code>string</code>
Drops a marker at the provided location.

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>string</code> - id - An ID referencing the marker.  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| latitude | <code>number</code> | Latitude of the location. |
| longitude | <code>number</code> | Longitude of the location. |
| [properties] | <code>Object</code> | Additional properties to add to the marker feature. |

<a name="AirspaceMap+removeMarker"></a>

### airspaceMap.removeMarker(id) ⇒ <code>[AirspaceMap](#AirspaceMap)</code>
Drops a marker at the provided location.

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Returns**: <code>[AirspaceMap](#AirspaceMap)</code> - - `this`  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | ID of the marker to remove. |

<a name="AirspaceMap+remove"></a>

### airspaceMap.remove()
Wraps Mapbox GL's Map.remove. Destroys the map and its underlying resources.
[[docs]](https://www.mapbox.com/mapbox-gl-js/api/#Map#remove)

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Access:** public  
<a name="AirspaceMap+on"></a>

### airspaceMap.on(type, listener)
Wraps Mapbox GL's method to add an event listener.
[[docs]](https://www.mapbox.com/mapbox-gl-js/api/#Evented#on)

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The event type to add a listener for. |
| listener | <code>function</code> | The function to be called when the event is fired. |

<a name="AirspaceMap+off"></a>

### airspaceMap.off(type, listener)
Wraps Mapbox GL's method to remove an event listener.
[[docs]](https://www.mapbox.com/mapbox-gl-js/api/#Evented#off)

**Kind**: instance method of <code>[AirspaceMap](#AirspaceMap)</code>  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The event type to remove listeners for. |
| listener | <code>function</code> | The listener function to remove. |

