DONE
- abstract into layout components for the navigation
  https://nextjs.org/docs/basic-features/layouts
- add navigation indicator
create routes/pages for 
  drafts - index
  drafts - create
  drafts - show/edit
create the new show
- link the create drafts button to new
- seperate each page screen into wizards steps and create all the wizard steps
- link up the different wizard steps with Link element


TODO
----
  - add formik form elements

- add the authenticator elements
  - add submit function for auth
  - add confirmation scene
  - add confirmation link to wizard
  - load user data in dashboard and update in the navigation bar to display



  fields firstName
  LastName
  emailaddress
  password
  

add sign up element to the sign up page
route to dashboard after sign up
add govorg wizard element for profile
add signout link to dashboard main bar
add sign in elements to the sign in page


- add the step indicator


- configure formik for wizard step

add sign out button above the user link

----

update the elements for step one
update the elements for step two
update the elements for step three
update the elements for step four
update the elements for step five

--- 
add the models to support the GovOrgProfile model
add the models to support the GovOrg model
add the models to support the Official model
add the models to support PolicyProposal
---
create onboarding wizard for government officials

add the required form functions per step basis for draft wizard
  step one
  step two
  step three
  step four
  step five
--- 
update form elements on a per page basis
  step one - title, tag, group
    policyTitle
    select proposal tags
    select proposal groups
    add government id from the authentication background
  step two - policy body
    policySummary
    policyBody
    policyStrategy
  step three - poll model
    pollStartDate: datetime
    pollEndDate: datetime
    pollTimeZone: string
    pollMediumType: string
    finalize the poll questions
  step four -
    approve the group +/-
  step five
    view the proposed draft and graduate
    poll status, live
    policy status, complete



link the edit view to show page
add Amplify sign in function to sign in page
add Amplify sign up function to sign up page
add User access to the API
update the Blog/Posts/Comments models to coincide
load the index page with live items
add the show page items
- add wizard breadcrumbs links

complete layout components from tailwindui
  drafts - index
  drafts - create
    define the different wizard steps and attributes for steps
      step one
      step two
      step three
  drafts - show
    define the function method to graduate into live poll
    define the function to edit the poll via the wizard
    define the function to pause the poll

load data from DB for all of these instances (single field)
  drafts - index
  drafts - create
  drafts - show

update data models
add dummy data to complete 
load all attributes
add mutations
 (all root fields)
  drafts - index
  drafts - create
  drafts - show

update navigation, names, icons for desktop and mobile navigation

design logo - policy pal

TRAIN WORK--work on the landing page



create routes/pages for 
  groups - index
  groups - show
  groups - create
  companies - index
  companies - show
  companies - create

setup offline dev environment and testing




  proposals - index
  proposals - show (private)
  proposals - fill (public)
  tags
  users


















split screen author experience

AUTHORING EXPERIENCE

ADD POLICY
writting component

ADD POLL QUESTIONS
add the poll to test

ADD GROUP/TAG 
adding tags
add groups
add geofenced radious
add open comment period
outreach groups

CONFIRM TO PUBLISH
preview of that content


DRAFTS
  ROUTES
    INDEX
    NEW
    EDIT/UPDATE
  ACTIONS
    PUBLISH
    NEW - CLONE

POLICIES
  ROUTES
    INDEX
    SHOW
  ACTIONS
    SHOW-CLONE
    SHOW-PAUSE POLL
  

GROUPS
COMPANIES
PEOPLE
TAGS
Dashboard

Groups

Companies → People
Drafts → publish as Proposal
Proposals → active, upcoming, closing soon, complete 
Schedule












REFACTORS

- remove the mobile navigation into its own components, wrap the desktop navigation and pass in state from parent component for open/close side menu


https://www.povertyactionlab.org/resource/teaching-resources-randomized-evaluations

https://www.povertyactionlab.org/page/online-courses

http://runningres.com/chapter-three

https://mitxonline.mit.edu/courses/course-v1:MITxT+JPAL102x/

https://mitxonline.mit.edu/courses/course-v1:MITxT+14.310x/

https://mitx-micromasters.zendesk.com/hc/en-us/articles/360035588892-What-is-the-MITx-MicroMasters-credential-in-Data-Economics-and-Development-Policy-




https://tailwindui.com/components/application-ui/feedback/empty-states

With recommendations
+
add teams/add 

