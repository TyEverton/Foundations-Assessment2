//Welcome to the Password Validator Tool!\\

//Please enter your password below!\\

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your password? ', function(answer) {
  console.log('Verifying your password. Please hold.');

  if(answer.length >= 10){
    console.log('Success!')
  } else {
    console.log('Password failed successfully, please try again..')
  }


  rl.close();
});
