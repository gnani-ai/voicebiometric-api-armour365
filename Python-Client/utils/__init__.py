import json
import requests

from log_config.logger import get_logger

logger = get_logger(__name__)


def voicebiometric_service(api_url, request_headers, request_payload, files={}):
    """ Method to send text and get converted audio string in response
        Args:
            request_headers (json): request headers
            request_payload (json): request payload
        Raises:
            Exceptions
        Returns:
            response: Response from the server
    """
    try:
        response = requests.request("POST", api_url, headers=request_headers, data=request_payload, files=files)

        return response.json()

    except BaseException as exception:
        logger.exception('Exception in getting voicebiometric !' + str(exception))
        return {"message": "Something went wrong","status":"fail"}
