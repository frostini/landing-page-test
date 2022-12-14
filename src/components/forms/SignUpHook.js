import { useForm } from "react-hook-form";
import { Button } from '@/components/Button'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { TextFieldd as TextField } from '@/components/Fields'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6, 'password must be at least 6 characters long'),
}).required();

const formClasses =
  'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const settings = [
  { name: 'Public access', description: 'This project would be available to anyone who has the link' },
  { name: 'Private to Project Members', description: 'Only members of this project would be able to access' },
  { name: 'Private to you', description: 'You are the only one able to access this project' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Example() {
  const [selected, setSelected] = useState(settings[0])
// *****<----- https://react-hook-form.com/get-started#IntegratingwithUIlibraries
  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only"> Privacy setting </RadioGroup.Label>
      <div className="-space-y-px rounded-md bg-white">
        {settings.map((setting, settingIdx) => (
          <RadioGroup.Option
            key={setting.name}
            value={setting}
            className={({ checked }) =>
              classNames(
                settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
                'relative border p-4 flex cursor-pointer focus:outline-none'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span
                  className={classNames(
                    checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                    active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                    'mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center'
                  )}
                  aria-hidden="true"
                >
                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                </span>
                <span className="ml-3 flex flex-col">
                  <RadioGroup.Label
                    as="span"
                    className={classNames(checked ? 'text-indigo-900' : 'text-gray-900', 'block text-sm font-medium')}
                  >
                    {setting.name}
                  </RadioGroup.Label>
                  <RadioGroup.Description
                    as="span"
                    className={classNames(checked ? 'text-indigo-700' : 'text-gray-500', 'block text-sm')}
                  >
                    {setting.description}
                  </RadioGroup.Description>
                </span>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}



export default function SingInHook({ onLogin }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  console.log(watch('email'))
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form 
      className="mt-10 grid grid-cols-1 gap-y-8"
      onSubmit={handleSubmit(onLogin)}
    >

      
      <TextField 
        className="col-span-full"
        id="name"
        name="name"
        label="First Name"
        register={register}
      />
      <TextField 
        className="col-span-full"
        id="surname"
        name="surname"
        label="Last Name"
        register={register}
      />
      <TextField 
        className="col-span-full"
        id="email"
        name="email"
        label="Email address"
        register={register}
      />
      { errors.email && <p>{errors.email?.message}</p> }
      <TextField 
        className="col-span-full"
        id="password"
        name="password"
        type="text"
        label="Password"
        register={register}
      />
      { errors.password && <p>{errors.password?.message}</p> }
      <Button
        type="submit"
        variant="solid"
        color="blue"
        className="w-full"
      >
        <span>
          Sign up <span aria-hidden="true">&rarr;</span>
        </span>
      </Button>
    </form>
  );
}