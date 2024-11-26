import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Welcome, from the other side!</h1>
      <nav>
        <ul>
          <li>
            <Link to="router"> Router</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default App;

