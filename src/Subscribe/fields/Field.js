// @flow
import React from 'react'

import Missing from '../messages/Missing'
import Invalid from '../messages/Invalid'

import type { StatelessFunctionalComponent } from 'react'

export type ControlProps = {
  id: string,
  icon?: string,
  type?: string,
  options?: [string]
}

export type FieldProps = {
  label: string,
  control: StatelessFunctionalComponent<ControlProps>,
  className?: string,
} & ControlProps

const isMissing = ({ touched, missing }) => touched && missing
const isInvalid = ({ touched, invalid }) => touched && invalid
const hasError = state => isMissing(state) || isInvalid(state)

const Field = ({ id, label, control, className = '', icon = '', type = '', options, state, changeHandler }: FieldProps) =>
  <div className={`field ${className}`}>
    <label htmlFor={id} className="label">{label}</label>
    { control({ id, icon, type, options, value: state.value, changeHandler, hasError: hasError(state) }) }
    { isMissing(state) ? Missing() : null }
    { isInvalid(state) ? Invalid() : null }
  </div>

export default Field
