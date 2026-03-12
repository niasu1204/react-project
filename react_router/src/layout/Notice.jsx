import { useParams } from "react-router-dom";

const Notice = ()=>{

    const {no} = useParams()
    const list = ['공지사항1', '공지사항2']
    
    return (
        <>
            <marquee>
                {list[no-1]}     
            </marquee>
        </>
    )
}

export default Notice;