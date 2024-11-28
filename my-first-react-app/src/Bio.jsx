
import { Link } from "react-router-dom";

export default function Bio() {
    return (
        <>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
      <nav>
        <ul>
          <li>
            <Link to="Bio"> Bio Page</Link>
          </li>
        </ul>
      </nav>
        <br></br>
        <b>And <i>pictures</i></b> of scientists!
      </p>
      </>
    );
  }
  