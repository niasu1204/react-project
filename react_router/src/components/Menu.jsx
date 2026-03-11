import { Link } from "react-router-dom"


// <a> 대신 Link사용
const Menu = () =>{
    return (
        <>
        <Link to="/">MAIN</Link> &nbsp; &nbsp; &nbsp;
        {/*Dynamic URL : path에 값을 넣어서 페이지를 만드는 방식   */}
        {/*/product/:code/detail/:q  */}
        <Link to="/product/p1/detail/20">제품1</Link>
        <Link to="/product/p2/detail/40">제품2</Link>
        &nbsp; &nbsp; &nbsp;
        <Link to="/product2?code=a1&q=20">제품 상세 페이지2</Link>
        </>
    )


   
}

export default Menu