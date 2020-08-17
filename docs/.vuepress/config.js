module.exports = {
  
  title: 'ShenXi 神夕',

  description: '全面发展德智体美劳的小小programmer',

  base: '/blog/',

  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
  ],

  themeConfig: {
    nav: [
      {
        text: '学习',
        items: [
          { text: 'Webpack', link: '/study/webpack/' },
          { text: 'Vue', link: '/study/vue/' },
          { text: 'React', link: '/study/react/' },
        ]
      },
      { text: 'LeetCode', link: '/leetcode/' },
      { text: 'Typescript', link: '/typescript/' },
      { text: '单元测试', link: '/test/' },
      {
        text: '规范',
        link: '/format',
        items: [
          { text: 'Eslint', link: '/format/eslint/' },
          { text: 'Git提交规范', link: '/format/git/' },
        ]
      },
      {
        text: '源码分析',
        items: [
          { text: 'lodash', link: '/origincode/lodash/' },
        ]
      },
      {
        text: '计算机体系',
        items: [
          { text: '计算机组成原理', link: '/computer/computer-principles/' },
          { text: '计算机网络', link: '/computer/b/' },
          { text: '操作系统', link: '/computer/a/' },
          { text: '数据结构与算法', link: '/computer/c/' },
        ]
      },
      {
        text: '杂七杂八',
        items: [
          { text: 'Http杂谈', link:'/other/http' },
          { text: 'Typescript', link:'/other/typescript' },
          { text: 'Interview', link:'/interview/' }
        ]
      }
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
      ],
      '/other/': [
        {
          title: '杂七杂八',
          collapsable: false,
          children: [
            { title: 'Http杂谈', path:'/other/http' },
            { title: 'Https杂谈', path:'/other/https' },
            { title: 'Typescript', path:'/other/typescript' },
            { title: 'Interview', path:'/interview/' }
          ]
        }
      ]
    }
  }

}