import React from "react";
import { useState, useEffect } from "react";

const Scroll = (WrappedComponent) => {

    return function infiniteList() {
        const [page, setPage] = useState(1)

        useEffect(() => {
            const list = document.querySelector('section')
            const scrollEvent = (el) => {
                let target = el.target
                if (target.scrollTop + target.clientHeight === list.scrollHeight) {
                    setTimeout(() => {
                        setPage(page + 1)
                    }, 1500)
                }
            }
            list.addEventListener('scroll', scrollEvent)
            return () => list.removeEventListener('scroll', scrollEvent)
        }, [page]);

        return (
            <WrappedComponent page={page} />
        )
    }

}
export default Scroll