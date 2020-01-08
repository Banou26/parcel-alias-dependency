import React from 'react'
import { useSelector } from 'react-redux'

console.log('foo', React)

export default React

export const hook = () => useSelector(state => state.test)
