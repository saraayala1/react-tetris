import React from 'react'

import { createStage } from '../gameHelpers'

import Stage from './Stages.js'
import Display from './Display'
import Startbutton from './StartButton'




const Tetris = () => {
 return (
    <div>
        <Stage stage = {createStage()} />
        <aside>
            <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
            </div>
            <Startbutton />
        </aside>
    </div>
 )
}
 export default Tetris;
