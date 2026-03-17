import { useSelector } from "react-redux";

const H1size = () =>{

    //sizer 상태값 가져오기
    const sizeCss = useSelector((state)=> state.sizer);

    return(
        <>
            <h1 style={sizeCss} >h1태그 입니다.</h1>
        </>
    );
}

export default H1size;