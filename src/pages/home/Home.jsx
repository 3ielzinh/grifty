import "./Home.css"
import "../../global.css"
import P1 from "./components/p1/P1"
import P2 from "./components/p2/P2"
import P3 from "./components/p3/P3"
import P4 from "./components/p4/P4"
import P5 from "./components/p5/P5"
import Div from "./components/div/Div"
import P6 from "./components/p6/P6"
import P7 from "./components/p7/P7"
import P5_0 from "./components/p5_0/P5_0"
import P6_0 from "./components/p6_0/P6_0"
import AD2 from "./components/AD2/AD2"
import AD01 from "./components/ad01/AD01"

const Home = () => {
  return (
    <div className="container">
        <P1 />
        <P2 />
        <P3 />
        <AD01 />
        <P6_0 />
        <Div />
        <P4 />

        <AD2 />


        <P5_0 />
        <P5 />


        <P6 />
        <P7 />
    </div>
  )
}

export default Home