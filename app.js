// https://rps-rcb.firebaseio.com/viewers
// /viewers
//var rpsFirebase = new Firebase('https://rps-rcb.firebaseio.com/');

var rpsFirebase = new Firebase('https://rps-rcb.firebaseio.com/');
//var connectedRpsFirebase = new Firebase('https://rps-rcb.firebaseio.com/viewers');
//rpsFirebase.set('User ' + name + ' says ' + text);
//rpsFirebase.set({Player1: name, choice: text, wins: 0, losses: 0, ties: 0});
//rpsFirebase.set({Player1: name, choice: text, wins: 0, losses: 0, ties: 0});
//rpsFirebase.set({Player2: name, choice: text, wins: 0, losses: 0, ties: 0});


      $('#nameInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();

          rpsFirebase.set({name: name});
          $('#nameInput').val('');
        }
      });

      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          rpsFirebase.push({name: name, text: text});
          $('#messageInput').val('');
        }
      });
      rpsFirebase.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });
      function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };
 
        //        var text = $('chatinput').val();
   //     rpsFirebase.on('child_added', function(snapshot) {
  //We'll fill this in later.
//});