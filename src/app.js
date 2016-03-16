export class App {
  configureRouter(config, router) {
    config.title = 'randyvroegop.nl';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'pages/home/index',         nav: false, title: 'Welcome'},
      { route: 'aboutme'      , name: 'aboutme',      moduleId: 'pages/aboutme/index',      nav: true,  title: 'About me',      settings: {img:"person_pin"               } },
      { route: 'cv'           , name: 'cv',           moduleId: 'pages/cv/index',           nav: true,  title: 'CV',            settings: {img:"insert_chart"             } },
      { route: 'development'  , name: 'development',  moduleId: 'pages/development/index',  nav: true,  title: 'Development',   settings: {img:"settings_input_component" } },
      { route: 'contact'      , name: 'contact',      moduleId: 'pages/contact/index',      nav: true,  title: 'Contact',       settings: {img:"ring_volume"              } }
    ]);

    this.router = router;
  }
}
