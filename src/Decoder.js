module.exports = function () {
  var DecoderController = {};

  DecoderController._getColorValue = function (color, done) {
    switch(color) {
      case 'black':
        done(null,0);
        break;
      case 'brown':
        done(null,1);
        break;
      case 'red':
        done(null,2);
        break;
      case 'orange':
        done(null,3);
        break;
      case 'yellow':
        done(null,4);
        break;
      case 'green':
        done(null,5);
        break;
      case 'blue':
        done(null,6);
        break;
      case 'violet':
      case 'purple':
        done(null,7);
        break;
      case 'grey':
        done(null,8);
        break;
      case 'white':
        done(null,9);
        break;
      default:
        done('NOTFOUND')
    }
  };

  DecoderController._getMultiplierValue = function (color, done) {
    switch(color) {
      case 'black':
        done(null,1);
        break;
      case 'brown':
        done(null,10);
        break;
      case 'red':
        done(null,100);
        break;
      case 'orange':
        done(null,1000);
        break;
      case 'yellow':
        done(null,10000);
        break;
      case 'green':
        done(null,100000);
        break;
      case 'blue':
        done(null,1000000);
        break;
      case 'gold':
        done(null,0.1);
        break;
      case 'silver':
        done(null,0.01);
        break;
      default:
        done('NOTFOUND')
    }
  };

  DecoderController._getToleranceValue = function (color, done) {
    switch(color) {
      case 'black':
        done(null,0.01);
        break;
      case 'brown':
        done(null,0.02);
        break;
      case 'gold':
        done(null,0.05);
        break;
      case 'silver':
        done(null,0.1);
        break;
      default:
        done('NOTFOUND')
    }
  };

  return DecoderController;
};
