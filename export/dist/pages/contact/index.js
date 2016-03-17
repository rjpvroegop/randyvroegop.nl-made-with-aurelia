System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  'use strict';

  var inject, HttpClient, Contact;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      Contact = (function () {
        function Contact(http) {
          _classCallCheck(this, _Contact);

          this.http = http;
        }

        _createClass(Contact, [{
          key: 'submit',
          value: function submit() {
            this.jsonobj = {
              "naam": this.naam,
              "email": this.email,
              "message": this.message
            };

            if (this.jsonobj.naam && this.jsonobj.email && this.jsonobj.message) this.http.post('dist/components/contactengine.php', JSON.stringify(this.jsonobj)).then(function (response) {
              if (JSON.parse(response.response).verzonden) alert('Bedankt voor uw bericht.');else alert('Er ging helaas iets mis met het verzenden van uw bericht.');
              console.log(response.response);
            });else {
              alert("Vul a.u.b. alle velden in.");
            }
          }
        }]);

        var _Contact = Contact;
        Contact = inject(HttpClient)(Contact) || Contact;
        return Contact;
      })();

      _export('Contact', Contact);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbnRhY3QvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBCQUlhLE9BQU87Ozs7Ozs7O2lDQUpaLE1BQU07O3NDQUNOLFVBQVU7OztBQUdMLGFBQU87QUFLUCxpQkFMQSxPQUFPLENBS04sSUFBSSxFQUFDOzs7QUFDZixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjs7cUJBUFUsT0FBTzs7aUJBU1osa0JBQUU7QUFDTixnQkFBSSxDQUFDLE9BQU8sR0FBRztBQUNiLG9CQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7QUFDakIscUJBQU8sRUFBRSxJQUFJLENBQUMsS0FBSztBQUNuQix1QkFBUyxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3hCLENBQUM7O0FBRUYsZ0JBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQzlFLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNoQixrQkFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQ3hDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEtBRWxDLEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO0FBQ3JFLHFCQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNoQyxDQUFDLENBQUMsS0FDRjtBQUNILG1CQUFLLENBQUcsNEJBQTRCLENBQUUsQ0FBQzthQUN4QztXQUNGOzs7dUJBNUJVLE9BQU87QUFBUCxlQUFPLEdBRG5CLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixPQUFPLEtBQVAsT0FBTztlQUFQLE9BQU8iLCJmaWxlIjoicGFnZXMvY29udGFjdC9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
