import React from 'react'
import useDarkMode from "./use-dark-mode";
import Toggle from "./Toggle";
export default function Home() {
    const [darkMode, setDarkMode] = useDarkMode();
    return (
        <div>
            <div className="navbar">
                <div> Home</div>
                <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
            <h1>Light & Dark Theme</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste illum rerum dolore quibusdam tenetur distinctio ducimus voluptate. Neque aliquam iste ut quia aspernatur libero commodi rem, architecto at delectus?</p>
        </div>
    )
}
