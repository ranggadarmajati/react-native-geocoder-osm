/**
 * This package for Geocoding
 * @author rangga darmajati <rangga.android69@gmail.com>
 * @since april 2020
 * @copyright rangga darmajati
 * @license MIT
 */

import { apiUrl } from '../src/services/httpClient';

class GeocoderOsm {
    getGeoCodePosition(lat,lng){
        let apiuri = apiUrl.osm+`&q=${lat},${lng}`;
        const requestOptions = {
            method: 'GET'
        };
        return fetch(`${apiuri}`, requestOptions).then((response) => {
           return response.json()
        }).catch((e) => {
            console.error(e)
            return e
        })
    }

    getGeoAddress(place){
        let apiuri = apiUrl.osm+`&q=${place}`;
        const requestOptions = {
            method: 'GET'
        };
        return fetch(`${apiuri}`, requestOptions).then((response) => {
           return response.json()
        }).catch((e) => {
            console.error(e)
            return e
        })
    }
}

export default new GeocoderOsm