import { useEffect, useState } from "react";

const useParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://limitless-brook-51245.herokuapp.com/part')
            .then(res => res.json())
            .then(data => {
                setParts(data)
            })
    }, [])
    return [parts]
}
export default useParts;