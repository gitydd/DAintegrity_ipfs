
   //var sha256 = require('../node_modules/crypto-js/sha256');
   var sha256 = require('crypto-js/sha256');
   ///import sha256 from 'js-sha256';
   //import sha256 from 'crypto-js/256';
/*     const ipfsAPI = require('ipfs-api');

      // const ipfsAPI = require('ipfs-api');
     const ipfs = ipfsAPI({host: 'localhost', port: '5001', protocol: 'http'});

*/
  /*  function getContent(address){   //compute the content of shard through ipfsaddress
        ipfs.get(address,function (err,files) {
         if (err || typeof files == "undefined") {
             console.log(err);
         } else {
             console.log(files);
         }
        });
    }
*/
window.computeRoot = function() {

    var shard1=$("#shard").val();
    var auxiliary1=$("#auxiliary").val();
    computeroot(shard1,auxiliary1);

}

function computeroot(shard,auxiliary){  //compute new Merkle tree root
        var preleaf = sha256(shard.trim()).toString();
        var leaf =sha256(preleaf.trim()).toString();


        var str = new Array();
        str = auxiliary.split(",");
        var length=str.length();
        console.log(length);

        var hashstring = leaf;
        for (var i = 0; i <length; i++) {
            hashstring = hashstring.concat(str[i]); 
            hashstring = sha256(hashstring.trim()).toString()   
        }

        var newroot = hashstring;
        console.log(newroot);

    }