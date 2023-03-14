/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* SchemaYml service.
* @module api/SchemaYmlApi
* @version 0.0.0
*/
export default class SchemaYmlApi {

    /**
    * Constructs a new SchemaYmlApi. 
    * @alias module:api/SchemaYmlApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the schemaYmlRetrieve operation.
     * @callback module:api/SchemaYmlApi~schemaYmlRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.format 
     * @param {module:model/String} opts.lang 
     * @param {module:api/SchemaYmlApi~schemaYmlRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */
    schemaYmlRetrieve(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'format': opts['format'],
        'lang': opts['lang']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = [];
      let accepts = ['application/vnd.oai.openapi', 'application/yaml', 'application/vnd.oai.openapi+json', 'application/json'];
      let returnType = {'String': Object};
      return this.apiClient.callApi(
        '/api/schema.yml', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}