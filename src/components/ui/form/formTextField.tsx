import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

type Props<T extends FieldValues> = {
  className?: string
  label: string
  type?: string
} & UseControllerProps<T>

export const FormTextField = <T extends FieldValues>({
  className,
  control,
  label,
  name,
  type = 'text',
  ...rest
}: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return (
    <label>
      {label}:
      <input type={type} {...rest} {...field} className={className} />
      {error && <span style={{ color: 'red' }}>{error.message}</span>}
    </label>
  )
}
