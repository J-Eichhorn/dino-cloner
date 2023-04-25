import React from 'react'
import { useNavigate } from 'react-router-dom'

function Waiver() {

const content = `WHAT ARE THE BASIC ELEMENTS OF A RELEASE?
The elements of a basic release are:
A release of liability and waiver of the right to sue if any loss results from participation in the activity.
An express assumption of risk where the participant acknowledges understanding the nature of the activity and the risks involved, and chooses voluntarily to accept those risks.
A hold harmless agreement where the participant agrees not to hold the District responsible for any loss that may result from participation in the activity.
An indemnification where the participant agrees to pay the District for any losses it may suffer as a result of the participant’s participation in the activity.
A medical consent in which the participant agrees to be responsible for his/her own medical expenses that may result.
CAN WE COMBINE THE ELEMENTS OF A RELEASE IN ONE DOCUMENT?
Yes. The ideal model for a release of liability contains as many of the ‘elements’ as necessary to deal with the situation.
WHAT IS THE RECOMMENDED LANGUAGE FOR A “RELEASE OF LIABILITY” CLAUSE?
As a sample, the following language meets certain situations requiring a release.
“In consideration for being allowed to participate in this Activity, I release from liability and waive my right to sue Rancho Santiago Community College District, their employees, officers, volunteers and agents (collectively “District”) from any and all claims, including claims of the District’s negligence, resulting in any physical injury, illness (including death) or economic loss I may suffer or which may result from my participation in this Activity, travel to and from the Activity (including air travel), or any events incidental to this Activity”.
WHAT IS THE RECOMMENDED LANGUAGE FOR AN “EXPRESSED ASSUMTION OF RISK” CLAUSE?
As a sample, the following language meets certain situations requiring an assumption of risk.
“I am voluntarily participating in this Activity. I understand that there are risks associated with my participation in this Activity, such as physical and/or psychological injury, pain, suffering, illness, disfigurement, temporary or permanent disability, death or economic loss. These injuries or outcomes may arise from my own or other’s actions, inactions, or negligence, or the condition of the Activity location (s) or facility (ies). Nonetheless, I assume all risks of my participation in this Activity, whether known or unknown to me, including travel to and from the Activity (including air travel) or any events incidental to this Activity.”
WHAT IS THE RECOMMENDED LANGUAGE FOR A “HOLD HARMLESS” CLAUSE?
As a sample, the following language meets certain situations requiring an assumption of risk.
“I agree to hold the District harmless from any and all claims, loss or damage to my personal property, liabilities and costs, including attorney’s fees, as a result of my participation in this Activity, including travel to and from the Activity (including air travel) or any events incidental to this Activity. If the District incurs any of these types of expenses, I agree to reimburse the District.”
WHAT IS THE RECOMMENDED LANGUAGE FOR AN “UNDERSTANDING AND ACKNOWLEDGEMENT” CLAUSE?
As a sample, the following language meets certain situations requiring an “understanding and acknowledgement” of risk.
“ I have read this document, and I am signing it freely. I understand the legal consequences of signing this document, including (a) releasing the District from all liability, (b) waiving my right to sue the District, (c) and assuming all risks of participating in this Activity, including travel to and from the Activity (including air travel) or any events incidental to this Activity.
WHAT IS THE RECOMMENDED LANGUAGE FOR A “MEDICAL CONSENT” CLAUSE?
As a sample, the following language meets certain situations requiring a “medical consent.”
“If I need medical treatment as a result of my participation in this Activity, travel to and from the Activity (including air travel), or any events incidental to this Activity, I agree to be financially responsible for any costs incurred as a result of such treatment. I am aware that the District does not provide health insurance for me and that I should carry my own health insurance.”
WHAT IS THE RECOMMENDED LANGUAGE WHEN A MINOR IS INVOLVED?
As a sample, the following language meets certain situations requiring consent by a parent or legal guardian.
“I am the parent or legal guardian of the Participant. I have read this document, and I am signing it freely. I understand the legal consequences of signing this document, including (a) releasing the District from all liability on my and the Participant’s behalf, (b) waiving my and the Participants’ right to sue the District, (c) and assuming all risks of Participant’s participation in this Activity, including travel to and from the Activity (including air travel) or any events incidental to this Activity. I allow the Participant to participate in this Activity. I understand that I am responsible for the obligations and acts of the Participant as described in this document. I agree to be bound by the terms of this document.”`


const navigate = useNavigate()


  return (

    <div id="waiver">
        <h1>Liability Waiver</h1>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <p>{content}</p>
        <br></br>
        <button onClick={() => navigate('/')}>I AGREE</button>
    </div>
  )
}

export default Waiver