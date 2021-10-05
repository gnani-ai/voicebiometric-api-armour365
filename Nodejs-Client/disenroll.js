var request = require('request')
var config = require('./config/config');
var fs = require('fs')
/**
 * Method to disenroll registered user voice with Voicebiometric server
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
        var api_url = config.VOICEBIOMETRIC_DISENROLL_API_URL
        var speaker = config.SPEAKER_NAME
        var token = config.TOKEN
        var accesskey = config.ACCESSKEY
        var userid = config.EMAIL_ID
        var options = {
        'method': 'POST',
        'url': api_url,
        'headers': {
            "product": "voice-biometric",
            "token": token,
            "accesskey":accesskey,
            "userid": userid
        },
          formData: {
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