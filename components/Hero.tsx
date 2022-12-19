import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi,Its Ramandeep singh", "Guy-who-loves-tea.tsx", "<ButLovesToCodeMore />"],
        loop:true,
        delaySpeed:
    })
  return (
    <div>Hero</div>
  )
}

export default Hero