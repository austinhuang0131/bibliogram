const constants = require("../constants")
const {proxyProfilePic} = require("../utils/proxyurl")
const {structure} = require("../utils/structuretext")

class BaseHashtag {
	constructor() {
		/** @type {import("../types").GraphHashtag} */
		this.data
		/** @type {number} */
		this.cachedAt
	}

	computeProxyProfilePic() {
		this.proxyProfilePicture = proxyProfilePic(this.data.profile_pic_url, this.data.id)
	}

	getTtl(scale = 1) {
		const expiresAt = this.cachedAt + constants.caching.resource_cache_time
		const ttl = expiresAt - Date.now()
		return Math.ceil(Math.max(ttl, 0) / scale)
	}

	export() {
		return this.data
	}
}

module.exports = BaseHashtag
