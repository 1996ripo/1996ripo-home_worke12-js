import "./App.css";
import UseLocalStorage from "./components/useLocalStorage";
import { useRef, useState } from "react";

function App() {
    const myinput = useRef();
    const [dataInf, setDataInf] = useState();

    const { getLocalData, clearLocalData, setLocalData, removeLocalData, keyIndex } = UseLocalStorage();

    const setItemToLocalStorage = () => {
        setLocalData(JSON.stringify(myinput.current.value), myinput.current.value);
        myinput.current.value = "";
    }

    const CleareLocalStorage = () => {
        clearLocalData();
    };

    const getItemFromLocalStorage = () => {
        if (myinput.current.value && getLocalData(JSON.stringify(myinput.current.value))) {
            setDataInf(getLocalData(JSON.stringify(myinput.current.value)));
        } else {
            console.log("Ther is no storage data")
        }
    };

    const removeItemToLzocalStorage = () => {
        removeLocalData(JSON.stringify(myinput.current.value));
        myinput.current.value = "";
    }

    return (
        <>
            <input ref={myinput} name="myinput" type="text" />
            <button onClick={CleareLocalStorage} >Cleare LocalStorage </button>
            <button onClick={getItemFromLocalStorage}>get LocalStorage </button>
            <button onClick={setItemToLocalStorage}>set LocalStorage </button>
            <button onClick={removeItemToLzocalStorage}>remove LocalStorage </button>
            <div id="inf-div">Get local data inf - {dataInf ? dataInf : '""'}</div>
        </>
    );
}

export default App;
