import {useState,useEffect} from 'react'

function useDebounce(value,delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(()=>{
        const handler = setTimeout(())
    })
}

export default useDebounce;