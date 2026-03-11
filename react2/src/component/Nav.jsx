const Nav = (props) => {  //props = {topics:[{},{},{}]}
    const lis = [];
    for(let i = 0; i < props.topics.length; i++){
        let t = props.topics[i];
        lis.push(<li key={t.id}>{t.title}</li>)
    }
    return (
        <nav>
            <ol>
                {lis}
            </ol>
        </nav>
    );
}

const Nav2 = ({topics})=>{  // topics = [{},{},{}]
    return (
         <nav>
            <ol>
              {topics.map(element => {
                   return <li key={element.id}>{element.body}</li>
                })}
            </ol>
        </nav>
        
    )
}


export default Nav;
export {Nav2};