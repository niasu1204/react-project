import './App.css'
import Button from './component/Button'
import Child from './component/Child'
import Nav from './component/Nav'
import {Nav2} from './component/Nav'
import Button2 from './component/Button2'
import List from './component/List'
import Count from './component/Count'
import Light from './component/Light'

function App() {
  //java script 코드 
  const b1Props = {text:'메일', color:'green', a:1, b :2}

  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', body:'javascript is...'},
  ]

  return (
    <>
      <Light />
      <Count />
      <hr/>
      <Nav topics={topics}/>
      <Nav2 topics={topics}/>
      <hr/>
      <Button {...b1Props} />{/*객체를 컴포넌트의 props로 한번에 전달 */}
      <Button text={"abc"} color={"red"}  />
      <Button text={"1234"}> 
        <Child />
        <Child />
      </Button>
      <hr/>
      <Button2 />
      <List />
    </>
  )
}

export default App
