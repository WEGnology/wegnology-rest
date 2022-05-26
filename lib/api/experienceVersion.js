var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Deletes an experience version
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Organization, all.User, all.User.cli, experienceVersion.*, or experienceVersion.delete.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} experienceVersionIdOrName - Version ID or version name associated with the experience version
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If experience version was successfully deleted (https://api.app.wnology.io/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if experience version was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.delete = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/experience/versions/{experienceVersionIdOrName}');
    var pathParams = {};
    var req = {
      method: 'DELETE',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.experienceVersionIdOrName) { pathParams.experienceVersionIdOrName = params.experienceVersionIdOrName; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Retrieves information on an experience version
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.cli, all.User.read, experienceVersion.*, or experienceVersion.get.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} experienceVersionIdOrName - Version ID or version name associated with the experience version
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Experience version information (https://api.app.wnology.io/#/definitions/experienceVersion)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if experience version was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.get = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/experience/versions/{experienceVersionIdOrName}');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.experienceVersionIdOrName) { pathParams.experienceVersionIdOrName = params.experienceVersionIdOrName; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Updates information about an experience version
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Organization, all.User, all.User.cli, experienceVersion.*, or experienceVersion.patch.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} experienceVersionIdOrName - Version ID or version name associated with the experience version
   *  {hash} experienceVersion - Object containing new properties of the experience version (https://api.app.wnology.io/#/definitions/experienceVersionPatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated experience version information (https://api.app.wnology.io/#/definitions/experienceVersion)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if experience version was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.patch = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/experience/versions/{experienceVersionIdOrName}');
    var pathParams = {};
    var req = {
      method: 'PATCH',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.experienceVersionIdOrName) { pathParams.experienceVersionIdOrName = params.experienceVersionIdOrName; }
    if ('undefined' !== typeof params.experienceVersion) { req.data = params.experienceVersion; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  return internals;
};
