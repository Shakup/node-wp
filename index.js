'use strict'

const
	request = require('request')


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
	request (options) {

		return new Promise( ( resolve, reject ) => {
			request(options, (err, response, body) => {
      			if ( response.statusCode == 200 ) {
      				resolve( JSON.parse(body) )
				} else {
					reject(err || body || response)
				}
			})
		})

	}

	getParameters (obj) {
		let parameters = ''

		Object.keys(obj).forEach( (key) => {
			parameters += '&' + key + '=' + encodeURIComponent( obj[key] )
		})

		return parameters.length ? '?' + parameters.trim('&') : ''
	}

	/**
	 * Retrieve posts
	 * @param  {object}  options Posts parameters. 
	 * @return {promise}
	 */
	posts (options) {

		return this.request({
			method: 'GET',
			uri: this.api_endpoint + '/posts' + this.getParameters(options || {})
		})

	}

}

module.exports = NodeWP