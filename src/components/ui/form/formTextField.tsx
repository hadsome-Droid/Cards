import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

type Props<T extends FieldValues> = UseControllerProps<T>

export const FormTextField = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return (
    <label>
      {name}:
      <input type={name} {...rest} {...field} />
      {error && <span style={{ color: 'red' }}>{error.message}</span>}
    </label>
  )
}
