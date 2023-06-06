'use client'

import { useEffect } from "react";
import {DragDropContext, Droppable} from "react-beautiful-dnd";

function WineDisplay() {

  useEffect({} => {
    // geteBoard();
  }, [])

  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => <div>{/*rendering all the cols*/}</div>}
      </Droppable>
    </DragDropContext>
  )
}

export default WineDisplay