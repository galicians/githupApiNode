var https = require('https')
var username = 'galicians'
var options = {
	host: 'api.github.com',
	path: '/users/' + username + '/repos',
	method: 'GET',
	headers: {'user-agent': 'node.js'}
}

var request = https.request(options, function(response) {
	var body = ''
	response.on('data', function(d) {
		body += d.toString('utf8')
	})

	response.on('end', function() {
		var repos = []
		var json = JSON.parse(body)
		json.forEach(function(repo){
			repos.push({
				name: repo.name,
				description: repo.description
			})
		})
		console.log('Repos ', repos)
	})

})

request.end()

// a request can stay open until we close it as a response

//