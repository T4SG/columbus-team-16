/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
//var VectorLebronSad = require('vectorLebronS');
var set = 0;
var streak = 10;
var total = 40;



var main = new UI.Card({
  subtitle: 'NOTHING IS GIVEN, EVERYTHING IS EARNED'
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
        icon: 'images/menu_icon.png',
        subtitle: 'Keep up in school'
      }, {
        title: 'Activities',
        icon: 'images/menu_icon.png',
        subtitle: 'Log your hours'
      }, {
        title: 'Twitter Feed',
        icon: 'images/menu_icon.png',
        subtitle: 'Check out twitter!'
      }, {
        title: 'Goals',
        icon: 'images/menu_icon.png',
        subtitle: 'Look at your accomplishments'
      }]
    }]
  });
  menu.on('select', function(e) {
    if(e.item.title === 'Attendance') {
      var attendanceCard = new UI.Window({
        fullscreen: true,
        //backgroundcolor: 'white'
       });
      var streak_text = new UI.Text({
        position: new Vector2(0, 50),
        size: new Vector2(144, 30),
        font: 'gothic-24-bold',
        text: 'Streak: ' + streak.toString(),
        textAlign: 'center'
      });
      var total_text = new UI.Text({
        position: new Vector2(0, 70),
        size: new Vector2(144, 30),
        font: 'gothic-24-bold',
        text: 'Total Days: ' + total.toString(),
        textAlign: 'center'
      });
      var in_school = new UI.Text({
        position: new Vector2(35, 0),
        size: new Vector2(144, 30),
        font: 'gothic-24-bold',
        text: 'In School?',
        textAlign: 'center'
      });
      var not_in_school = new UI.Text({
        position: new Vector2(33, 130),
        size: new Vector2(144, 30),
        font: 'gothic-24-bold',
        text: 'No School?',
        textAlign: 'center'
      });
      var happy_lebron = new UI.Image({
        //added stuff here
     
        image: 'HAPPY_LEBRON'
      });
      var sad_lebron = new UI.Image({
        //position: new VectorLebronSad(0,0),
        //size: new VectorLebronSad(144,168),
        image: 'SAD_LEBRON'
      });
      attendanceCard.add(in_school);
      attendanceCard.add(not_in_school);
      attendanceCard.add(total_text);
      attendanceCard.add(streak_text);
      //get rid of this if it doesn't work
      attendanceCard.show();
      attendanceCard.on('click', 'up', function(){
        if (set === 0) {
          streak = streak + 1;
          total = total + 1;
          set = 1;
        }
        
        attendanceCard.add(happy_lebron);
        //attendanceCard.show();
        streak_text.text('Total Days: ' + total.toString());
        streak_text.text('Streak Days: ' + streak.toString());
        attendanceCard.add(streak_text);
        attendanceCard.add(total_text);
      });
      attendanceCard.on('click', 'down', function(){
        if (set === 0) {
          streak = 0;
          set = 1;
        }
        attendanceCard.add(sad_lebron);
        streak_text.text('Streak Days: ' + streak.toString());
        attendanceCard.add(streak_text);
      });

    }
    if(e.item.title === 'Grades') {
      var gradesmenu = new UI.Menu({
        sections: [{
          items: [{
            title: 'Math',
          }, 
          {
          title: 'English',
          },
          {
          title: 'Language',
          },
                  {
          title: 'History',
          }, 
                  {
          title: 'Elective',
          }, {
          title: 'Science',
          }]
        }]
      });
      gradesmenu.on('select', function(e) {
        var lettergrademenu = new UI.Menu({
          sections: [{
            items: [{
              title: 'A',
            }, {
              title: 'B',
            }, {
              title: 'C',
            }, {
              title: 'D',
            }, {
              title: 'F',        
            }]
          }]
        });
        
       // lettergrademenu.on('select', function(e) {
        // lettergrademenu.item(e.sectionIndex, e.itemIndex {title:e.item.title, subtitle: 'Current Course Grade'}); 
        //});
        
        lettergrademenu.show();
      });
      
      gradesmenu.show();

    }//end of if grades statement
    if(e.item.title === 'Goals') {
     var goalmenu = new UI.Menu ({
       sections: [{
         items: [{
           title: '15 day attendance streak',
         }, {
           title: '3 hrs service',
         }, {
           title: '5 hrs activities',
         }, {
           title: '30 day attendance streak',
         }]
       }]
     });
      goalmenu.show();
    } //end goals tab
    if(e.item.title === 'Activities') {
      var activitymenu = new UI.Menu({
        sections: [{
          items: [{
            title: 'Community Service',
          }, {
            title: 'Extracurriculars',
          }]
        }]
      });
      activitymenu.show();
    }//end goal loop
  });
  
  menu.show();
});

  