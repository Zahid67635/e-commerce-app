import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `E-commerce | ${title}`;
    }, [title])
}
export default useTitle;