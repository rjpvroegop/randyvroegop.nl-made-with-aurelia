import 'jquery';

export class Aboutme {
  constructor(){
    this.pageObject = this.loadPageObject();
  }

  loadPageObject(){
    var obj = {
      myImageSlider: [
        {
          url: "dist/images/myImageSlider/code.png",
          direction:"left",
          fadeOut: false
        },
        {
          url: "dist/images/myImageSlider/surf.png",
          direction:"right",
          fadeOut: false
        },
        {
          url: "dist/images/myImageSlider/me.png",
          fadeOut: false
        },
        {
          url: "dist/images/myImageSlider/grey.png",
          shift: 0,
          fadeOut: true
        }
      ],
      skills: [
        {
          url: "dist/images/tiles/html.jpg",
          skill: 100,
          title: "HTML"
        },
        {
          url: "dist/images/tiles/css.jpg",
          skill: 90,
          title: "CSS"
        },
        {
          url: "dist/images/tiles/js.jpg",
          skill: 100,
          title: "Javascript"
        },
        {
          url: "dist/images/tiles/aurelia.png",
          skill: 90,
          title: "Aurelia"
        },
        {
          url: "dist/images/tiles/node.png",
          skill: 80,
          title: "Node.js / Express"
        },
        {
          url: "dist/images/tiles/java.jpg",
          skill: 80,
          title: "Java"
        },
        {
          url: "dist/images/tiles/php.jpg",
          skill: 70,
          title: "PHP"
        },
        {
          url: "dist/images/tiles/ps.jpg",
          skill: 70,
          title: "Photoshop"
        },
      ]
    };

    return obj;
  }
}
