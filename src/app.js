/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */



var UI = require('ui');
var Vector2 = require('vector2');
var Vector3 = require('vector3');


var main = new UI.Card({
  title: 'Pebble.js',
  icon: 'images/menu_icon.png',
  subtitle: 'NOTHING IS GIVEN, EVERYTHING IS EARNED',
  body: 'Press any button.'
});

main.show();

main.on('click', 'select', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Attendance',
        icon: 'images/menu_icon.png',
        subtitle: 'Did you go to school?'
      }, {
        title: 'Grades',
        subtitle: 'Keep up in school'
      }, {
        title: 'Community Service',
        subtitle: 'Log your hours'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
    
    if(e.itemIndex === 0) {
      var attendanceCard = new UI.Card();
      attendanceCard.title('Where are you?');
      attendanceCard.subtitle('Are you in class?');
      
      attendanceCard.on('click', 'up', function(e) {
        var image = new UI.Image({
          position: new Vector3(0, 0),
          size: new Vector3(144, 168),
          image: 'images/your_image.png'
        });
        attendanceCard.add(image);
        attendanceCard.show();
    });
    }
                        
    if(e.itemIndex === 1) {
      var gradesCard = new UI.Card();
      gradesCard.subtitle('button' + e.itemIndex + 'ok');
      gradesCard.show();
    }
    if(e.itemIndex === 2) {
      var communityCard = new UI.Card();
      communityCard.subtitle('button' + e.itemIndex + 'ok');
      communityCard.show();
    }
    
  });
  menu.show();
});




main.on('click', 'up', function(e) {
  var wind = new UI.Window({
    fullscreen: true,
  });
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});