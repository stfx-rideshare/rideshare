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

import ApiClient from '../ApiClient';

/**
 * The Profile model module.
 * @module model/Profile
 * @version 0.0.0
 */
class Profile {
    /**
     * Constructs a new <code>Profile</code>.
     * @alias module:model/Profile
     * @param username {String} 
     * @param password {String} 
     * @param email {String} 
     */
    constructor(username, password, email) { 
        
        Profile.initialize(this, username, password, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, username, password, email) { 
        obj['username'] = username;
        obj['password'] = password;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>Profile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Profile} obj Optional instance to populate.
     * @return {module:model/Profile} The populated <code>Profile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Profile();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('bio')) {
                obj['bio'] = ApiClient.convertToType(data['bio'], 'String');
            }
            if (data.hasOwnProperty('profileimg')) {
                obj['profileimg'] = ApiClient.convertToType(data['profileimg'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Profile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Profile</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Profile.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['bio'] && !(typeof data['bio'] === 'string' || data['bio'] instanceof String)) {
            throw new Error("Expected the field `bio` to be a primitive type in the JSON string but got " + data['bio']);
        }
        // ensure the json data is a string
        if (data['profileimg'] && !(typeof data['profileimg'] === 'string' || data['profileimg'] instanceof String)) {
            throw new Error("Expected the field `profileimg` to be a primitive type in the JSON string but got " + data['profileimg']);
        }
        // ensure the json data is a string
        if (data['location'] && !(typeof data['location'] === 'string' || data['location'] instanceof String)) {
            throw new Error("Expected the field `location` to be a primitive type in the JSON string but got " + data['location']);
        }

        return true;
    }


}

Profile.RequiredProperties = ["username", "password", "email"];

/**
 * @member {String} username
 */
Profile.prototype['username'] = undefined;

/**
 * @member {String} password
 */
Profile.prototype['password'] = undefined;

/**
 * @member {String} email
 */
Profile.prototype['email'] = undefined;

/**
 * @member {String} bio
 */
Profile.prototype['bio'] = undefined;

/**
 * @member {String} profileimg
 */
Profile.prototype['profileimg'] = undefined;

/**
 * @member {String} location
 */
Profile.prototype['location'] = undefined;






export default Profile;

