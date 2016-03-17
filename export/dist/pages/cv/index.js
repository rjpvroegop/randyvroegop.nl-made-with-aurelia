System.register([], function (_export) {
  "use strict";

  var CV;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      CV = (function () {
        function CV() {
          _classCallCheck(this, CV);

          this.pageObject = this.loadPageObject();
        }

        _createClass(CV, [{
          key: "attached",
          value: function attached() {
            $('.collapsible').collapsible({
              accordion: false });
          }
        }, {
          key: "loadPageObject",
          value: function loadPageObject() {
            var obj = [{
              title: "Ervaringen",
              icon: "layers",
              content: [{
                title: "KPN Alkmaar",
                content: {
                  date: "02-2015 t/m heden",
                  level: "Sales alles-in-1 en mobiele abbonementen",
                  type: "table",
                  content: ["Advisering en verkoop alles in een pakketten voor thuis (TV, Internet en Telefonie)", "Advisering en verkoop van mobiele abbonementen en verlengingen", "Hulp bij problemen met mobiele telefoons op incidenten met de vaste aansluiting", "Sales, after-sales, service, bijverkoop"]
                }
              }, {
                title: "Scheer en Foppen Heerhugowaard",
                content: {
                  date: "10-2010 t/m 03-2015",
                  level: "Sales wit-, bruin- en grijsgoed",
                  type: "table",
                  content: ["Advisering en verkoop witgoed voor de inrichting van huizen of vervanging", "Advisering en verkoop van Televisie en surround-systemen, soundbars en microsets", "Advisering en verkoop van laptops, desktops en assecoires", "Hulp bij het oplossen van computerproblemen en instellen van de TV op locatie", "Sales, after-sales, service, hulp on-site, hulp ter plaatse"]
                }
              }, {
                title: "Spar Veul Ursem",
                content: {
                  date: "01-2007 t/m 10-2010",
                  type: "text",
                  content: "Vakken vullen, magazijn netjes houden."
                }
              }]
            }, {
              title: "Stages",
              icon: "group_work",
              content: [{
                title: "The Patient Safety Company",
                content: {
                  date: "2016",
                  level: "HBO Bachelor",
                  type: "table",
                  content: ["Front-end applicaties met het JS Framework Aurelia", "Incident management systeem voor zorginstellingen verbeteren", "Onderzoek, advisering, ontwerpen en realisatie van nieuwe software", "Javascript, Sass, Aurelia, Gulp, Node.js, MaterializeCSS, Twitter-Bootstrap"]
                }
              }, {
                title: "Sprite-IT",
                content: {
                  date: "2012",
                  level: "MBO 4",
                  type: "table",
                  content: ["solvacare.com bouwen vanuit een Photoshop template (incl. webshop in C#)", "Onderhoud aan de site hetrijswijksetapijthuis.nl in Magento", "Maken van een Wordpress template voor bulters-en-bulters.nl"]
                }
              }, {
                title: "Stichting Het Juttersdok",
                content: {
                  date: "2011",
                  level: "MBO 4",
                  type: "table",
                  content: ["Onderhouden van het internet café die draait op Debian", "Wiskundige formules en recursie leren gebruiken in Javascript"]
                }
              }, {
                title: "Zorgring NHN",
                content: {
                  date: "2010",
                  level: "MBO 4",
                  type: "table",
                  content: ["Een combinatie van Batchbestanden, Excel macro's en berekeningen om trendanalyses mogelijk te maken", "Trendanalyse's ontwikkelen met betrekking tot het Electronisch Patienten Dossier."]
                }
              }]
            }, {
              title: "Opleidingen",
              icon: "description",
              content: [{
                title: "Software engineering",
                content: {
                  date: "2012/2017",
                  level: "HBO Bachelor",
                  type: "table",
                  content: ["HTML, CSS, JS -> uitgebreide kennis van front-end webtalen", "PHP (oo) -> basiskennis van PHP als back-end", "Java -> uitgebreide kennis van Java voor dedicatd desktop applicaties en Android development", "Node.js -> Javascript voor de back-end van een applicatie"]
                }
              }, {
                title: "Particulier Digitaal Onderzoeker",
                content: {
                  date: "2009/2012",
                  level: "MBO 4",
                  type: "table",
                  content: ["Verborgen bestanden op opslagmedia terugvinden", "Werken met hash-editors om verborgen boodschappen in afbeeldingen te traceren", "Documenteren en rapporteren voor een formeel onderzoek", "ICT en Netwerkbeheer, Cisco apparatuur gebruiken en instellen"]
                }
              }, {
                title: "Electrotechniek",
                content: {
                  date: "2005/2009",
                  level: "VMBO",
                  type: "table",
                  content: ["Electra (huis) installaties aanleggen", "Electra kasten bouwen"]
                }
              }]
            }];

            return obj;
          }
        }]);

        return CV;
      })();

      _export("CV", CV);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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
