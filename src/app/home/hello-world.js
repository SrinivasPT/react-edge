import { FormDetailContext } from "@lib/contexts";
import { useContext } from "react";

const HelloWorld = () => {
    const { state, dispatch } = useContext(FormDetailContext);

    return <div>HelloWorld {state?.itemId}</div>;
};

export default HelloWorld;
