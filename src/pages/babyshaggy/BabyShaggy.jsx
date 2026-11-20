import { useEffect } from "react"
import PP1 from "./components/PP1/PP1"
import PP2 from "./components/PP2/PP2"
import PP3 from "./components/PP3/PP3"
import PP4 from "./components/PP4/PP4"
import PP5 from "./components/PP5/PP5"
import PP6 from "./components/PP6/PP6"
import PP7 from "./components/PP7/PP7"
import PP8 from "./components/PP8/PP8"
import "./BabyShaggy.css"
import { initializeMetaPixel } from "./metaPixel"

const BabyShaggy = () => {
  useEffect(() => {
    initializeMetaPixel()
  }, [])

  return (
    <main className="baby-shaggy-page">
        <PP1 />
        <PP2 />
        <PP3 />
        <PP4 />
        <PP5 />
        <PP6 />
        <PP7 />
        <PP8 />
    </main>
  )
}

export default BabyShaggy
