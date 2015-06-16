var socket = io.connect('http://localhost:4000/');
socket.on('connected', function() {
   $('.connecting').slideUp(); 
   $('input').attr('disabled', false);
});