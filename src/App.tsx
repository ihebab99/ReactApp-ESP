import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { User } from './components/exercie2/userComponent/User.interface';
import { UserComponent } from './components/exercie2/userComponent/User';
import {Provider} from "react-redux";
import store from "./components/productComponent/store";
import Products from "./components/productComponent/Product";
//import { Subtitle } from './components/exercice/Subtitle.interface';
//import ListeComponent from './components/exercice/Liste';
//import TitleComponent from './components/exercice/Title';
//import {IPerson} from './components/person/Person.interface';
//import {PersonListComponent} from './components/personList/ListPerosn';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

return(
    <Provider store={store}>
        <Products/>
    </Provider>);
  // const [userprofile, setUserProfile]= useState<User>({
  //   username :"",
  //   image:{
  //     src:"https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg",
  //     alt:"image"
  //   },
  //   status:{
  //     isOnline:true
  //   }

  // })

  // setTimeout(()=>{
  //   setUserProfile({
  //     ...userprofile,
  //     status:{
  //       isOnline:false
  //     },
  //     image:{
  //       ...userprofile.image,
  //       src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2zWCsIY0WSRNuucyJg9FOlGUCEm5Nom7p_6Y41TV&s"   ,
  //       alt:"im2"     
  //     }
  //   })
  // } ,5000)

  // return(
  //   <UserComponent username={userprofile.username} image={userprofile.image} status={userprofile.status}   />
  // )
  
}

//   //return <TitleComponent title="Ceci un page react"  />

//   const title:string='ceci est page html'
//   // const subtitles : Subtitle[]=[
//   //   {subtitle:'sub1'},
//   //   {subtitle:'sub2'},
//   //   {subtitle:'sub3'},

//   // ];

//   const[todos, setTodos] = useState<Subtitle[]>([
//     {id:1,subtitle:'sub1'},
//      {id:2,subtitle:'sub2'},
//      {id:3,subtitle:'sub3'},
// ]);

//   const onDeleteItem= (id:number)=>{
//     console.log('delete item: ',id);
//     const newTodos=todos.filter((todo:Subtitle) =>todo.id  !== id  );
//     setTodos(newTodos);
//     console.log('new items', todos);
    
// };

//   return (<div>
//     < TitleComponent title={title}/>
//     <ListeComponent subtitles={todos} onDeleteSubtitles={function (id: number): void {
//       throw new Error('Function not implemented.');
//     } } />
//     </div>
//   );
  
 
 /* const persons : IPerson[]=[
    {
      name:'iheb',
      age:'23'
    },
    {
      name:'ahmed',
      age:'25'
    }
  ];*/
 
  



export default App;
