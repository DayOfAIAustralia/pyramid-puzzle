import SortableDraggable from "../base_dnd/SortableDraggable"
import { SortableContext } from "@dnd-kit/sortable"
import Droppable from "../base_dnd/Droppable"

export default function PaperDroppable({container, handleTileClick}) {
    const items = container.items;

    const playedWords = items.map((word) => {
        return <SortableDraggable 
            layoutId={`tile-${word.character}-${word.id}`}
            key={word.id} 
            id={word.id} 
            className='character' 
            type='character'
            onClick={() => handleTileClick(word.id, word.character, "paper")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
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