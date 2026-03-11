// const fruits = ["apple", "banana", "grape"];
// 주어진 과일 목록을 버튼으로 출력하고
// 클릭하면 콘솔에 과일이름이 출력되게 컴포넌트를 작성하시오

// 컴포넌트의 이름은 List
const List = () =>{
    const fruits = ["apple", "banana", "grape"];

    const clickFruits = (e) =>{
        console.log( e.target.innerHTML );
    }
    return(
        <div>
           {fruits.map((fruit, index) =>{
            return <button key={index} onClick={clickFruits} >{fruit}</button>
           })
           } 
        </div>
    );
}

export default List