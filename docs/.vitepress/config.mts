import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: "MJMC Tech",
  description: "A documentation site for Mount Joy Mennonite Church technology",
  base: '/mjmc-tech-docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Roles', link: '/roles' },
      { text: 'Run a service', link: '/media/checklists' },
      { text: 'Big Picture', link: '/big-picture' }
    ],

    sidebar: [
      {
        text: 'Overview & infrastructure',
        items: [
          { text: 'How the systems connect', link: '/big-picture' },
          { text: 'Power supply', link: '/power-supply' },
          { text: 'Lighting', link: '/lighting' }
        ]
      },
      {
        text: 'Run a service',
        items: [
          { text: 'Roles', link: '/roles' },
          { text: 'Media checklist', link: '/media/checklists' },
          { text: 'Video checklist', link: '/video/checklists' },
          { text: 'Audio checklist', link: '/audio/checklists' }
        ]
      },
      {
        text: 'Equipment',
        items: [
          { text: 'Cameras', link: '/equipment/cameras' },
          { text: 'Worship Center Video', link: '/equipment/worship-center-video' },
          { text: 'Worship Center Audio', link: '/equipment/worship-center-audio' },
          { text: 'Lighting', link: '/equipment/lighting' },
          { text: 'iMacs', link: '/equipment/imacs' },
          { text: 'Projectors', link: '/equipment/projectors' },
          { text: 'TVs', link: '/equipment/tvs' },
          { text: 'PCs', link: '/equipment/pcs' },
          { text: 'iPads', link: '/equipment/ipads' },
          { text: 'Classrooms', link: '/equipment/classrooms' },
          { text: 'Gym', link: '/equipment/gym' },
          { text: 'Next Gen', link: '/equipment/next-gen' },
          { text: 'Printers', link: '/equipment/printers' },
          { text: 'Clocks', link: '/equipment/clocks' }
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
      },
      {
        text: 'Reference',
        items: [
          { text: 'TODOs', link: '/todo' },
          { text: 'Known issues', link: '/known-issues' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
}))
