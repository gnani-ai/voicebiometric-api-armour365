# Nodejs Voice-Biometric Client

## Prerequisites

You need to have nodejs version 14.x (latest LTS version) and npm version 6.x

## How to setup the API
- Update configurations in config/config.js file
#### For Example:

<table>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
<tr class="header">
<th>Key</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td markdown="span">token</td>
<td markdown="span">eyJhbGcIIUz.iOiJIUzI1N</td>
</tr>
<tr>
<td markdown="span">accesskey</td>
<td markdown="span">lkjhgds12kj</td>
</tr>
 <tr>
<td markdown="span">audio_file_path</td>
<td markdown="span">./audio/speaker.wav</td>
 </tr>
 <tr>
<td markdown="span">speaker_name</td>
<td markdown="span">gnani</td>
</tr>
 <tr>
<td markdown="span">email_id</td>
<td markdown="span">youremailid@gmail.com</td>
</tr>
</tbody>
</table>

* After updating the config/config.js file you can run the particular client and get the response data.

## Enroll user Voice:
- To enroll your voice with gnani voicebiometric server  
  `sudo node enroll.js`
    
## Authenticate user Voice:
- To authenticate your voice with gnani voicebiometric server  
  `sudo node authenticate.js`
  
## DisEnroll user Voice:
- To disenroll your voice with gnani voicebiometric server  
  `sudo node disenroll.js`


