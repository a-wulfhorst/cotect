/**
 * Cotect User Endpoints
 * User endpoints REST API for cotect project.
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
// import BigDecimal from './BigDecimal';

/**
* The CasePlace model module.
* @module model/CasePlace
* @version 0.1.0
*/
export default class CasePlace {
    /**
    * Constructs a new <code>CasePlace</code>.
    * @alias module:model/CasePlace
    * @class
    * @param placeId {String} 
    */

    constructor(placeId) {
        
        
        this['place_id'] = placeId;
        
    }

    /**
    * Constructs a <code>CasePlace</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CasePlace} obj Optional instance to populate.
    * @return {module:model/CasePlace} The populated <code>CasePlace</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CasePlace();
                        
            
            if (data.hasOwnProperty('place_id')) {
                obj['place_id'] = ApiClient.convertToType(data['place_id'], 'String');
            }
            if (data.hasOwnProperty('visit_date')) {
                obj['visit_date'] = ApiClient.convertToType(data['visit_date'], 'Date');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], BigDecimal);
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], BigDecimal);
            }
            if (data.hasOwnProperty('place_name')) {
                obj['place_name'] = ApiClient.convertToType(data['place_name'], 'String');
            }
            if (data.hasOwnProperty('place_types')) {
                obj['place_types'] = ApiClient.convertToType(data['place_types'], ['String']);
            }
        }
        return obj;
    }

    /**
    * @member {String} place_id
    */
    place_id = undefined;
    /**
    * @member {Date} visit_date
    */
    visit_date = undefined;
    /**
    * @member {Number} latitude
    */
    latitude = undefined;
    /**
    * @member {Number} longitude
    */
    longitude = undefined;
    /**
    * @member {String} place_name
    */
    place_name = undefined;
    /**
    * @member {Array.<String>} place_types
    */
    place_types = undefined;




}
