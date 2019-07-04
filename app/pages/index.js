import ss from '@/styles/index.css';
import React from 'react';
import MedLinker from '../utils/index';
import abi from '../utils/abi';

export default class Index extends React.Component {
  state = {
    name: '',
    refs: [''],
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  expand(e) {
    let _temp = this.state.refs;
    _temp.push('');

    this.setState({ refs: _temp });
  }

  async squash(e) {
    let nodes = document.querySelectorAll('.url');
    let name = this.state.name;
    let urls = Object.values(nodes).map(e => e.value);

    for (let i in urls) {
      if(
	!urls[i].match(/^http:\/\//) && !urls[i].match(/^https:\/\//)
      ) {
        alert('请输入正确的链接');
        return;
      }
    }

    let obj = {
      name, urls
    };

    let w = new MedLinker(abi,'0x62b3895ff4c275adcd11c4ac76ab45f5f517d133');
    try {
      await w.upload(obj);
    } catch (error) {
      alert('请重试');
    }
  }

  render() {
    return(
      <main>
	<section className={ss.body}>
	  <div className={ss.rows}>
	    <b>文章名称：</b>
	    <input onChange={this.handleChange.bind(this)} value={this.state.name} />
	  </div>
	  {
	    this.state.refs.map((e, i) => (
	      <div key={i} className={ss.row}>文章链接：<input className='url' /></div>
	    ))
	  }
	</section>
	<hr/>
	<section className={ss.footer}>
	  <button className={ss.btn} onClick={this.expand.bind(this)}>添加链接</button>
	  <button className={ss.btn} onClick={this.squash.bind(this)}>绑定</button>
	</section>
      </main>
    )
  }
}
