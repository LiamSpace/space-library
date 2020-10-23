module.exports = {
  title: 'Space',
  head: [
    // ['link', { rel: 'ico', href: '/logo.ico' }]
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./logo.ico` }]
  ],

  description: 'Just for fun',
  dest: './dist',
  port: 7821,
  themeConfig: {

    // 添加导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/start/intro' },
      { text: '我的博客', link: 'https://blog.liamspace.top/' },
      { text: 'Github', link: 'https://github.com/LiamSpace' },
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/': [
        {
          title: '起步',
          collapsable: false,
          children: [
            'start/intro'
          ]
        },
        {
          title: '组件',
          collapsable: false,
          children: [
            'base/button',
            'base/link',
            'base/radio',
            // 'base/test4',
          ]
        },
        {
          title: '代码片段',
          collapsable: false,
          children: [
            {
              title: 'CSS片段',
              collapsable: false,
              children: [
                'codeSnippet/card'
              ]
            },
            {
              title: 'JS片段',
              collapsable: false,
              children: [

              ]
            }
          ]
        },
        {
          title: '工具类组件',
          collapsable: false,
          children: [
            'tools/browser',
            // {
            //   title: '关于浏览器',
            //   collapsable: false,
            //   children: [
            //     'tools/browser'
            //   ]
            // },
          ]
        },
        {
          title: '方法类函数',
          collapsable: false,
          children: [
          ]
        }
      ],
      '/knowledge/': [
        {
          title: 'CSS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'JS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'node知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'vue知识库',
          collapsable: false,
          children: [
          ]
        }
      ]
    },
    sidebarDepth: 2,
  }
}