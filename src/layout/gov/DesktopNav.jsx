import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavLinks as navigation } from '@/layout/gov/NavLinks'
import { Auth } from 'aws-amplify';
import { LogoLight } from '@/components/Logo'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DesktopNav(props) {
  const router = useRouter()
  const { user, logout } = props
  async function signOut() {
    try {
        logout().then(()=> router.push('/')) 
      } catch (error) {
          console.log('error signing out: ', error);
      }
  }
  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex min-h-0 flex-1 flex-col bg-indigo-700">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center px-4">
            <LogoLight/>
          </div>
          <nav className="mt-5 flex-1 space-y-1 px-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  (router.pathname === item.href) ?
                  'bg-indigo-800 text-white' : 'text-white hover:bg-indigo-600 hover:bg-opacity-75',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" aria-hidden="true" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        {user && user.attributes &&
        <div className="flex flex-col flex-shrink-0 border-t border-indigo-800 p-4">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div>
              <div>
                <a className={'text-white pl-3'} onClick={signOut}> click to sign out</a>
              </div>
            </div>
          </div>
          <div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">{user.attributes?.email}</p>
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  )
}