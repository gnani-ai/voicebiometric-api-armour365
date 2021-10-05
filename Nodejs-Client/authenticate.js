var request = require('request')
var config = require('./config/config');
var fs = require('fs')
/**
 * Method to authenticate user voice which is registered with Gnani Voicebiometic server
 *
 * @param {object} options to the tts server request
 * @returns
 */

function voicebiometric_service(options){
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
}

/**
 * Main Method
 *
 * Setting the all parameters required for rest request
 *
 * @returns
 */
function main(){
    try{
        var api_url = config.VOICEBIOMETRIC_AUTHENTICATE_API_URL
        var audio_file = config.AUDIO_FILE_PATH
        var speaker = config.SPEAKER_NAME
        var token = config.TOKEN
        var accesskey = config.ACCESSKEY
        var userid = config.EMAIL_ID
        var word_array = audio_file.split("/")
        var filename = word_array[word_array.length-1]
        var options = {
        'method': 'POST',
        'url': api_url,
        'headers': {
            "product": "voice-biometric",
            "token": token,
            "accesskey":accesskey,
            "userid":userid
        },
          formData: {
            'audio_file': {
              'value': fs.createReadStream(audio_file),
              'options': {
                'filename': filename,
                'contentType': null
              }
            },
            'speaker': speaker
          }

        };
        voicebiometric_service(options)
    }catch (error) {
        console.log(error.message);
    }
}

//main method called here
main()