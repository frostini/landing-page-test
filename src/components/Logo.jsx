import Image from 'next/image'
import loguito from 'public/pplogo.png'

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
      className="h-12 w-auto pr-2"
      src={loguito}
    />
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