import React from 'react';
import styles from "./App.module.scss";
import {Route, Routes} from 'react-router-dom';

import Testcomp from "./components/test/Testcomp";
import {NotFoundView} from "./views/NotFoundView/NotFoundView";
import HeaderWrapper from "./components/Wrappers/HeaderWrapper/HeaderWrapper";

function App() {
  return (
    <div className={styles.App}>
        <HeaderWrapper />
        {/*<div className={styles.mainContainer}>*/}
        <Routes>
            <Route path='/' element={<Testcomp />}/>
            <Route path='*' element={<NotFoundView />}/>
        </Routes>

        {/*</div>*/}

        {/*</HeaderWrapper>*/}
    </div>
  );
}

export default App;
