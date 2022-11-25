# Application Models

## Government Organization Profile
### Name
GovOrgProfile
### DevStatus
ToDo
### Associations
- belongTo GovOrg 
### Attributes
- id
- GovOrgId: id
- websiteUrl: string
- contactUrl: string
- phoneNumber: integer
- facebookUrl: string
- instagramUrl: string
- googlePlacesUrl: string
- displayName: string
- description: string
- addressNumber: integer
- addressStreet: string
- addressUnit: string
- addressZip: string
- addressCity: string
- addressState: string
- addressCountry: string
- addressNeighborhood: string
- addressDistrict: string
- latlong: string
### Future Attributes
- add image support
- add billing data
- abstract address info into own model
  - evaluate address datatypes
- abstract social info into own model

## Government Organization
### Title
GovOrg
### DevStatus
ToDo
### Associations
- has_one GovOrgProfile
- has_many GovOrgMembership
- has_many Official through GovOrgMembership
### Attributes
- id
- name: string
- category: string
### Future Attributes
abstract government category into own model

## Official
### Name
Official
### DevStatus
ToDo
### Associations
has_many GovOrgMemberships
has_many GovOrg through GovOrgMembership
### Attributes
id
firstName: string
lastName: string
email: string
title: string
phone: integer
### Future Attributes
N/A

## Government Organization Membership
### Name
GovOrgMembership
### DevStatus
ToDo
### Associations
belongs_to GovOrg
belongs_to Official
has_many PolicyProposal
### Attributes
id
govOrgId: id
officialId: id
membershipStatus: string
membershipRole: string
### Future Attributes
add roles and role based access

## Policy Proposal
### Name
PolicyProposal
### DevStatus
ToDo
### Associations
belongs_to GovOrgMembership
belongs_to PollStrategy
belongs_to PolicyPoll
has_many ProposalGroup
has_many PolicyGroup through ProposalGroup
has_many ProposalTag
has_many PolicyTag through ProposalTag
### Attributes
id
govOrgMembershipId: id
pollStrategyId: id
policyPollId: id
--- 
policyTitle: string
policySummary: string
policyBody: id
policyVersion: string
policyStatus: string
### Future Attributes
add the through models for nested associaiton retrieval
create a smart ID serializer
abstract out policyStatus into its own model

## Proposal Group
### Name
ProposalGroup
### DevStatus
ToDo
### Associations
belongs_to PolicyProposal
belongs_to PolicyGroup

### Attributes
id
policyGroupId: id
policyProposalId: id
originPoint: string (lat,long)
sampleSizeRadius: float (in kilometers)
targetGroupSize: integer
### Future Attributes
evaluate if the poll participation should be associated to this model

## Policy Group
### Name
PolicyGroup
### DevStatus
ToDo
### Associations
has_many ProposalGroups
has_many PolicyGroupMemberships
has_many Companies through PolicyGroupMemberships
has_many PolicyProposals through ProposalGroups
### Attributes
id
groupType: string
groupTitle: string
### Future Attributes
spinoff new model for groupTypes or use as enum

## Proposal Tag
### Name
ProposalTag
### DevStatus
ToDo
### Associations
belongs_to PolicyProposal
belongs_to PolicyTag
### Attributes
id
policyProposalId: id
policyTagId: id
### Future Attributes
n/a

## Policy Tag
### Name
PolicyTag
### DevStatus
ToDo
### Associations
has_many ProposalTags
### Attributes
id
tagName: string
tagColor: string (hex code)
tagDescription: string
### Future Attributes
n/a

## Proposal Strategy
### Name
ProposalStrategy
### DevStatus
ToDo
### Associations
has_many PolicyProposals
has_many PollStrategyQuestions
has_many PolicyPolls
### Attributes
id
pollStrategyTitle: string
pollStrategyDescription: string
pollStrategyInstructions: string
### Future Attributes
add pollStrategyInstructions markdown support to create full display
potential add an icon for the strategy

## Poll Strategy Question
### Name
PollStrategyQuestion
### DevStatus
ToDo
### Associations
belongs_to PollStrategy
### Attributes
id
pollStrategyId: id
strategyQuestionText: string
strategyQuestionOrder: integer
strategyQuestionAnswerType: string
strategyQuestionAnswerExample: string
### Future Attributes
n/a

