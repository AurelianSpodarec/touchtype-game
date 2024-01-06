'use client'

import KeyboardMac from "@/components/Keyboard/Mac";
import { useEffect, useRef } from "react";
import PianoGame from "./PianoGame";

function ReactCanvas({ props }: any) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)

    new PianoGame(canvas, context)
  }, [])


  return <canvas ref={canvasRef} {...props} width={window.innerWidth} height={window.innerHeight} className="w-auto h-auto"></canvas>
}

function Classic() {
  return (
    <div className="w-full h-full">
      <ReactCanvas />
      <div className="absolute bottom-0 right-0">
      {/* <KeyboardMac /> */}

      </div>
    </div>
  )
}

export default Classic;
