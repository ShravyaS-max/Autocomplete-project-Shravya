
import React from 'react';
import Autocomplete from './components/Autocomplete';

const data = [
  'Blue',
  'Yellow',
  'Orange',
  'Purple',
  'Skyblue',
  'White',
  'black',
  'green',
  'red',
  'pink',
];

const App = () => {
  return (
   <div>
      <Autocomplete data={data} />
    </div>
  );
};
<style>
        {`
         .heading {
         
          align-items: center;
          }
        `}
      </style>
export default App;

