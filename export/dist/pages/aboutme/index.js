System.register(["jquery"], function (_export) {
  "use strict";

  var Aboutme;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_jquery) {}],
    execute: function () {
      Aboutme = (function () {
        function Aboutme() {
          _classCallCheck(this, Aboutme);

          this.pageObject = this.loadPageObject();
        }

        _createClass(Aboutme, [{
          key: "loadPageObject",
          value: function loadPageObject() {
            var obj = {
              myImageSlider: [{
                url: "dist/images/myImageSlider/code.png",
                direction: "left",
                fadeOut: false
              }, {
                url: "dist/images/myImageSlider/surf.png",
                direction: "right",
                fadeOut: false
              }, {
                url: "dist/images/myImageSlider/me.png",
                fadeOut: false
              }, {
                url: "dist/images/myImageSlider/grey.png",
                shift: 0,
                fadeOut: true
              }],
              skills: [{
                url: "dist/images/tiles/html.jpg",
                skill: 100,
                title: "HTML"
              }, {
                url: "dist/images/tiles/css.jpg",
                skill: 90,
                title: "CSS"
              }, {
                url: "dist/images/tiles/js.jpg",
                skill: 100,
                title: "Javascript"
              }, {
                url: "dist/images/tiles/aurelia.png",
                skill: 90,
                title: "Aurelia"
              }, {
                url: "dist/images/tiles/node.png",
                skill: 80,
                title: "Node.js / Express"
              }, {
                url: "dist/images/tiles/java.jpg",
                skill: 80,
                title: "Java"
              }, {
                url: "dist/images/tiles/php.jpg",
                skill: 70,
                title: "PHP"
              }, {
                url: "dist/images/tiles/ps.jpg",
                skill: 70,
                title: "Photoshop"
              }]
            };

            return obj;
          }
        }]);

        return Aboutme;
      })();

      _export("Aboutme", Aboutme);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0bWUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BRWEsT0FBTzs7Ozs7Ozs7O0FBQVAsYUFBTztBQUNQLGlCQURBLE9BQU8sR0FDSjtnQ0FESCxPQUFPOztBQUVoQixjQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6Qzs7cUJBSFUsT0FBTzs7aUJBS0osMEJBQUU7QUFDZCxnQkFBSSxHQUFHLEdBQUc7QUFDUiwyQkFBYSxFQUFFLENBQ2I7QUFDRSxtQkFBRyxFQUFFLG9DQUFvQztBQUN6Qyx5QkFBUyxFQUFDLE1BQU07QUFDaEIsdUJBQU8sRUFBRSxLQUFLO2VBQ2YsRUFDRDtBQUNFLG1CQUFHLEVBQUUsb0NBQW9DO0FBQ3pDLHlCQUFTLEVBQUMsT0FBTztBQUNqQix1QkFBTyxFQUFFLEtBQUs7ZUFDZixFQUNEO0FBQ0UsbUJBQUcsRUFBRSxrQ0FBa0M7QUFDdkMsdUJBQU8sRUFBRSxLQUFLO2VBQ2YsRUFDRDtBQUNFLG1CQUFHLEVBQUUsb0NBQW9DO0FBQ3pDLHFCQUFLLEVBQUUsQ0FBQztBQUNSLHVCQUFPLEVBQUUsSUFBSTtlQUNkLENBQ0Y7QUFDRCxvQkFBTSxFQUFFLENBQ047QUFDRSxtQkFBRyxFQUFFLDRCQUE0QjtBQUNqQyxxQkFBSyxFQUFFLEdBQUc7QUFDVixxQkFBSyxFQUFFLE1BQU07ZUFDZCxFQUNEO0FBQ0UsbUJBQUcsRUFBRSwyQkFBMkI7QUFDaEMscUJBQUssRUFBRSxFQUFFO0FBQ1QscUJBQUssRUFBRSxLQUFLO2VBQ2IsRUFDRDtBQUNFLG1CQUFHLEVBQUUsMEJBQTBCO0FBQy9CLHFCQUFLLEVBQUUsR0FBRztBQUNWLHFCQUFLLEVBQUUsWUFBWTtlQUNwQixFQUNEO0FBQ0UsbUJBQUcsRUFBRSwrQkFBK0I7QUFDcEMscUJBQUssRUFBRSxFQUFFO0FBQ1QscUJBQUssRUFBRSxTQUFTO2VBQ2pCLEVBQ0Q7QUFDRSxtQkFBRyxFQUFFLDRCQUE0QjtBQUNqQyxxQkFBSyxFQUFFLEVBQUU7QUFDVCxxQkFBSyxFQUFFLG1CQUFtQjtlQUMzQixFQUNEO0FBQ0UsbUJBQUcsRUFBRSw0QkFBNEI7QUFDakMscUJBQUssRUFBRSxFQUFFO0FBQ1QscUJBQUssRUFBRSxNQUFNO2VBQ2QsRUFDRDtBQUNFLG1CQUFHLEVBQUUsMkJBQTJCO0FBQ2hDLHFCQUFLLEVBQUUsRUFBRTtBQUNULHFCQUFLLEVBQUUsS0FBSztlQUNiLEVBQ0Q7QUFDRSxtQkFBRyxFQUFFLDBCQUEwQjtBQUMvQixxQkFBSyxFQUFFLEVBQUU7QUFDVCxxQkFBSyxFQUFFLFdBQVc7ZUFDbkIsQ0FDRjthQUNGLENBQUM7O0FBRUYsbUJBQU8sR0FBRyxDQUFDO1dBQ1o7OztlQXpFVSxPQUFPIiwiZmlsZSI6InBhZ2VzL2Fib3V0bWUvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
