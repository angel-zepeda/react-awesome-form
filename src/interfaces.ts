export interface FormProps {
  formValue: object | string | number
  formStyle?: {
    [key: string]: string
  }
  children: React.ReactNode[] | React.ReactNode
}

export interface InputProps {
  name: string
  type: 'text' | 'email' | 'number' | 'tel'
  value: string | number | object
  placeholder: string
  minLength?: string
  maxLength?: string
  autoComplete?: 'on' | 'off'
  inputStyle?: {
    [key: string]: string
  }
  errorLabelStyle?: {
    [key: string]: string
  }
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
