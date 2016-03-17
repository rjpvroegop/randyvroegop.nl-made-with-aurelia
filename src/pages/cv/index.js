export class CV {
  constructor(){
    this.pageObject = this.loadPageObject();
  }

  attached() {
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  }

  loadPageObject(){
    var obj = [
      {
        title: "Ervaringen",
        icon: "layers",
        content: [
          {
            title: "KPN Alkmaar",
            content: {
              date: "02-2015 t/m heden",
              level: "Sales alles-in-1 en mobiele abbonementen",
              type: "table",
              content: [
                "Advisering en verkoop alles in een pakketten voor thuis (TV, Internet en Telefonie)",
                "Advisering en verkoop van mobiele abbonementen en verlengingen",
                "Hulp bij problemen met mobiele telefoons op incidenten met de vaste aansluiting",
                "Sales, after-sales, service, bijverkoop"
              ]
            }
          },
          {
            title: "Scheer en Foppen Heerhugowaard",
            content: {
              date: "10-2010 t/m 03-2015",
              level: "Sales wit-, bruin- en grijsgoed",
              type: "table",
              content: [
                "Advisering en verkoop witgoed voor de inrichting van huizen of vervanging",
                "Advisering en verkoop van Televisie en surround-systemen, soundbars en microsets",
                "Advisering en verkoop van laptops, desktops en assecoires",
                "Hulp bij het oplossen van computerproblemen en instellen van de TV op locatie",
                "Sales, after-sales, service, hulp on-site, hulp ter plaatse"
              ]
            }
          },
          {
            title: "Spar Veul Ursem",
            content: {
              date: "01-2007 t/m 10-2010",
              type: "text",
              content: "Vakken vullen, magazijn netjes houden."
            }
          }
        ]
      },
      {
        title: "Stages",
        icon: "group_work",
        content: [
          {
            title: "The Patient Safety Company",
            content: {
              date: "2016",
              level: "HBO Bachelor",
              type: "table",
              content: [
                "Front-end applicaties met het JS Framework Aurelia",
                "Incident management systeem voor zorginstellingen verbeteren",
                "Onderzoek, advisering, ontwerpen en realisatie van nieuwe software",
                "Javascript, Sass, Aurelia, Gulp, Node.js, MaterializeCSS, Twitter-Bootstrap"
              ]
            }
          },
          {
            title: "Sprite-IT",
            content: {
              date: "2012",
              level: "MBO 4",
              type: "table",
              content: [
                "solvacare.com bouwen vanuit een Photoshop template (incl. webshop in C#)",
                "Onderhoud aan de site hetrijswijksetapijthuis.nl in Magento",
                "Maken van een Wordpress template voor bulters-en-bulters.nl"
              ]
            }
          },
          {
            title: "Stichting Het Juttersdok",
            content: {
              date: "2011",
              level: "MBO 4",
              type: "table",
              content: [
                "Onderhouden van het internet café die draait op Debian",
                "Wiskundige formules en recursie leren gebruiken in Javascript"
              ]
            }
          },
          {
            title: "Zorgring NHN",
            content: {
              date: "2010",
              level: "MBO 4",
              type: "table",
              content: [
                "Een combinatie van Batchbestanden, Excel macro's en berekeningen om trendanalyses mogelijk te maken",
                "Trendanalyse's ontwikkelen met betrekking tot het Electronisch Patienten Dossier."
              ]
            }
          }
        ]
      },
      {
        title: "Opleidingen",
        icon: "description",
        content: [
          {
            title: "Software engineering",
            content:
            {
              date: "2012/2017",
              level: "HBO Bachelor",
              type: "table",
              content: [
                "HTML, CSS, JS -> uitgebreide kennis van front-end webtalen",
                "PHP (oo) -> basiskennis van PHP als back-end",
                "Java -> uitgebreide kennis van Java voor dedicatd desktop applicaties en Android development",
                "Node.js -> Javascript voor de back-end van een applicatie"
              ]
            }
          },
          {
            title: "Particulier Digitaal Onderzoeker",
            content: {
              date: "2009/2012",
              level: "MBO 4",
              type: "table",
              content: [
                "Verborgen bestanden op opslagmedia terugvinden",
                "Werken met hash-editors om verborgen boodschappen in afbeeldingen te traceren",
                "Documenteren en rapporteren voor een formeel onderzoek",
                "ICT en Netwerkbeheer, Cisco apparatuur gebruiken en instellen"
              ]
            }
          },
          {
            title: "Electrotechniek",
            content: {
                date: "2005/2009",
                level: "VMBO",
                type: "table",
                content: [
                  "Electra (huis) installaties aanleggen",
                  "Electra kasten bouwen"
                ]
              }
          }

        ]
      }
    ];

    return obj;
  }
}
