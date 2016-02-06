'use strict'

const request = require('request')


class NodeWP {

	/**
	 * Constructor
	 * @param  {string} api_endpoint Website api endpoint
	 */
	constructor (api_endpoint) {
		this.api_endpoint = api_endpoint;
	}

	/**
	 * Make an API request
	 * @param  {object} options Request parameters
	 * @return {promise}        Promise
	 */
	request (route, method, parameters) {
		let
			uri_params = ''
			, req_options

		Object.keys(parameters).forEach( (key) => {
			uri_params += '&' + key + '=' + encodeURIComponent( parameters[key] )
		})

		if (uri_params.length) uri_params = '?' + uri_params.trim('&')

		req_options = {
			method: method || 'GET',
			uri: this.api_endpoint + route + uri_params
		}

		return new Promise( ( resolve, reject ) => {
			request(req_options, (err, response, body) => {

      			if ( response.statusCode == 200 )
      				resolve( JSON.parse(body) )
				else
					reject(err || body || response)

			})
		})
	}

	/**
	 * Retrieve posts
	 * @param  {object}  options Posts parameters. 
	 * @return {promise}
	 */
	posts (options) {
		return this.request( '/posts', 'GET', options || {} )
	}

	/**
	 * Retrieve posts
	 * @param  {object}  options Pages parameters. 
	 * @return {promise}
	 */
	pages (options) {
		return this.request( '/pages', 'GET', options || {} )
	}

	/**
	 * Retrieve media
	 * @param  {object}  options Media parameters. 
	 * @return {promise}
	 */
	media (options) {
		return this.request( '/media', 'GET', options || {} )
	}

	/**
	 * Retrieve comments
	 * @param  {object}  options Comments parameters. 
	 * @return {promise}
	 */
	comments (options) {
		return this.request( '/comments', 'GET', options || {} )
	}

	/**
	 * Retrieve taxonomies
	 * @param  {object}  options Taxonomies parameters. 
	 * @return {promise}
	 */
	taxonomies (options) {
		return this.request( '/taxonomies', 'GET', options || {} )
	}

	/**
	 * Retrieve categories
	 * @param  {object}  options Categories parameters. 
	 * @return {promise}
	 */
	categories (options) {
		return this.request( '/categories', 'GET', options || {} )
	}

	/**
	 * Retrieve tags
	 * @param  {object}  options Tags parameters. 
	 * @return {promise}
	 */
	tags (options) {
		return this.request( '/tags', 'GET', options || {} )
	}

	/**
	 * Retrieve users
	 * @param  {object}  options Users parameters. 
	 * @return {promise}
	 */
	users (options) {
		return this.request( '/users', 'GET', options || {} )
	}

}

module.exports = NodeWP