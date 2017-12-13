var bitcoin = require('bitcoin');
var client = new bitcoin.Client({
  host: 'onther.io',
  port: 18333,
  user: 'onther',
  pass: 'rlagnlrud',
  timeout: 40000
});

const txHash = process.argv[2].toString();

client.getTransaction(txHash, function(err, res){
  if (err) {
     return console.error(err);
  }
  for (let i = 0; i < res.details.length; i++) {
      if(res.details[i].category == 'receive') {
        console.log(res.details[i].amount + ' was sent to ' + res.details[i].address);
        break;
      }
  }
});
