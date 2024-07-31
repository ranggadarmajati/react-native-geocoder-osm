# react-native-geocoder-osm

Geocoding Service for React-Native, ReactJS, NodeJS.


This Project uses OpenStreetMap API

## Installation

```bash
npm install --save react-native-geocoder-osm
```
or

```bash
yarn add react-native-geocoder-osm
```
## Usage

```python
import GeocoderOsm from 'react-native-geocoder-osm';
// Position Geocoding
let coor = {
    lat:-7.014681299999999,,
    lng:107.6392892
}

// GeoCodePosition
GeocoderOsm.getGeoCodePosition(coor.lat, coor.lng).then((res) => {
  // res is an Array of geocoding object
  console.log("getGeoCodePosition", res)
}).catch((e) => {
  console.log('getGeoCodePosition error', e)
});

// GeoAddress
let place = 'baleendah';
GeocoderOsm.getGeoAddress(place).then((res) => {
  // res is an Array of geocoding object
  console.log("getGeoAddress", res)
}).catch((e) => {
  console.log('getGeoAddress error', e)
});
```

## Geocoding Object Format
Both iOS and Android will return the following object:
```bash
{
        "place_id": 14298080,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 1308657314,
        "boundingbox": [
            "-7.0383774",
            "-6.9983774",
            "107.6105706",
            "107.6505706"
        ],
        "lat": "-7.0183774",
        "lon": "107.6305706",
        "display_name": "Baleendah, Jawa Barat, 40375, Indonesia",
        "class": "place",
        "type": "village",
        "importance": 0.375,
        "icon": "https://nominatim.openstreetmap.org/images/mapicons/poi_place_village.p.20.png",
        "address": {
            "village": "Baleendah",
            "state": "Jawa Barat",
            "postcode": "40375",
            "country": "Indonesia",
            "country_code": "id"
        }
    }
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
