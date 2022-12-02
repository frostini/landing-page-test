import Image from 'next/image'
import logo from 'public/pplogo.png'
import logoLight from 'public/pplogolight.png'

export function LogoType() {
  return (
    <span className='flex items-center font-bold font-display text-xl'>
     {'Policy'}
     <span className="text-blue-600">{'Pal'}</span>
    </span>
  )
}

export function LogoImage(props) {
  return (
    <Image 
      alt="PolicyPal Logo"
      className="h-12 w-auto pr-2"
      src={logo}
    />
  )
}

export function LogoLight(props) {
  return (
    <>
    <Image 
      alt="PolicyPal Logo"
      className="h-12 w-auto pr-2"
      src={logoLight}
    />
    <div className='flex flex-col'>
      <p className='flex items-center text-white  font-bold font-display text-xl'>
        {'Policy'}
        <span className="text-slate-300">{'Pal'}</span>
      </p>
      <p>for government</p>
    </div>
    </>
  )
}

export function LogoFull(){
  return (
    <div className="flex flex-row items-center">
      <LogoImage className="h-10 w-auto" />
      <LogoType/>
    </div>
  )
}