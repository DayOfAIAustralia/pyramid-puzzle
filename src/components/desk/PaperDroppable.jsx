import SortableDraggable from "../base_dnd/SortableDraggable"
import { SortableContext } from "@dnd-kit/sortable"
import Droppable from "../base_dnd/Droppable"

export default function PaperDroppable({container, handleTileClick}) {
    const items = container.items;

    const playedWords = items.map((word) => {
        return <SortableDraggable key={word.id} id={word.id} className='character' onClick={() => handleTileClick(word.id, word.character, "paper")}>
            {word.character}
        </SortableDraggable>
    })

    return (
        <Droppable id={container.id} className='container'>
            <SortableContext
                items={items.map(item => item.id)}
            >
                {playedWords}
            </SortableContext>
        </Droppable>
    )
}