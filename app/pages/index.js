import ss from '@/styles/index.css';
import React from 'react';

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
  
  squash(e) {
    let nodes = document.querySelectorAll('.url');
    let name = this.state.name;
    let urls = Object.values(nodes).map(e => e.value);
    console.log('name: ', name);
    console.log('urls: ', urls);
  }

  render() {
    return(
      <main>
	<section className={ss.header}>
	  <div>MedLinker</div>
	</section>
	<hr />
	<section className={ss.body}>
	<div className={ss.rows}>
	  <b>文章名称：</b><input onChange={this.handleChange.bind(this)} value={this.state.name} />
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
