var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Returns the applications the current user has permission to see
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.Organization.read, all.User, all.User.cli, all.User.read, applications.*, or applications.get.
   *
   * Parameters:
   *  {string} sortField - Field to sort the results by. Accepted values are: name, id, creationDate, ownerId, lastUpdated
   *  {string} sortDirection - Direction to sort the results by. Accepted values are: asc, desc
   *  {string} page - Which page of results to return
   *  {string} perPage - How many items to return per page
   *  {string} filterField - Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name
   *  {string} filter - Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering.
   *  {string} orgId - If not provided, return all applications. If provided but blank, only return applications belonging to the current user. If provided and an id, only return applications belonging to the given organization id.
   *  {string} summaryExclude - Comma-separated list of summary fields to exclude from application summary
   *  {string} summaryInclude - Comma-separated list of summary fields to include in application summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Collection of applications (https://api.app.wnology.io/#/definitions/applications)
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
    var tpl = uriTemplate.parse('/applications');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.sortField) { req.params.sortField = params.sortField; }
    if ('undefined' !== typeof params.sortDirection) { req.params.sortDirection = params.sortDirection; }
    if ('undefined' !== typeof params.page) { req.params.page = params.page; }
    if ('undefined' !== typeof params.perPage) { req.params.perPage = params.perPage; }
    if ('undefined' !== typeof params.filterField) { req.params.filterField = params.filterField; }
    if ('undefined' !== typeof params.filter) { req.params.filter = params.filter; }
    if ('undefined' !== typeof params.orgId) { req.params.orgId = params.orgId; }
    if ('undefined' !== typeof params.summaryExclude) { req.params.summaryExclude = params.summaryExclude; }
    if ('undefined' !== typeof params.summaryInclude) { req.params.summaryInclude = params.summaryInclude; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Create a new application from an import bundle
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.User, applications.*, or applications.import.
   *
   * Parameters:
   *  {file} importBundle - The zip file containing the application to import and all of its resources
   *  {string} ownerId - The owner id of the new application, defaults to the id of the user making the request
   *  {string} ownerType - The type of the owner id. Accepted values are: user, organization
   *  {string} includeDevices - If set, import devices from the import bundle
   *  {string} includeDataTableRows - If set, import data table rows from import bundle
   *  {string} includeFiles - If set, import files from import bundle
   *  {string} email - Email address to notify the user when the job to import the application has completed or errored, defaults to the email address of the user making the request
   *  {hash} options - Additional import options (https://api.app.wnology.io/#/definitions/importNewApplicationOptions)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  201 - Successfully created application (https://api.app.wnology.io/#/definitions/applicationCreationByTemplateResult)
   *  202 - If application was enqueued to be imported (https://api.app.wnology.io/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   *  404 - Error if application is not found (https://api.app.wnology.io/#/definitions/error)
   *  422 - Error if too many validation errors occurred on other resources (https://api.app.wnology.io/#/definitions/validationErrors)
   */
  internals.import = function (params, opts, cb) {
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
    opts.multipart = true;
    params = params || {};
    var tpl = uriTemplate.parse('/applications/import');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.importBundle) { req.data.importBundle = params.importBundle; }
    if ('undefined' !== typeof params.ownerId) { req.data.ownerId = params.ownerId; }
    if ('undefined' !== typeof params.ownerType) { req.data.ownerType = params.ownerType; }
    if ('undefined' !== typeof params.includeDevices) { req.data.includeDevices = params.includeDevices; }
    if ('undefined' !== typeof params.includeDataTableRows) { req.data.includeDataTableRows = params.includeDataTableRows; }
    if ('undefined' !== typeof params.includeFiles) { req.data.includeFiles = params.includeFiles; }
    if ('undefined' !== typeof params.email) { req.data.email = params.email; }
    if ('undefined' !== typeof params.options) { req.params.options = params.options; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Create a new application
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.User, applications.*, or applications.post.
   *
   * Parameters:
   *  {hash} application - New application information (https://api.app.wnology.io/#/definitions/applicationPost)
   *  {string} summaryExclude - Comma-separated list of summary fields to exclude from application summary
   *  {string} summaryInclude - Comma-separated list of summary fields to include in application summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  201 - Successfully created application (https://api.app.wnology.io/#/definitions/application)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.app.wnology.io/#/definitions/error)
   */
  internals.post = function (params, opts, cb) {
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
    var tpl = uriTemplate.parse('/applications');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.application) { req.data = params.application; }
    if ('undefined' !== typeof params.summaryExclude) { req.params.summaryExclude = params.summaryExclude; }
    if ('undefined' !== typeof params.summaryInclude) { req.params.summaryInclude = params.summaryInclude; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  return internals;
};
