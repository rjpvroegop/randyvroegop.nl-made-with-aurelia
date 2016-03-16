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
              type: "text",
              content: "Verkopen van abbonementen, alles-in-een thuis, losse mobiele toestellen en prepaid."
            }
          },
          {
            title: "Scheer en Foppen Heerhugowaard",
            content: {
              date: "10-2010 t/m 03-2015",
              type: "text",
              content: "Verkopen van witgoed, televisie, audioapparatuur, klein huishoudelijk, laptops en Ziggo abbonementen."
            }
          },
          {
            title: "Spar Veul Ursem",
            content: {
              date: "01-2007 t/m 10-2010",
              type: "text",
              content: "Vakken vullen, magazijn beheren."
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
            content: {
                date: "2012/2017",
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
                type: "table",
                content: [
                  "Electra (huis) installaties aanleggen",
                  "Electra kasten bouwen"
                ]
              }
          }

        ]
      },
      {
        title: "Stages",
        icon: "group_work",
        content: [
          {
            title: "Sprite-IT",
            content: {
                date: "2012",
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
                type: "table",
                content: [
                  "Een combinatie van Batchbestanden, Excel macro's en berekeningen om trendanalyses mogelijk te maken",
                  "Trendanalyse's ontwikkelen met betrekking tot het Electronisch Patienten Dossier."
                ]
              }
          }
        ]
      }
    ];

    return obj;
  }
}
