'use strict'

const 
	NodeWP = require( '../index' )
	, wp   = new NodeWP( 'http://wordpress.dev/wp-json/wp/v2' )

wp
	.posts({
		'per_page': 10
	})
	.then( (json) => {
		console.log(json)
	})
	.catch( (err) => {
		console.log(err)
	})