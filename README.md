# Welcome to Gnani Voice-Biometric API Service

This document describes the Gnani’s voiceBiometric API that is used to get authenticate user with thier voice.

## Prequisites use any voiceBiometric API
- To get access to our API(s) visit [voicebiometrics.ai](https://voicebiometrics.ai/api/) to register yourself.
- `Token` and `accesskey` will be sent from gnani to your registered email id. This is mandatory to access the api.
- API URL : `armour365.gnani.ai`

## VoiceBiometric API Status codes:

<table>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
<tr class="header">
<th>Status Code</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td markdown="span">0</td>
<td markdown="span">Success</td>
</tr>
 <tr>
<td markdown="span">1</td>
<td markdown="span">Connection Error</td>
 </tr>
<tr>
<td markdown="span">2</td>
<td markdown="span">Time out</td>
</tr>
 <tr>
<td markdown="span">3</td>
<td markdown="span">Short Audio</td>
</tr>
 <tr>
<td markdown="span">4</td>
<td markdown="span">No Audio</td>
</tr>
 <tr>
<td markdown="span">5</td>
<td markdown="span">Internal Error</td>
</tr>
 <tr>
<td markdown="span">6</td>
<td markdown="span">No Enrolment</td>
</tr>
</tbody>
</table>

## VoiceBiometric API decision codes:

<table>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
<tr class="header">
<th>Code</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td markdown="span">0</td>
<td markdown="span">Success</td>
</tr>
 <tr>
<td markdown="span">1</td>
<td markdown="span">Spoof Failure</td>
 </tr>
<tr>
<td markdown="span">2</td>
<td markdown="span">Voice Failure</td>
</tr>
 <tr>
<td markdown="span">3</td>
<td markdown="span">Internal Error</td>
</tr>
</tbody>
</table>

## Sample Code
Here are the list of sample codes.

REST Codes
- [NodeJs](https://github.com/gnani-ai/voicebiometric-api-armour365/tree/master/Nodejs-Client)
- [Python](https://github.com/gnani-ai/voicebiometric-api-armour365/tree/master/Python-Client)

### Support or Contact

#### Disclaimer
The VoiceBiometric APIs are completely proprietary and are the sole property of Gnani.ai. We reserve the right to remove users access at any point of time. Note that the free access to the APIs are purely for testing or experimental purposes, and will be available to the users for a limited amount of time, after which they will have to purchase the commercial version. Gnani.ai will immediately remove access if the user is found to be using the APIs for commercial purposes. If you wish to obtain unlimited access, you can make an enquiry on the website or write to us at operations@gnani.ai. Also if you are having trouble please raise an issue or mail to us at hello@voicebiometrics.ai
