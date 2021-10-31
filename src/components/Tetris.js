import React from 'react'

import { createStage } from '../gameHelpers'
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris'

import Stage from './Stages.js'
import Display from './Display'
import Startbutton from './StartButton'




const Tetris = () => {
 return (
    <StyledTetrisWrapper>
        <StyledTetris>
        <Stage stage = {createStage()} />
        <aside>
            <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
            </div>
            <Startbutton />
        </aside>
        </StyledTetris>
    </StyledTetrisWrapper>
 )
}
 export default Tetris;
