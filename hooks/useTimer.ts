import { useState, useRef, useEffect, useCallback } from "react"

type TimerDirection = "backward" | "forward"

const useTimer = (startingTime: number, direction: TimerDirection) => {
  const timerIdRef = useRef<NodeJS.Timer | null>(null)
  const [timer, setTimer] = useState(startingTime)

  const start = useCallback(() => {
    if (timerIdRef.current) return
    timerIdRef.current = setInterval(
      () =>
        setTimer(timer => {
          if (direction === "forward") return timer + 1
          else return timer - 1
        }),
      1000
    )
  }, [startingTime, direction])

  const pause = useCallback(() => {
    timerIdRef.current && clearInterval(timerIdRef.current)
    timerIdRef.current = null
  }, [])

  const reset = useCallback(() => {
    setTimer(startingTime)
  }, [startingTime])

  useEffect(() => {
    return () => clearInterval(timerIdRef.current!)
  }, [])

  return [timer, start, pause, reset, setTimer] as const
}

export default useTimer
