import DraggableAnywhere from "../base_dnd/DraggableAnywhere"
import { useEffect, useState } from 'react'
import { useWindowHeight } from '@react-hook/window-size'


export default function Order({ children, id, slide, className }) {
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (!slide) return;
        const raf = requestAnimationFrame(() => setShow(true));
        return () => cancelAnimationFrame(raf);
    }, [])

    const windowHeight = useWindowHeight()

    // Define desk boundaries
    const deskTop = windowHeight * 0.5; // Desk starts at 50% from the top
    const elementHeight = 62; // Estimated height of the Order component
    const spawnableHeight = windowHeight - deskTop - elementHeight;

    const yStart = Math.random() * spawnableHeight + deskTop;
    const start = slide ? {x: 0, y: yStart} : {x: 0, y: 150};
    return (
        <DraggableAnywhere 
            id={id}
            type='order'
            startPos={start}
            className={`paper-ui`}
        >
            
            <article className={`paper order ${slide ? (!show ? "paper-off-screen" : "paper-on-screen") : ""}`}>
                <span>Please Respond:</span>
                {children}
            </article>


        </DraggableAnywhere>
        
    )
}
