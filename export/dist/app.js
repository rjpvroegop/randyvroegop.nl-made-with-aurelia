System.register([], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'randyvroegop.nl';
            config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: 'pages/home/index', nav: false, title: 'Welcome' }, { route: 'aboutme', name: 'aboutme', moduleId: 'pages/aboutme/index', nav: true, title: 'About me', settings: { img: "person_pin" } }, { route: 'cv', name: 'cv', moduleId: 'pages/cv/index', nav: true, title: 'CV', settings: { img: "insert_chart" } }, { route: 'development', name: 'development', moduleId: 'pages/development/index', nav: true, title: 'Development', settings: { img: "settings_input_component" } }, { route: 'contact', name: 'contact', moduleId: 'pages/contact/index', nav: true, title: 'Contact', settings: { img: "ring_volume" } }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUM7QUFDakMsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFPLFFBQVEsRUFBRSxrQkFBa0IsRUFBVSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDbkgsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFRLElBQUksRUFBRSxTQUFTLEVBQU8sUUFBUSxFQUFFLHFCQUFxQixFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFFLFVBQVUsRUFBTyxRQUFRLEVBQUUsRUFBQyxHQUFHLEVBQUMsWUFBWSxFQUFnQixFQUFFLEVBQ3ZLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBYSxJQUFJLEVBQUUsSUFBSSxFQUFZLFFBQVEsRUFBRSxnQkFBZ0IsRUFBWSxHQUFHLEVBQUUsSUFBSSxFQUFHLEtBQUssRUFBRSxJQUFJLEVBQWEsUUFBUSxFQUFFLEVBQUMsR0FBRyxFQUFDLGNBQWMsRUFBYyxFQUFFLEVBQ3ZLLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBSSxJQUFJLEVBQUUsYUFBYSxFQUFHLFFBQVEsRUFBRSx5QkFBeUIsRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFHLEtBQUssRUFBRSxhQUFhLEVBQUksUUFBUSxFQUFFLEVBQUMsR0FBRyxFQUFDLDBCQUEwQixFQUFFLEVBQUUsRUFDdkssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFRLElBQUksRUFBRSxTQUFTLEVBQU8sUUFBUSxFQUFFLHFCQUFxQixFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFFLFNBQVMsRUFBUSxRQUFRLEVBQUUsRUFBQyxHQUFHLEVBQUMsYUFBYSxFQUFlLEVBQUUsQ0FDeEssQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O2VBWlUsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
