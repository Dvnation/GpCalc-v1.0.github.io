import {Link} from "react-router-dom"
import { About } from "./About"

export function NavBar() {
    return(
        <nav className="Nav">
<Link className="links" to= "/"> <button className="buttons button1">Home</button> </Link>
<Link  className="links" to= "/HowTo" ><button className="buttons button2">How-To</button>  </Link>
<Link className="links"  to= "/about" > <button className="buttons button3">About</button> </Link>



        </nav>

    )
}