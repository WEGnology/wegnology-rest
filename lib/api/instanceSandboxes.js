var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Returns a collection of instance sandboxes
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.Instance.read, all.User, all.User.read, instanceSandboxes.*, or instanceSandboxes.get.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} summaryExclude - Comma-separated list of summary fields to exclude from user summary
   *  {string} summaryInclude - Comma-separated list of summary fields to include in user summary
   *  {string} sortField - Field to sort the results by. Accepted values are: firstName, lastName, email, id, creationDate, lastSuccessfulLogin, lastFailedLogin, failedLoginCount, lastUpdated
   *  {string} sortDirection - Direction to sort the results by. Accepted values are: asc, desc
   *  {string} startingAfterId - Exclusive ID from which to begin querying
   *  {string} endingBeforeId - Exclusive ID at which to end querying
   *  {string} limit - How many items to return
   *  {string} filterField - Field to filter the results by. Blank or not provided means no filtering. Accepted values are: firstName, lastName, email
   *  {string} filter - Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering.
   *  {string} includeDeleted - If the result of the request should also include deleted sandboxes.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Collection of instance sandboxes (https://api.app.wnology.io/#/definitions/instanceSandboxes)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
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
    var tpl = uriTemplate.parse('/instances/{instanceId}/sandboxes');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.instanceId) { pathParams.instanceId = params.instanceId; }
    if ('undefined' !== typeof params.summaryExclude) { req.params.summaryExclude = params.summaryExclude; }
    if ('undefined' !== typeof params.summaryInclude) { req.params.summaryInclude = params.summaryInclude; }
    if ('undefined' !== typeof params.sortField) { req.params.sortField = params.sortField; }
    if ('undefined' !== typeof params.sortDirection) { req.params.sortDirection = params.sortDirection; }
    if ('undefined' !== typeof params.startingAfterId) { req.params.startingAfterId = params.startingAfterId; }
    if ('undefined' !== typeof params.endingBeforeId) { req.params.endingBeforeId = params.endingBeforeId; }
    if ('undefined' !== typeof params.limit) { req.params.limit = params.limit; }
    if ('undefined' !== typeof params.filterField) { req.params.filterField = params.filterField; }
    if ('undefined' !== typeof params.filter) { req.params.filter = params.filter; }
    if ('undefined' !== typeof params.includeDeleted) { req.params.includeDeleted = params.includeDeleted; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  return internals;
};
