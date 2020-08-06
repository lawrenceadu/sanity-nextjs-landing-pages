export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2c0b3fbed6fe831fc6adc8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-v8xwajwy',
                  apiId: 'dd62d79c-31d4-4bc9-b068-64081b3e7fa1'
                },
                {
                  buildHookId: '5f2c0b3f865d01d42461355b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xdgrcpxw',
                  apiId: 'c69b51c9-ace3-4c7d-8c24-fd9bfcd7d600'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lawrenceadu/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xdgrcpxw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
