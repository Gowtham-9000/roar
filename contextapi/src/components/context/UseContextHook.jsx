import { useContext } from "react";
import MyContext from "./context/Context";

const UseContextHook = () => {
    const context = useContext(MyContext);

    return (
        <div>
            <p>
                Hello from Functional component {context.userName}
            </p>
        </div>
    )
}

export default UseContextHook;