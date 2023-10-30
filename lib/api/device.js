var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Deletes a device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, device.*, or device.delete.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If device was successfully deleted (https://api.app.wnology.io/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.app.wnology.io/#/definitions/error)
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}');
    var pathParams = {};
    var req = {
      method: 'DELETE',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.deviceId) { pathParams.deviceId = params.deviceId; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Creates a device data export. Defaults to all data.
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.export.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} start - Start time of export (ms since epoch - 0 means now, negative is relative to now)
   *  {string} end - End time of export (ms since epoch - 0 means now, negative is relative to now)
   *  {string} email - Email address to send export to. Defaults to current user's email.
   *  {string} callbackUrl - Callback URL to call with export result
   *  {string} includeBlobData - If set will export any blob attributes in base64 form, otherwise they will be downloadable links which will expire.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  202 - If generation of export was successfully started (https://api.app.wnology.io/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.export = function (params, opts, cb) {
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}/export');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.deviceId) { pathParams.deviceId = params.deviceId; }
    if ('undefined' !== typeof params.start) { req.params.start = params.start; }
    if ('undefined' !== typeof params.end) { req.params.end = params.end; }
    if ('undefined' !== typeof params.email) { req.params.email = params.email; }
    if ('undefined' !== typeof params.callbackUrl) { req.params.callbackUrl = params.callbackUrl; }
    if ('undefined' !== typeof params.includeBlobData) { req.params.includeBlobData = params.includeBlobData; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Retrieves information on a device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.get.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} excludeConnectionInfo - If set, do not return connection info
   *  {string} tagsAsObject - Return tags as an object map instead of an array
   *  {string} attributesAsObject - Return attributes as an object map instead of an array
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Device information (https://api.app.wnology.io/#/definitions/device)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.app.wnology.io/#/definitions/error)
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.deviceId) { pathParams.deviceId = params.deviceId; }
    if ('undefined' !== typeof params.excludeConnectionInfo) { req.params.excludeConnectionInfo = params.excludeConnectionInfo; }
    if ('undefined' !== typeof params.tagsAsObject) { req.params.tagsAsObject = params.tagsAsObject; }
    if ('undefined' !== typeof params.attributesAsObject) { req.params.attributesAsObject = params.attributesAsObject; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Retrieve the last known commands(s) sent to the device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.getCommand.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} limit - Maximum number of command entries to return
   *  {string} since - Look for command entries since this time (ms since epoch)
   *  {string} sortDirection - Direction to sort the command entries (by time). Accepted values are: asc, desc
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Recent device commands (https://api.app.wnology.io/#/definitions/deviceCommands)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.getCommand = function (params, opts, cb) {
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}/command');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.deviceId) { pathParams.deviceId = params.deviceId; }
    if ('undefined' !== typeof params.limit) { req.params.limit = params.limit; }
    if ('undefined' !== typeof params.since) { req.params.since = params.since; }
    if ('undefined' !== typeof params.sortDirection) { req.params.sortDirection = params.sortDirection; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Retrieve the composite last complete state of the device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.getCompositeState.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} start - Start of time range to look at to build composite state
   *  {string} end - End of time range to look at to build composite state
   *  {string} attributes - Comma-separated list of attributes to include. When not provided, returns all attributes.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Composite last state of the device (https://api.app.wnology.io/#/definitions/compositeDeviceState)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.getCompositeState = function (params, opts, cb) {
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}/compositeState');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.deviceId) { pathParams.deviceId = params.deviceId; }
    if ('undefined' !== typeof params.start) { req.params.start = params.start; }
    if ('undefined' !== typeof params.end) { req.params.end = params.end; }
    if ('undefined' !== typeof params.attributes) { req.params.attributes = params.attributes; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Retrieve the recent log entries about the device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.getLogEntries.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} limit - Maximum number of log entries to return
   *  {string} since - Look for log entries since this time (ms since epoch)
   *  {string} sortDirection - Direction to sort the log entries (by time). Accepted values are: asc, desc
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Recent log entries (https://api.app.wnology.io/#/definitions/deviceLog)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.app.wnology.io/#/definitions/error)
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}/logs');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.deviceId) { pathParams.deviceId = params.deviceId; }
    if ('undefined' !== typeof params.limit) { req.params.limit = params.limit; }
    if ('undefined' !== typeof params.since) { req.params.since = params.since; }
    if ('undefined' !== typeof params.sortDirection) { req.params.sortDirection = params.sortDirection; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Retrieve the last known state(s) of the device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.getState.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} limit - Maximum number of state entries to return
   *  {string} since - Look for state entries since this time (ms since epoch)
   *  {string} sortDirection - Direction to sort the state entries (by time). Accepted values are: asc, desc
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Recent device states (https://api.app.wnology.io/#/definitions/deviceStates)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.getState = function (params, opts, cb) {
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}/state');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.deviceId) { pathParams.deviceId = params.deviceId; }
    if ('undefined' !== typeof params.limit) { req.params.limit = params.limit; }
    if ('undefined' !== typeof params.since) { req.params.since = params.since; }
    if ('undefined' !== typeof params.sortDirection) { req.params.sortDirection = params.sortDirection; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Updates information about a device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, device.*, or device.patch.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {hash} device - Object containing new properties of the device (https://api.app.wnology.io/#/definitions/devicePatch)
   *  {string} tagsAsObject - Return tags as an object map instead of an array
   *  {string} attributesAsObject - Return attributes as an object map instead of an array
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated device information (https://api.app.wnology.io/#/definitions/device)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.app.wnology.io/#/definitions/error)
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}');
    var pathParams = {};
    var req = {
      method: 'PATCH',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.deviceId) { pathParams.deviceId = params.deviceId; }
    if ('undefined' !== typeof params.device) { req.data = params.device; }
    if ('undefined' !== typeof params.tagsAsObject) { req.params.tagsAsObject = params.tagsAsObject; }
    if ('undefined' !== typeof params.attributesAsObject) { req.params.attributesAsObject = params.attributesAsObject; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Returns payload counts for the time range specified for this device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.payloadCounts.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} start - Start of range for payload count query (ms since epoch)
   *  {string} end - End of range for payload count query (ms since epoch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Payload counts, by type (https://api.app.wnology.io/#/definitions/devicePayloadCounts)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.payloadCounts = function (params, opts, cb) {
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}/payloadCounts');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.deviceId) { pathParams.deviceId = params.deviceId; }
    if ('undefined' !== typeof params.start) { req.params.start = params.start; }
    if ('undefined' !== typeof params.end) { req.params.end = params.end; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Removes all device data for the specified time range. Defaults to all data.
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, device.*, or device.removeData.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} start - Start time of export (ms since epoch - 0 means now, negative is relative to now)
   *  {string} end - End time of export (ms since epoch - 0 means now, negative is relative to now)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  202 - If data removal was successfully started (https://api.app.wnology.io/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.removeData = function (params, opts, cb) {
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}/data');
    var pathParams = {};
    var req = {
      method: 'DELETE',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.deviceId) { pathParams.deviceId = params.deviceId; }
    if ('undefined' !== typeof params.start) { req.params.start = params.start; }
    if ('undefined' !== typeof params.end) { req.params.end = params.end; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Send a command to a device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Device, all.Organization, all.User, device.*, or device.sendCommand.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {hash} deviceCommand - Command to send to the device (https://api.app.wnology.io/#/definitions/deviceCommand)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If command was successfully sent (https://api.app.wnology.io/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.sendCommand = function (params, opts, cb) {
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}/command');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.deviceId) { pathParams.deviceId = params.deviceId; }
    if ('undefined' !== typeof params.deviceCommand) { req.data = params.deviceCommand; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Send the current state of the device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Device, all.Organization, all.User, device.*, or device.sendState.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {hash} deviceState - A single device state object, or an array of device state objects (https://api.app.wnology.io/#/definitions/deviceStateOrStates)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If state was successfully received (https://api.app.wnology.io/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.sendState = function (params, opts, cb) {
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}/state');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.deviceId) { pathParams.deviceId = params.deviceId; }
    if ('undefined' !== typeof params.deviceState) { req.data = params.deviceState; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Set the current connection status of the device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Device, all.Organization, all.User, device.*, or device.setConnectionStatus.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {hash} connectionStatus - The current connection status of the device (https://api.app.wnology.io/#/definitions/deviceConnectionStatus)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If connection status was successfully applied (https://api.app.wnology.io/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.setConnectionStatus = function (params, opts, cb) {
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}/setConnectionStatus');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.deviceId) { pathParams.deviceId = params.deviceId; }
    if ('undefined' !== typeof params.connectionStatus) { req.data = params.connectionStatus; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Attach to a real time stream of command messages to this device using Server Sent Events (SSE)
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.commandStream.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} keepAliveInterval - Number of seconds between keepalive messages
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *
   * Returns a Promise for (or calls the provided callback with)
   * an EventSource instance, which will be an
   * SSE stream of new command messages for this device
   *
   * It will have the following message event types:
   *  deviceCommand - An SSE event representing a single device command (https://api.app.wnology.io/#/definitions/deviceCommand)
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/EventSource
   * for more information about EventSource instances.
   *
   * Possible Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.commandStream = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}/commandStream');
    var pathParams = {};
    var req = {
      headers: {},
      params: {}
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.deviceId) { pathParams.deviceId = params.deviceId; }
    if ('undefined' !== typeof params.keepAliveInterval) { req.params.keepAliveInterval = params.keepAliveInterval; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    req.url = tpl.expand(pathParams);
    return client.attachEventSource(req, opts, cb);
  };

  /**
   * Attach to a real time stream of state messages from this device using Server Sent Events (SSE)
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.stateStream.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} keepAliveInterval - Number of seconds between keepalive messages
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *
   * Returns a Promise for (or calls the provided callback with)
   * an EventSource instance, which will be an
   * SSE stream of new state messages for this device
   *
   * It will have the following message event types:
   *  deviceState - An SSE event representing a single device state (https://api.app.wnology.io/#/definitions/deviceState)
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/EventSource
   * for more information about EventSource instances.
   *
   * Possible Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.stateStream = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}/stateStream');
    var pathParams = {};
    var req = {
      headers: {},
      params: {}
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.deviceId) { pathParams.deviceId = params.deviceId; }
    if ('undefined' !== typeof params.keepAliveInterval) { req.params.keepAliveInterval = params.keepAliveInterval; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    req.url = tpl.expand(pathParams);
    return client.attachEventSource(req, opts, cb);
  };

  return internals;
};
