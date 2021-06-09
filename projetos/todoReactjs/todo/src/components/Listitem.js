import React from 'react'
import Card from './Card';

function DoneImg(props) {
  if (props.done){
    return (<img alt="ok" src="./assets/on.svg"></img>)
  } else {
  return (<img alt="nok" src="./assets/off.svg"></img>)
  }
}

function Listitem(props) {
  
  return (<li key={props.item.id}>
          <Card className={props.item.done ? "done item":"item"} >
            {props.item.text}
            <div>
              <button onClick={()=>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg> </button>
              <button onClick={()=>{props.onItemDeleted(props.item)}}><img alt="Lixeira" src="./assets/bin.svg"></img> </button>
            </div>
        </Card>
      </li>)
}

export default Listitem;