var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Deletes a flow version
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, flowVersion.*, or flowVersion.delete.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {string} flowVersionId - Version ID or version name associated with the flow version
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If flow version was successfully deleted (https://api.app.wnology.io/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if flow version was not found (https://api.app.wnology.io/#/definitions/error)
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/flows/{flowId}/versions/{flowVersionId}');
    var pathParams = {};
    var req = {
      method: 'DELETE',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.flowId) { pathParams.flowId = params.flowId; }
    if ('undefined' !== typeof params.flowVersionId) { pathParams.flowVersionId = params.flowVersionId; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Get information about errors that occurred during runs of this workflow version
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flowVersion.*, or flowVersion.errors.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {string} flowVersionId - Version ID or version name associated with the flow version
   *  {string} duration - Duration of time range in milliseconds
   *  {string} end - End of time range in milliseconds since epoch
   *  {string} limit - Maximum number of errors to return
   *  {string} sortDirection - Direction to sort the results by. Accepted values are: asc, desc
   *  {string} deviceId - For edge workflows, the Device ID to return workflow errors for. When not included, will be errors for all device IDs.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Workflow error information (https://api.app.wnology.io/#/definitions/flowErrors)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if flow version was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.errors = function (params, opts, cb) {
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/flows/{flowId}/versions/{flowVersionId}/errors');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.flowId) { pathParams.flowId = params.flowId; }
    if ('undefined' !== typeof params.flowVersionId) { pathParams.flowVersionId = params.flowVersionId; }
    if ('undefined' !== typeof params.duration) { req.params.duration = params.duration; }
    if ('undefined' !== typeof params.end) { req.params.end = params.end; }
    if ('undefined' !== typeof params.limit) { req.params.limit = params.limit; }
    if ('undefined' !== typeof params.sortDirection) { req.params.sortDirection = params.sortDirection; }
    if ('undefined' !== typeof params.deviceId) { req.params.deviceId = params.deviceId; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Retrieves information on a flow version
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flowVersion.*, or flowVersion.get.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {string} flowVersionId - Version ID or version name associated with the flow version
   *  {string} includeCustomNodes - If the result of the request should also include the details of any custom nodes referenced by the returned workflows
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Flow version information (https://api.app.wnology.io/#/definitions/flowVersion)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if flow version was not found (https://api.app.wnology.io/#/definitions/error)
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/flows/{flowId}/versions/{flowVersionId}');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.flowId) { pathParams.flowId = params.flowId; }
    if ('undefined' !== typeof params.flowVersionId) { pathParams.flowVersionId = params.flowVersionId; }
    if ('undefined' !== typeof params.includeCustomNodes) { req.params.includeCustomNodes = params.includeCustomNodes; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Retrieve the recent log entries about runs of this workflow version
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flowVersion.*, or flowVersion.log.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {string} flowVersionId - Version ID or version name associated with the flow version
   *  {string} limit - Max log entries to return (ordered by time descending)
   *  {string} since - Look for log entries since this time (ms since epoch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Recent log entries (https://api.app.wnology.io/#/definitions/flowLog)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if flow version was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.getLogEntries = function (params, opts, cb) {
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/flows/{flowId}/versions/{flowVersionId}/logs');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.flowId) { pathParams.flowId = params.flowId; }
    if ('undefined' !== typeof params.flowVersionId) { pathParams.flowVersionId = params.flowVersionId; }
    if ('undefined' !== typeof params.limit) { req.params.limit = params.limit; }
    if ('undefined' !== typeof params.since) { req.params.since = params.since; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Updates information about a flow version
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, flowVersion.*, or flowVersion.patch.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {string} flowVersionId - Version ID or version name associated with the flow version
   *  {string} includeCustomNodes - If the result of the request should also include the details of any custom nodes referenced by the returned workflows
   *  {hash} flowVersion - Object containing new properties of the flow version (https://api.app.wnology.io/#/definitions/flowVersionPatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated flow version information (https://api.app.wnology.io/#/definitions/flowVersion)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if flow version was not found (https://api.app.wnology.io/#/definitions/error)
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/flows/{flowId}/versions/{flowVersionId}');
    var pathParams = {};
    var req = {
      method: 'PATCH',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.flowId) { pathParams.flowId = params.flowId; }
    if ('undefined' !== typeof params.flowVersionId) { pathParams.flowVersionId = params.flowVersionId; }
    if ('undefined' !== typeof params.includeCustomNodes) { req.params.includeCustomNodes = params.includeCustomNodes; }
    if ('undefined' !== typeof params.flowVersion) { req.data = params.flowVersion; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Get statistics about workflow runs for this workflow version
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flowVersion.*, or flowVersion.stats.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {string} flowVersionId - Version ID or version name associated with the flow version
   *  {string} duration - Duration of time range in milliseconds
   *  {string} end - End of time range in milliseconds since epoch
   *  {string} resolution - Resolution in milliseconds
   *  {string} deviceId - For edge workflows, the device ID to return workflow stats for. When not included, will be aggregate for all device IDs.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Statistics for workflow runs (https://api.app.wnology.io/#/definitions/flowStats)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if flow version was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.stats = function (params, opts, cb) {
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/flows/{flowId}/versions/{flowVersionId}/stats');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.flowId) { pathParams.flowId = params.flowId; }
    if ('undefined' !== typeof params.flowVersionId) { pathParams.flowVersionId = params.flowVersionId; }
    if ('undefined' !== typeof params.duration) { req.params.duration = params.duration; }
    if ('undefined' !== typeof params.end) { req.params.end = params.end; }
    if ('undefined' !== typeof params.resolution) { req.params.resolution = params.resolution; }
    if ('undefined' !== typeof params.deviceId) { req.params.deviceId = params.deviceId; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  return internals;
};
