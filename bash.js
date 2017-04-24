// Output a prompt
var commands = require('./commands');


process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  let input = data.toString().trim(); // remove the newline
  if(input === 'date') process.stdout.write(Date() + '\n');

  process.stdout.write('\nprompt > ');

});



