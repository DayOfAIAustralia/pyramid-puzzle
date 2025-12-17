import DraggableAnywhere from "../base_dnd/DraggableAnywhere"
import { useEffect, useState, useRef } from 'react'
import { useWindowHeight } from '@react-hook/window-size'
import { motion } from 'framer-motion' 

export default function Order({ children, id, slide, active, style, onClick, staplerModeOn }) {
    const [show, setShow] = useState(false)
    const elementRef = useRef(null);

    useEffect(() => {
        if (!slide) return;
        const raf = requestAnimationFrame(() => setShow(true));
        return () => cancelAnimationFrame(raf);
    }, [])

    const windowHeight = useWindowHeight();

    const deskTop = windowHeight * 0.5; 
    const estimatedHeight = 80; 
    const spawnableHeight = windowHeight - deskTop - estimatedHeight;

    const yStart = Math.random() * spawnableHeight + deskTop - 30;
    const start = slide ? {x: 0, y: yStart} : {x: 0, y: 150};

    return (
        <DraggableAnywhere 
            id={id}
            type='order'
            startPos={start}
            className={`paper-ui ${active ? "active" : ''}`} 
            style={style}
            ref={elementRef}
        >
            <motion.article 
                className={`paper order ${slide ? (!show ? "paper-off-screen" : "paper-on-screen") : ""} `} 
                onClick={onClick}
                
                animate={staplerModeOn ? "glowing" : "static"}
                variants={{
                    static: { 
                        filter: "drop-shadow(0 0 0px red)" // or your default shadow
                    },
                    glowing: {
                        filter: [
                            "drop-shadow(0 0 4px orange)",
                            "drop-shadow(0 0 8px orange)",
                            "drop-shadow(0 0 4px orange)"
                        ],
                        transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }
                }}
            >
                <span>Please Respond:</span>
                {children}
            </motion.article>

        </DraggableAnywhere>
    )
}