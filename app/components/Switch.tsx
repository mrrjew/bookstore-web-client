'use client'

import { Field, Label, Switch } from '@headlessui/react'

type Props = {
  enabled:boolean;
  setEnabled:(value:boolean) => void;
  text:string;
  bracketText:string
}
export default function SwitchJsx({enabled,setEnabled,text, bracketText}:Props) {

  return (
    <Field className="flex items-center -mt-3.5 !font-medium paragraph">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-seagreen-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-seagreen-600 focus:ring-offset-2 data-[checked]:bg-seagreen-600"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
        />
      </Switch>
      <Label as="span" className="ml-3 text-sm">
        <span className="paragraph">{text}</span>{' '}
        {bracketText && <span className="paragraph !text-gray-500">({bracketText})</span>}
      </Label>
    </Field>
  )
}
