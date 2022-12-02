import { useForm } from "react-hook-form";
import clsx from 'clsx'
import { Button } from '@/components/Button'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import signIn from '@/components/forms/SignIn'
import { useRouter } from 'next/router'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6, 'password must be at least 6 characters long'),
}).required();

const formClasses =
  'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm'

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="mb-3 block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  )
}

function TextField({
  id,
  label,
  type = 'text',
  className = '',
  name,
  register, // react hook function
  ...props
}) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input
        id={id}
        type={type}
        {...props}
        className={formClasses}
        {...register(name)}
      />
    </div>
  )
}

export default function SingInHook() {
  const router = useRouter()
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    signIn(data).then((user) =>{
      router.push({
        pathname: '/dashboard'
      })
    })
  }

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form 
      className="mt-10 grid grid-cols-1 gap-y-8"
      onSubmit={handleSubmit(onSubmit)}
    >
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
          Sign in <span aria-hidden="true">&rarr;</span>
        </span>
      </Button>
    </form>
  );
}