import { TextField } from '@mui/material'

interface Props {
  value: number
  setValue: (value: number) => void
}

export const InputMain = ({ value, setValue }: Props): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(Number(event.target.value))
  }

  return (
    <TextField
      label='Ingrese un número'
      value={value}
      type='number'
      onChange={handleChange}
      error={value < 1}
      helperText='El número ingresado debe ser mayor o igual a 1'
    />
  )
}
