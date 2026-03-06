const Main = ()=>{
    const num = 10;
    let name = 'kim';
    let arr = ['apple', 'banana', 'grape']
    return(
        <main><h1>main {name}</h1>
        <h2>{num} </h2>
        <h2>{num+11}</h2>
        <h2>{num % 2 === 0 ? '짝수': ' 홀수'}</h2>
        {arr.map((fruit, index)=>{
            return <div key={index}>{fruit}</div>
        })}   
        <div>{arr}</div>
        </main>
    );
}
export default Main;
