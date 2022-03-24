module.exports = {
    base:"/vuepress-note/",
    title: 'Kay',
    description: 'Kay哥学Java',
    dest: './dist',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/logo.jpg'}]
    ],
	theme: 'reco',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
		 
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！',
		  // 博客配置
		blogConfig: {
		  category: {
			location: 2,     // 在导航栏菜单中所占的位置，默认2
			text: 'Category' // 默认文案 “分类”
		  },
		  // tag: {
			// location: 3,     // 在导航栏菜单中所占的位置，默认3
			// text: 'Tag'      // 默认文案 “标签”
		  // },
		  socialLinks: [     // 信息栏展示社交信息
			{ icon: 'reco-github', link: 'https://github.com/recoluan' },
			{ icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
		  ]
		}
    },
    plugins: {
      '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
  
        // 其他的 Vssue 配置
        owner: 'h-yx-blog',
        repo: 'vuepress-note',
        clientId: '2c4fbc0ed279dc9983d7',
        clientSecret: '456ae8107c32cbcc509a746e8b91dc44de12ee85',
      },
    },
}
