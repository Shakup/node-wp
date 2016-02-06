'use strict'

const 
	NodeWP   = require( '../index' )
	, wp     = new NodeWP( 'http://wordpress.dev/wp-json/wp/v2' )


function output (json) {
	if ( !json.length ) {
		console.log( 'No result' )
		return
	}
	
	json.forEach( (item) => console.log(item) )
}


wp
	.posts({
		page: 1,
		per_page: 5
	})
	.then( output )
	.catch( (err) => console.log('ERROR! ', err) )