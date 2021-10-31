import React from 'react'
import { StylesCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominus';


const cell =({ type }) => (
<StylesCell type={type} color={TETROMINOS[type].color} />


)

export default cell;