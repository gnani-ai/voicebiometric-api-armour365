from configparser import ConfigParser
from log_config.logger import get_logger
from utils import voicebiometric_service

logger = get_logger(__name__)

# Reading from config file
parser = ConfigParser()
parser.read('user.config')


def main():
    """ Set all below parameters in the config file. """
    try:
        logger.info("DisEnrollment Method ! - Start")
        api_url = parser.get('VOICEBIOMETRIC_USER', 'VOICEBIOMETRIC_DISENROLL_API_URL')
        speaker = parser.get('VOICEBIOMETRIC_USER', 'SPEAKER_NAME')
        token = parser.get('VOICEBIOMETRIC_USER', 'TOKEN')
        accesskey = parser.get('VOICEBIOMETRIC_USER', 'ACCESSKEY')
        userid = parser.get('VOICEBIOMETRIC_USER', 'EMAIL_ID')


        # construct request headers
        headers = {
            "product": "voice-biometric",
            "token": token,
            "accesskey": accesskey,
            "userid":userid
        }

        # construct request payload
        payload = {'speaker': speaker}
        """
            Request Gnani VoiceBiometric Service to enroll your voice
        """
        response = voicebiometric_service(api_url, headers, payload)
        logger.info("Response from VoiceBiometric server : {}".format(response))
        logger.info("DisEnrollment Method ! - End")
    except BaseException as e:
        logger.exception(e)
        logger.info("Exception in main method !")

if __name__ == '__main__':
    main()
