import { Link } from "react-router-dom";


const Error = () => {
 return (
    <div>
        <h1>Oh no, this route doesn&apos;t exist.</h1>
        <Link to="/">
            Click here to go back though.
        </Link>
    </div>
 )


}
export default Error;