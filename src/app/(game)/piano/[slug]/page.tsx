'use client'

import KeyboardMac from "@/components/Keyboard/Mac";
import { useEffect, useRef } from "react";
import PianoGame from "../PianoGame";
import SnowEffect from "../PianoGame/_components/ParticleSnow";

function ReactCanvas({ props }: any) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    context.fillStyle = '#010001'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)

    new PianoGame(canvas, context)
    new SnowEffect(canvas, context);
  }, [])


  return <canvas ref={canvasRef} {...props} width={window.innerWidth} height={window.innerHeight} className="w-auto h-auto"></canvas>
}

// function SnowReactCanvas({ props }: any) {
//   const canvasRef = useRef(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     const context = canvas.getContext('2d')
//     new SnowEffect(canvas, context);
//   }, [])

//   return <canvas ref={canvasRef} {...props} width={window.innerWidth} height={window.innerHeight} className="absolute top-0 right-0 bottom-0 left-0 w-auto h-auto"></canvas>
// }

function ViewPianoSingle() {
  return (
    <div className="w-full h-full">
      <div className="z-20 relative">
        {/* <SnowReactCanvas /> */}
      </div>

      <div className="flex flex-col">
        <ReactCanvas />
        <div className="absolute bottom-0 right-0 left-0 scale-75">

          <div className="max-w-4xl mx-auto">
            <KeyboardMac />
          </div>

        </div>
      </div>
    </div>
  )
}

export default ViewPianoSingle;
