/* tslint:disable */
/* eslint-disable */
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
 */


import * as runtime from '../runtime';
import type {
  PatchedProfile,
  Profile,
} from '../models';
import {
    PatchedProfileFromJSON,
    PatchedProfileToJSON,
    ProfileFromJSON,
    ProfileToJSON,
} from '../models';

export interface ApiProfilesCreateRequest {
    profile: Profile;
}

export interface ApiProfilesDestroyRequest {
    id: number;
}

export interface ApiProfilesPartialUpdateRequest {
    id: number;
    patchedProfile?: PatchedProfile;
}

export interface ApiProfilesRetrieveRequest {
    id: number;
}

export interface ApiProfilesUpdateRequest {
    id: number;
    profile: Profile;
}

/**
 * 
 */
export class ApiApi extends runtime.BaseAPI {

    /**
     */
    async apiProfilesCreateRaw(requestParameters: ApiProfilesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Profile>> {
        if (requestParameters.profile === null || requestParameters.profile === undefined) {
            throw new runtime.RequiredError('profile','Required parameter requestParameters.profile was null or undefined when calling apiProfilesCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/profiles/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProfileToJSON(requestParameters.profile),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProfileFromJSON(jsonValue));
    }

    /**
     */
    async apiProfilesCreate(requestParameters: ApiProfilesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Profile> {
        const response = await this.apiProfilesCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiProfilesDestroyRaw(requestParameters: ApiProfilesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiProfilesDestroy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/profiles/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiProfilesDestroy(requestParameters: ApiProfilesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiProfilesDestroyRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiProfilesListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Profile>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/profiles/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProfileFromJSON));
    }

    /**
     */
    async apiProfilesList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Profile>> {
        const response = await this.apiProfilesListRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async apiProfilesPartialUpdateRaw(requestParameters: ApiProfilesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Profile>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiProfilesPartialUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/profiles/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedProfileToJSON(requestParameters.patchedProfile),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProfileFromJSON(jsonValue));
    }

    /**
     */
    async apiProfilesPartialUpdate(requestParameters: ApiProfilesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Profile> {
        const response = await this.apiProfilesPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiProfilesRetrieveRaw(requestParameters: ApiProfilesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Profile>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiProfilesRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/profiles/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProfileFromJSON(jsonValue));
    }

    /**
     */
    async apiProfilesRetrieve(requestParameters: ApiProfilesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Profile> {
        const response = await this.apiProfilesRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiProfilesUpdateRaw(requestParameters: ApiProfilesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Profile>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiProfilesUpdate.');
        }

        if (requestParameters.profile === null || requestParameters.profile === undefined) {
            throw new runtime.RequiredError('profile','Required parameter requestParameters.profile was null or undefined when calling apiProfilesUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/profiles/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProfileToJSON(requestParameters.profile),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProfileFromJSON(jsonValue));
    }

    /**
     */
    async apiProfilesUpdate(requestParameters: ApiProfilesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Profile> {
        const response = await this.apiProfilesUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}