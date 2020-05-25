module.exports = {
  
  title: 'Luasy’s Blog',

  description: '全面发展德智体美劳的小小programmer',

  base: '/blog/',

  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
  ],

  themeConfig: {
    nav: [
      { text: '指南', link: '/guide' },
      // { text: 'Home', link: '/' },
      // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/guide': [
        { title: 'webpack', path: '/webpack/' }
      ],
      '/webpack': [
        { title: 'webpack 介绍', path: '/webpack/' },
        { title: 'webpack 基础', path: '/webpack/profile' }
      ],
      '/ecma/': [
        {
          title: 'ecma',
          collapsable: false,
          children: [
            { title: 'String', path:'/ecma/string' },
            { title: 'Array', path:'/ecma/array' }
          ]
        }
      ]
    }
  }

}