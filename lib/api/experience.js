var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Bootstraps the experience for this application with standard endpoints and views
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, experience.*, or experience.bootstrap.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {hash} options - Bootstrap options (https://api.app.wnology.io/#/definitions/experienceBootstrapOptions)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If bootstrap was successful (https://api.app.wnology.io/#/definitions/experienceBootstrapResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if application was not found (https://api.app.wnology.io/#/definitions/error)
   */
  internals.bootstrap = function (params, opts, cb) {
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/experience/bootstrap');
    var pathParams = {};
    var req = {
      method: 'PATCH',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.options) { req.data = params.options; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Deletes multiple parts of an experience including users, groups, slugs, domains, versions, endpoints, views, and workflows
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, experience.*, or experience.delete.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} keepUsers - If this is set, Experience Users will not be removed.
   *  {string} keepGroups - If this is set, Experience Groups will not be removed.
   *  {string} keepSlugs - If this is set, Experience Slugs will not be removed.
   *  {string} keepDomains - If this is set, Experience Domains will not be removed.
   *  {string} removeVersions - If this is set, all Experience Versions and their contents will be removed (except for develop).
   *  {string} keepViews - If this is set, Experience Views (in the develop version) will not be removed.
   *  {string} keepEndpoints - If this is set, Experience Endpoints (in the develop version) will not be removed.
   *  {string} removeWorkflows - If this is set, all Experience Workflows (in the develop version) will ve removed.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If deletion was successful (https://api.app.wnology.io/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if application was not found (https://api.app.wnology.io/#/definitions/error)
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/experience');
    var pathParams = {};
    var req = {
      method: 'DELETE',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.keepUsers) { req.params.keepUsers = params.keepUsers; }
    if ('undefined' !== typeof params.keepGroups) { req.params.keepGroups = params.keepGroups; }
    if ('undefined' !== typeof params.keepSlugs) { req.params.keepSlugs = params.keepSlugs; }
    if ('undefined' !== typeof params.keepDomains) { req.params.keepDomains = params.keepDomains; }
    if ('undefined' !== typeof params.removeVersions) { req.params.removeVersions = params.removeVersions; }
    if ('undefined' !== typeof params.keepViews) { req.params.keepViews = params.keepViews; }
    if ('undefined' !== typeof params.keepEndpoints) { req.params.keepEndpoints = params.keepEndpoints; }
    if ('undefined' !== typeof params.removeWorkflows) { req.params.removeWorkflows = params.removeWorkflows; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  return internals;
};
