import { useSearchParams } from "react-router-dom";

const Product2 = () => {
    //쿼리 문자열로 전달된 파라미터 사용하기
    const [searchParams, setSearchParams] = useSearchParams();
    //code=a1&q=10
    let code = searchParams.get('code')

    return (<>
        <h1>제품 상세 페이지2입니다.</h1>
        <p>상품 코드: {code} <br />
            수량: {searchParams.get('q')}
        </p>
        <p>
            search : {location.search}
        </p>
        <ul>
            <li>hash : {location.hash}</li>
            <li>pathname : {location.pathname}</li>
            <li>search : {location.search}</li>
            <li>state : {location.state}</li>
            <li>key : {location.key}</li>
        </ul>

    </>)
}
export default Product2;