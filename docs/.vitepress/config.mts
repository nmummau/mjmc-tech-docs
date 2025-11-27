import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MJMC Tech",
  description: "A documentation site for Mount Joy Mennonite Church technology",
  base: '/mjmc-tech-docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Roles', link: '/roles' },
      {
        text: 'Service Checklists',
        items: [
          { text: 'Media', link: '/media/checklists' },
          { text: 'Video', link: '/video/checklists' },
          { text: 'Audio', link: '/audio/checklists' }
        ]
      },
      { text: 'Big Picture', link: '/big-picture' },
      { text: 'Known Issues', link: '/known-issues' }
    ],

    sidebar: [
      {
        text: 'Big Picture',
        items: [
          { text: 'How the systems connect', link: '/big-picture' }
        ]
      },
      {
        text: 'Service Checklists',
        items: [
          { text: 'Media', link: '/media/checklists' },
          { text: 'Video', link: '/video/checklists' },
          { text: 'Audio', link: '/audio/checklists' }
        ]
      },
      {
        text: 'Equipment',
        items: [
          { text: 'Cameras', link: '/equipment/cameras' },
          { text: 'Clocks', link: '/equipment/clocks' },
          { text: 'Gym', link: '/equipment/gym' },
          { text: 'iMacs', link: '/equipment/imacs' },
          { text: 'iPads', link: '/equipment/ipads' },
          { text: 'Lighting', link: '/equipment/lighting' },
          { text: 'PCs', link: '/equipment/pcs' },
          { text: 'Projectors', link: '/equipment/projectors' },
          { text: 'TVs', link: '/equipment/tvs' },
          { text: 'Worship Center Audio', link: '/equipment/worship-center-audio' },
          { text: 'Worship Center Video', link: '/equipment/worship-center-video' }
        ]
      },
      {
        text: 'Software',
        items: [
          { text: 'Audacity', link: '/software/audacity' },
          { text: 'Datavideo', link: '/software/datavideo' },
          { text: 'Lightkey', link: '/software/lightkey' },
          { text: 'ProPresenter', link: '/software/propresenter' },
          { text: 'Visi Listen', link: '/software/visilisten' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
