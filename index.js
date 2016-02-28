var config = require('./config.js');
var Speakable = require('speakable');

var speakable = new Speakable({key: config.apiKey}, {
  sox_path: 'sox',
  threshold: '2.0'
});

speakable.on('speechStart', function() {
  console.log('onSpeechStart');
});

speakable.on('speechStop', function() {
  console.log('onSpeechStop');
});

speakable.on('speechReady', function() {
  console.log('onSpeechReady');
});

speakable.on('error', function(err) {
  console.log('onError:');
  console.log(err);
  speakable.recordVoice();
});

speakable.on('speechResult', function(recognizedWords) {
  console.log('onSpeechResult:')
  console.log(recognizedWords);
  speakable.recordVoice();
});

speakable.recordVoice();
