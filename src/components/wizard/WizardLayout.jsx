import Breadcrumbs from '@/components/Breadcrumbs'
import Stepper from '@/components/wizard/Stepper'
import { draftSteps } from '@/components/wizard/StepsData'

export default function WizardLayout({ children }) {
  return (
    <>
      <div>
        <Stepper steps={draftSteps}/>
      </div>
      <div className='p-5'>
        <Breadcrumbs/>
      </div>
      { children}
    </>
  )
}


// WizardLayout.getLayout = function getLayout(page){
//   return (
//     <GovAppShell>
//       {page}
//     </GovAppShell>
//   )
// }