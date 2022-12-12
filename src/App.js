import React, { useCallback, useContext } from 'react';
import TreeMenu from 'react-simple-tree-menu';
// import default minimal styling or your own styling
import '../node_modules/react-simple-tree-menu/dist/main.css';
import PracticeComponent from './practice/PracticeComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginForm/LoginForm';
import { ContextProvider } from './LoginForm/fetchLoginStatus';
import { SimpleTreeComponent } from './components/SimpleTreeComponent';
import 'devextreme/dist/css/dx.light.css';
import DevExtremeComponents from './components/devExtreme';
import DDC from './components/devExtreme/ddc.js/DDC';
import ListComponent from './components/devExtreme/Lists/List';
import OthersComponent from './components/devExtreme/Others';
import MemoComponent from './components/Memoization';
function App(){
  return(
    <ContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/memoization' element={ <MemoComponent />} />
        <Route path='/' element={<PracticeComponent />}/>
        <Route path='/login-form' element={<LoginPage />} />
        <Route path='/react-simple-tree' element={<SimpleTreeComponent/>} />
        <Route path='/devextreme' element={<DevExtremeComponents />} />
        <Route path='/ddc' element = { <DDC />} />
        <Route path='/list' element = {<ListComponent />} />
        <Route path='/others' element={<OthersComponent />} />
      </Routes>
    </BrowserRouter>
    </ContextProvider>
  );
}

// function App(){
//   return(
//     <LoginContext.Provider value='false'>
//       <LoginStatus />
//       <SimpleTreeApp />
//       <MyContext.Provider value = '0'>
//         <ShowMyContext message="message"/>
//       </MyContext.Provider>
//     </LoginContext.Provider>
//   )
// }

// function LoginStatus(){
//   const context = useContext(LoginContext)
//   return(
//       <p>{context}</p>
//   )
// }

// class ShowMyContext extends React.Component{
//   static contextType = MyContext;
//   render(){
//     return(
//       <p>{this.context + this.props.message}</p>
//     )
//   }

// }

export default App;
