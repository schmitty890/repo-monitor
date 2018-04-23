require("dotenv").config();
var appKeys = require("./keys.js");
var request = require('request');
var Github = require('github-api-node');

console.log(appKeys.github.name);

var github = new Github({
  username: appKeys.github.name,
  password: appKeys.github.key,
  auth: appKeys.github.auth
});

var repo = github.getRepo(appKeys.github.name, 'eventz');

repo.show(function(err, repo) {
	console.log('---------REPOSITORY---------');
	console.log(repo.name);
});

repo.listBranches(function(err, branches) {
	console.log('---------BRANCHES---------');
	console.log(branches);
});

repo.contributors(function(err, data) {
	console.log('---------CONTRIBUTORS---------');
	// console.log(data);
	for (var prop in data) {
		console.log(data[prop].author.login);
	}
});
