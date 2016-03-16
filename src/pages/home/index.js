import 'jquery';

export class Welcome {
  constructor(){
    this.pageObject = this.loadPageObject();
  }

  loadPageObject(){
    var obj = [
      {
        img: "dist/images/kitesurfing.jpg",
        title: "Over mij",
        description: "In mijn vrije tijd doe ik vaak aan kitesurfen. Ik ben vaak op het strand te vinden in Wijk aan Zee.",
        href: "aboutme"
      },
      {
        img: "dist/images/cv.jpg",
        title: "CV",
        description: "Kom te weten waar ik al die jaren heb uitgehangen!",
        href: "cv"
      },
      {
        img: "dist/images/responsive.jpg",
        title: "Portfolio",
        description: "Bekijk het werk dat van mij online staat!",
        href: "portfolio"
      },
      {
        img: "dist/images/contact.jpg",
        title: "Contact",
        description: "Neem contact met mij op via het contactformulier.",
        href: "contact"
      }
    ];

    return obj;
  }
}