## Policy Poll
### Name
PolicyPoll
### DevStatus
ToDo
### Associations
has_one PolicyProposal
has_one PollStrategy
has_many PollQuestions
has_many PollParticipations
has_many PolicyGroupMemberships through PollParticipations
### Attributes
id
policyProposalId: id
pollStrategyId: id
pollStartDate: datetime
pollEndDate: datetime
pollTimeZone: string
pollStatus: string
pollMediumType: string
pollParticipants: function (pollParticipationCount)
### Future Attributes
spinoff pollStatus into its own model
evaluate if pollTimeZone should be in this model or if it should be moved to the root PolicyProposal model
evaluate spinnning off model for pollMediumType

## Poll Question
### Name
PollQuestion
### DevStatus
ToDo
### Associations
belongs_to PolicyPoll
has_many PollAnswers
### Attributes
id
poicyPollId: id
pollStrategyQuestionReference: id
pollQuestionText: string
membershipRole: string
### Future Attributes
test/evaluate the direct association between PolicyPoll and PollParticipation or using the through association via the PollAnswer join to PollParticipation
evaluate how to create a % complete of the poll

## Poll Answer
### Name
PollAnswer
### DevStatus
ToDo
### Associations
belongs_to PollQuestion
belongs_to PollParticipation
### Attributes
id
pollQuestionId: id
pollParticipationId: id
pollAnswerText: string
pollAnswerStatus: string
### Future Attributes
evalute if the answer status attribute needs to live here or if it should be moved to the pollParticipation

## Poll Participation
### Name
PollParticipation
### DevStatus
ToDo
### Associations
has_many PollAnswers
has_many PollQuestions through PollAnswers
belongs_to PolicyPoll
belongs_to PolicyGroupMembership
### Attributes
id
policyPollId: id
policyGroupMembershipId: id
pollParticipationStatus: string
### Future Attributes
evaluate spinning off the status attribute into its own model

## Policy Group Membership
### Name
PolicyGroupMembership
### DevStatus
ToDo
### Associations
belongs_to PolicyGroup
belongs_to Company
has_many PollParticipations
### Attributes
id
policyGroupId: id
companyId: id
policyGroupMembershipStatus: string
### Future Attributes
add roles and role based access

## Company
### Name
Company
### DevStatus
ToDo
### Associations
has_one CompanyProfile
has_many PolicyGroupMemberships
has_many PolicyGroups through PolicyGroupMemberships
has_many CompanyMemberships
has_many Users through CompanyMemberships
### Attributes
id
companyProfileId: id
officialId: id
companyEmailValidation: true
companyEmailUrlPattern: true
companyWizardStep: string
companyInviteDate: datetime
companyOnboardComplete: datetime
companyStatus: string
### Future Attributes
evalute spinnning off models for wizard, status, settings/admin

## Company Profile
### Name
CompanyProfile
### DevStatus
ToDo
### Associations
belongs_to Company
### Attributes
id
companyId: id
websiteUrl: string
contactUrl: string
phoneNumber: integer
facebookUrl: string
instagramUrl: string
googlePlacesUrl: string
displayName: string
description: string
addressNumber: integer
addressStreet: string
addressUnit: string
addressZip: string
addressCity: string
addressState: string
addressCountry: string
addressNeighborhood: string
addressDistrict: string
latlong: string
### Future Attributes
- add image support
- add billing data
- abstract address info into own model
  - evaluate address datatypes
- abstract social info into own model
### Future Attributes
n/a

## Company Membership
### Name
CompanyMembership
### DevStatus
ToDo
### Associations
belongs_to Company
belongs_to User
### Attributes
id
companyId: id
userId: id
wizardStepId: string
companyTitle: string
### Future Attributes
n/a

## User
### Name
User
### DevStatus
ToDo
### Associations
has_many CompanyMemberships
has_many Companies through Company Membership
### Attributes
id
email: string
cell: integer
firstName: string
lastName: string
displayName: string
### Future Attributes
n/a
