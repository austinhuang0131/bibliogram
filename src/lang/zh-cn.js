const data = {...require("./base")}
const {pug} = require("./utils/functions")

;(() => {
	data.meta_direction = "ltr"

	data.go_to_profile = "前往主页"
	data.go_to_post = "前往帖子"
	data.go_username_or_url = "用户名，话题，或链接"
	data.go_shortcode_or_url = "短码或链接"
	data.go_button = "Go"
	data.about_bibliogram_header = "关于 Bibliogram"
	data.pug_about_bibliogram_content = pug(`
		p.
			Bibliogram 将 Instagram 的公共账户数据以一个简洁明了、省时省流、无广告、不怂恿注册的方式展现出来，
			外加支持 RSS 源及图片下载。
			#[a(href=(link_to_featured_profiles ? "#featured-profiles" : "/u/instagram")).example-link 来看看！]
		p Bibliogram #[em 不允许] 匿名发帖、点赞、评论、关注，或查看私密账户，且不会保存已删除的帖子。
	`)
	data.about_this_instance_header = "关于本实例"
	data.onion_site_available = "可使用洋葱站点"
	data.t_settings = "设置"
	data.t_privacy_policy = "隐私政策"
	data.has_not_written_privacy_policy = "实例运营方未撰写隐私政策"
	data.instance_not_blocked = "实例运作正常"
	data.instance_partially_blocked = "实例部分受限"
	data.instance_blocked = "实例完全受限"
	data.rss_disabled = "不提供 RSS 源"
	data.rss_enabled = "提供 RSS 源"
	data.external_links_header = "外部链接"
	data.source_link = "源代码 (GitHub)"
	data.matrix_link = "Matrix 聊天群"
	data.instances_link = "其他 Bibliogram 实例"
	data.contact_link = "联系开发者"
	data.featured_profiles_header = "推荐账户"
	data.featured_profiles_whats_this = "这啥？"
	data.html_featured_profiles_disclaimer = pug(`
		p 本实例的运营方认为这些账户比较有趣。
		p 请注意，这不代表 Bibliogram 项目认可了这些账户。
	`)()
	data.verified_badge_title = "人家是大V好伐?"
	data.verified_badge_alt = "已认证"
	data.post_counter_label = "帖子"
	data.outgoing_follows_counter_label = "关注"
	data.incoming_follows_counter_label = "粉丝"
	data.t_home = "主页"
	data.tab_timeline = "时间轴"
	data.tab_igtv = "IGTV"
	data.tab_popular = "热门帖子"
	data.next_page_button = "下一页"
	data.next_page_button_loading = "载入中..."
	data.profile_is_private_notice = "私密账户。"
	data.no_posts_notice = "没有帖子。"
	data.no_more_posts_notice = "没帖子啦！"
	data.fn_page_divider = number => `第 ${number} 页`
	data.pug_post_timestamp = pug(`
		| 发帖于 #[time(datetime=post.date.toISOString() data-local-date)= post.getDisplayDate()].
	`)
})()

module.exports = data
