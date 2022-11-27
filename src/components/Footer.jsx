import Link from 'next/link'

import { Container } from '@/components/Container'
import { LogoType, LogoImage, LogoFull } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <LogoFull/>
          
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-row justify-center border-t border-slate-400/10 py-10">
          <p className="mt-6 text-sm text-left text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Public PolicyPal. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
