const constants = require("../constants")

function getFeedSetup(type, username, description, image, updated) {
	const usedName = `${type === "u" ? "@" : "#"}${username}`
	return {
		title: usedName,
		description,
		id: `bibliogram:${type === "u" ? "user" : "hashtag"}/${username}`,
		link: `${constants.website_origin}/${type}/${username}`,
		feedLinks: {
			rss: `${constants.website_origin}/${type}/${username}/rss.xml`,
			atom: `${constants.website_origin}/${type}/${username}/atom.xml`
		},
		image,
		updated,
		author: {
			name: usedName,
			link: `${constants.website_origin}/${type}/${username}`
		}
	}
}

module.exports.getFeedSetup = getFeedSetup
