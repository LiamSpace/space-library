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
    sidebarDepth:2,
    // 添加导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/baseComponents/start/intro' },
      { text: '我的博客', link: 'https://blog.liamspace.top/' },
      { text: 'Github', link: 'https://github.com/LiamSpace' },
  ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/baseComponents/': [
        {
          title:'起步',
          // collapsable: true,
          children:[
            'start/intro'
          ]
        },
        {
          title: '布局类组件',
          // collapsable: true,
          children: [
            'base/button',
            'base/test2',
            'base/test3',
            'base/test4',
          ]
        },
        {
          title: '可视化组件',
          // collapsable: true,
          children: [
          ]
        },
        {
          title: '工具类组件',
          // collapsable: true,
          children: [
          ]
        },
        {
          title: '方法类函数',
          // collapsable: true,
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
    }
  }
}