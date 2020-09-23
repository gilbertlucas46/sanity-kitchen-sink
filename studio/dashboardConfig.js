export default {
  widgets: [
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
                  buildHookId: '5f6aacd8a45deb427b940fcc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fd7cmjgk',
                  apiId: 'f9686059-ca24-44ef-a7b6-4994575931fb'
                },
                {
                  buildHookId: '5f6aacd80c380642374ef6c5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gagcvgq9',
                  apiId: '01628813-c8da-414d-bb8f-4786c5bb15f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gilbertlucas46/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gagcvgq9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
