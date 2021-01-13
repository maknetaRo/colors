import React, { useState } from 'react'

const Colors = () => {

    const [color, setColor] = useState("rgb(123, 123, 123)")

    let randomBgColor = () => {
        let x = Math.floor(Math.random() * 256)
        let y = Math.floor(Math.random() * 256)
        let z = Math.floor(Math.random() * 256)
        let bgColor = `rgb(${x}, ${y}, ${z})`
        console.log(bgColor)
        setColor(bgColor)
    }


    return (
        <div className="container" style={{ background: color }} >

            <h3>{randomBgColor}</h3>
            <button type="button" onClick={randomBgColor}>Click Me!</button>

            <div className="color">
                <h3>{color}</h3>
            </div>
        </div>
    )
}

export default Colors
