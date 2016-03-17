export class Development {
  constructor() {
    this.pageObject = this.loadPageObject();
  }

  loadPageObject(){
    var obj = [
      {
        img: "dist/images/dev/randy.jpg",
        title: "Randy Vroegop",
        description: "Mijn oude website",
        href: "https://github.com/rjpvroegop/randyvroegop.nl-made-by-hand/tree/master/old"
      },
      {
        img: "dist/images/dev/lieke.jpg",
        title: "Leuk bij Lieke",
        description: "Gastouderopvang Leuk bij Lieke!",
        href: "http://www.leukbijlieke.nl/"
      },
      {
        img: "dist/images/dev/solvacare.png",
        title: "Solvacare",
        description: "solvacare.com",
        href: "http://solvacare.com/nl/home"
      }
    ];

    return obj;
  }
}
