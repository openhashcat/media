import abi from '../utils/abi';
import React from 'react';
import MedLinker from '../utils/index';

let w = new MedLinker(abi,'0x62b3895ff4c275adcd11c4ac76ab45f5f517d133');
w.getList(0, 10).then(r => {
  console.log(r);
})

export default class Articles extends React.Component {
  render() {
    return (
      <main>
	hello
      </main>
    )
  }
}
