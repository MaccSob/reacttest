 import { useParams } from "react-router-dom";
 import Spinach from "./Spinach";
 import Popeye from "./Popeye";
import defaultRouter from "./DefaultRouter";
 
 
 
 
 const Router = () => {
    const {name} = useParams();
    return (
        <div>
            <h1>Hello,Welcome Good day!</h1>
            <p>What</p>
            <hr />
            <h2>The profile visited here:</h2>
            {name === "popeye" ? (
                <Popeye/>
            ) : name === "spinach" ? (
                <Spinach/>
            ) : (
                <defaultRouter/>
            )}

        </div>
    )
 }
 export default Router;