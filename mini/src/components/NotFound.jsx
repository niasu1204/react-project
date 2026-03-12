import { Link } from "react-router-dom"

const NotFound = () => {
    return (<>
        <h1>잘못된 요청입니다.</h1>
        <h4>404ERROR</h4>
        <Link to='/login'>로그인 하러 가기</Link>
    </>)
}

export default NotFound;