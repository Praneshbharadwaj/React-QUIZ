import { useRef } from "react";
export default function Start({ setUsername }) {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value)
    }
    return (
        <div className="start">
            <input type="text" placeholder="Enter Your Name" className="startInput" ref={inputRef} />
            <button className="startbutton" onClick={handleClick}>Start</button>
        </div>
    )
}
