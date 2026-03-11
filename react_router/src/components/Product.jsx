import { useParams } from "react-router-dom";

const Product = ()=>{
    //동적 URL로 전달된 값 사용하기
    //  /product/:code/detail/:q  

    const {code, q} = useParams();

    return(<>
        <h1>제품 상세 페이지1입니다.</h1>
        <p>코드: {code}</p>
        <p>수량: {q}</p>
        
    </>)
}
export default Product;