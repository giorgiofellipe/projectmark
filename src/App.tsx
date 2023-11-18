import React from 'react';
import './App.css';
import Header from './components/header';
import HeaderItem from './components/header-item';
import Logo from './components/logo';
import StagesContainer from './components/stages-container';
import PipelineTypesContainer from './components/pipeline-types-container';
import PipelineTypeProvider from './context/pipeline-type/context';


function App() {


  return (
    <div>
      <Header
        left={<Logo />}
        center={<>
          <HeaderItem title="1" label="Sales Pipeline Settings" selected />
          <HeaderItem title="2" label="Opportunity Details Settings" />
        </>
        }
        right={<button type="button">Next</button>} />
      <div className='content'>
        <div className='title'>Please select the type of sales pipeline that best fits to you company</div>

        <PipelineTypeProvider>
          <PipelineTypesContainer />

          <StagesContainer />
        </PipelineTypeProvider>
      </div>
    </div>
  );
}

export default App;
