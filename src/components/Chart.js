import React, { PropTypes } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const Chart = ({ data, color, units }) => {

  const average = Math.round(data.reduce((acc, val) => acc + val, 0)/data.length);

  return (
    <Sparklines data={data} width={180} height={120} >
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg"/>
      <div>{average} {units}</div>
    </Sparklines>
  )
}

export default Chart;
