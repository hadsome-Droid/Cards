import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

type Props<T extends FieldValues> = UseControllerProps<T>

export const FormCheckbox = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    name,
  })

  return (
    <label>
      <input type={'checkbox'} {...rest} {...field} checked={value} onChange={onChange} />
      {name}
    </label>
  )
}
