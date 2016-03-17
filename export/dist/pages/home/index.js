System.register(["jquery"], function (_export) {
  "use strict";

  var Welcome;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_jquery) {}],
    execute: function () {
      Welcome = (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.pageObject = this.loadPageObject();
        }

        _createClass(Welcome, [{
          key: "loadPageObject",
          value: function loadPageObject() {
            var obj = [{
              img: "dist/images/kitesurfing.jpg",
              title: "Over mij",
              description: "In mijn vrije tijd doe ik vaak aan kitesurfen. Ik ben vaak op het strand te vinden in Wijk aan Zee.",
              href: "aboutme"
            }, {
              img: "dist/images/cv.jpg",
              title: "CV",
              description: "Kom te weten waar ik al die jaren heb uitgehangen!",
              href: "cv"
            }, {
              img: "dist/images/responsive.jpg",
              title: "Portfolio",
              description: "Bekijk het werk dat van mij online staat!",
              href: "portfolio"
            }, {
              img: "dist/images/contact.jpg",
              title: "Contact",
              description: "Neem contact met mij op via het contactformulier.",
              href: "contact"
            }];

            return obj;
          }
        }]);

        return Welcome;
      })();

      _export("Welcome", Welcome);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2hvbWUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BRWEsT0FBTzs7Ozs7Ozs7O0FBQVAsYUFBTztBQUNQLGlCQURBLE9BQU8sR0FDTDtnQ0FERixPQUFPOztBQUVoQixjQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6Qzs7cUJBSFUsT0FBTzs7aUJBS0osMEJBQUU7QUFDZCxnQkFBSSxHQUFHLEdBQUcsQ0FDUjtBQUNFLGlCQUFHLEVBQUUsNkJBQTZCO0FBQ2xDLG1CQUFLLEVBQUUsVUFBVTtBQUNqQix5QkFBVyxFQUFFLHFHQUFxRztBQUNsSCxrQkFBSSxFQUFFLFNBQVM7YUFDaEIsRUFDRDtBQUNFLGlCQUFHLEVBQUUsb0JBQW9CO0FBQ3pCLG1CQUFLLEVBQUUsSUFBSTtBQUNYLHlCQUFXLEVBQUUsb0RBQW9EO0FBQ2pFLGtCQUFJLEVBQUUsSUFBSTthQUNYLEVBQ0Q7QUFDRSxpQkFBRyxFQUFFLDRCQUE0QjtBQUNqQyxtQkFBSyxFQUFFLFdBQVc7QUFDbEIseUJBQVcsRUFBRSwyQ0FBMkM7QUFDeEQsa0JBQUksRUFBRSxXQUFXO2FBQ2xCLEVBQ0Q7QUFDRSxpQkFBRyxFQUFFLHlCQUF5QjtBQUM5QixtQkFBSyxFQUFFLFNBQVM7QUFDaEIseUJBQVcsRUFBRSxtREFBbUQ7QUFDaEUsa0JBQUksRUFBRSxTQUFTO2FBQ2hCLENBQ0YsQ0FBQzs7QUFFRixtQkFBTyxHQUFHLENBQUM7V0FDWjs7O2VBbENVLE9BQU8iLCJmaWxlIjoicGFnZXMvaG9tZS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
