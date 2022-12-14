import { useForm } from "react-hook-form";
import { Button } from '@/components/Button'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { TextFieldd as TextField } from '@/components/Fields'

const schema = yup.object({}).required();

const formClasses =
  'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm'

export default function ConfirmHook({ onConfirm }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  console.log(watch('code'))
  return (
    /* "hcodendleSubmit" will validate your inputs before invoking "onSubmit" */
    <form 
      className="mt-10 grid grid-cols-1 gap-y-8"
      onSubmit={handleSubmit(onConfirm)}
    >
      <TextField 
        className="col-span-full"
        id="code"
        name="code"
        label="6 digit confirmation code"
        register={register}
      />
      { errors.code && <p>{errors.code?.message}</p> }
      <Button
        type="submit"
        variant="solid"
        color="blue"
        className="w-full"
      >
        <span>
          Complete sign up <span aria-hidden="true">&rarr;</span>
        </span>
      </Button>
    </form>
  );
}