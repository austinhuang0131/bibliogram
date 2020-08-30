const constants = require("../constants")
const Timeline = require("./Timeline")
const BaseHashtag = require("./BaseHashtag")
require("../testimports")(constants, Timeline, BaseHashtag)

class Hashtag extends BaseHashtag {
	constructor(data) {
		super()
		/** @type {import("../types").GraphHashtag} */
		this.data = data
		this.fromReel = true
		this.posts = data.edge_hashtag_to_media.count
		this.timeline = new Timeline(this, "timeline") // edge_hashtag_to_media
		this.popular = new Timeline(this, "popular") // edge_hashtag_to_top_posts
		this.cachedAt = Date.now()
		this.computeProxyProfilePic()
	}
}

module.exports = Hashtag
