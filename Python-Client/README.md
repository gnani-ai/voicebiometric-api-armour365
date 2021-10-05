# Python Voice-Biometric Client

## Prerequisites
- You need to have python version 3.6 or later 
- Install below requirements via pip before starting application
  - requests
  - pytz

## How to setup the API
- In your client voiceBiometric code, you are required to pass header along with the request paylod. 
The headers must contain product parameter as "voice-biometric". 
- Update the user.config file with all these parameters.

#### For Example:
 **In VOICEBIOMETRIC_USER section:**

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

* After updating the user.config file you can run the particular client and get the response data.
 
## Enroll user Voice:
* Run `enroll.py` file to enroll your voice with Gnani VoiceBiometrice Service
#### Sample Response Format From Enroll API
#### Success Scenario:
```
    {
        "decision_code": 0,
        "message": "Enrollment success for id: gnani",
        "spoof": 0,
        "spoof_score": 1,
        "status": "success",
        "status_code": 0
    }
```
#### Failure Scenario:
```
    {
        "decision_code": 3,
        "message": "Fail due to internal error",
        "spoof": 0,
        "spoof_score": 1,
        "status": "fail",
        "status_code": 5
    }
```
## Authenticate your Voice
* Run `authenticate.py` file to authenticate your voice with Gnani VoiceBiometrice Service
#### Sample Response Format From Authenticate API
#### Success Scenario:
```
    {
        "decision_code": 0,
        "message": "Speaker Verified to be gnani",
        "score": 1.0,
        "spoof": 0,
        "spoof_score": 1,
        "status": "success",
        "status_code": 0
    }
```
#### Failure Scenario:
```
    {
        "decision_code": 3,
        "message": "Fail due to internal error",
        "spoof": 0,
        "spoof_score": 1,
        "status": "fail",
        "status_code": 5
    }
```
#### Incase of Mismath in speaker Voice:
```
   {
        "decision_code": 2,
        "message": "Speaker Mismatch",
        "score": 0.3892021179199219,
        "spoof": 0,
        "spoof_score": 1,
        "status": "fail",
        "status_code": 0
  }
```
## Disenroll User Voice

* Run `disenroll.py` file to disenroll your voice with Gnani VoiceBiometrice Service

#### Sample Response Format From DisEnroll API
#### Success Scenario:
```
    {
        "message": "Cleared enrollment for speaker gnani",
        "status": "success",
        "status_code": 0
    }
```
#### Failure Scenario:
```
    {
        "message": "No enrollment details for id 123 is available",
        "status": "fail",
        "status_code": 0
    }
```

### Note
- You can give any speaker audio file from your local. Make sure absolute file path is given.
- Your request will not be authenticated if you fail to add any of headers to your request.

## PyPi Package Link.
- For package link: [Package Link](https://pypi.org/project/armour365/1.0/)

## How to Use pip package
### 1. Installation of package. 
- `pip install armour365==1.0`

#### Note:
- Please make sure you are running the below python script from the directory which has certificate file and speaker audio file. 

### sample usage to enroll your voice :
```python
from armour365  import enroll

enroll.start()
```

When you execute above code you will be asked to enter the below details
- Your token
- Your accesskey
- Audiofile Name with extention
- Speaker's name
- Email ID of the user

As soon as you give above details your request will be sent to voicebiometric enroll  api.

### To use authenticate API :
```python
from armour365  import authenticate

authenticate.start()
```
Enter the required inputs as requested to request voicebiometric authenticate API.

### To use disenroll API :
```python
from armour365  import disenroll

disenroll.start()
```
Enter the required inputs as requested to request voicebiometric authenticate API.




