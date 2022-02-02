var greyicon = 'https://webstudio.network/trello-okado/js-v1/grey.png';
var coloricon = 'https://webstudio.network/trello-okado/js-v1/smile.png';

var Promise = TrelloPowerUp.Promise;

var boardButtonCallback = function(t){
    return t.popup({
      title: 'Popup List Example',
      items: [
        {
          text: 'Open Board Bar',
          callback: function(t){
            return t.boardBar({
              url: '../views/board-bar.html',
              height: 200
            })
            .then(function(){
              return t.closePopup();
            });
          }
        }
      ]
    });
  };

TrelloPowerUp.initialize({
      'card-back-section': function (t, options){
        return {
          title: 'OKADO :3',
          icon: greyicon, // Must be a gray icon, colored icons not allowed.
          content: {
            type: 'iframe',
            url: t.signUrl('https://webstudio.network/trello-okado/js-v1/views/card-back-section.html'),
            height: 30 // Max height is 500
          }
        };
      },
      'show-settings': function(t, options){
        return t.boardBar({
            url: '../views/board-bar.html',
            height: 200
        });
      },
      
      'board-buttons': function(t, options){
        return [{
          icon: coloricon,
          text: 'OKADO :3',
          condition: 'always',
          callback: boardButtonCallback
        }]
    },
    'card-buttons': function(t, options) {
        return [{
          icon: greyicon,
          text: 'ОКАДО :3',
          callback: function(t) {
            return t.popup({
              title: "...",
              url: '../views/popup.html',
            });
          }
        }];
      },
  });