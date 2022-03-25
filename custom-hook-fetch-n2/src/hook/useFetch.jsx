import { useEffect, useState } from "react";

function useFetch(url, init = {}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        setLoading(true)
        fetch(url, init)
            .then((res) => res.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [url]);

    const handleFetch = (url, init = {}) => {
        setLoading(true)
        fetch(url, init)
            .then((res) => res.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    };

    return { data, error, loading, handleFetch };
};

export default useFetch;