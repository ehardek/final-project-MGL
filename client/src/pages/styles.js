import React from 'react'
import Select from 'react-select'

function Style()
{
    var colors =[
        {
value:1,
label:'gray'
        }
    ];
  return(
      <div>
<Select options={colors}></Select>
      </div>
  );
}
export default Style;
