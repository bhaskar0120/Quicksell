import { useEffect, useState } from 'react';
import Spinner from './Components/Spinner';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import './App.css';
import Format from './Functionals/Format';
import CardHolder from './Components/CardHolder';


function App() {
  const [isLoading,setLoading]  = useState(true);
  const [text,setText] = useState(null);
  const [grouping,setGrouping] = useState("Status");
  const [ordering,setOrdering] = useState("Priority");

  useEffect(()=>{
    fetch(" https://api.quicksell.co/v1/internal/frontend-assignment")
    .then(response=>{
      response.json().then(data=>{
        setText(Format(data,grouping,ordering));
        setLoading(false);
      })
      .catch(err=>{
        console.log(err);
      })

    })
    .catch(err=>{
      console.log(err)
    });
  },[grouping,ordering])

  return (
    <div>
      <Navbar changeGrouping={setGrouping} changeOrdering={setOrdering} grouping={grouping} ordering={ordering}/>
    {
      isLoading?
      <Spinner />:
      <CardHolder list={text}/>
      // <div>
      //   {
      //     Object.keys(text).map((elem,index)=>{
      //     return text[elem].tickets.map((elem2,index)=>{
      //       //return <h1>{elem2.title}</h1>
      //       return <Card key={index} id={elem2.id} title={elem2.title} tag={elem2.tags} status={elem2.status} user={elem2.user}/>
      //     })
      //     })
      //   }
      // </div>
    }
    </div>
  );
}

export default App;
