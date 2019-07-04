import React from 'react';
import abi from '../utils/abi';
import ss from '@/styles/index.css';
import MedLinker from '../utils/index';
import fliter from '@/utils/fliter';

const bb = 'https://rinkeby.etherscan.io/block/'
const Article = (props) => {
  let { data } = props;
  if (data.name) {
    return (
      <details className={ss.linker_item}>
	<summary>{data.name}</summary>
	<div className={ss.linker_box}>
	  <div>{data.author ? 'author: ' + data.author : ''}</div>
	  <a className={ss.linker_url}
	     href={bb + data.block_number._hex.slice(2)}>
	    {data.block_number._hex.slice(2)}
	  </a>
	  {data.urls.map((e, i) => (
	    <a className={ss.linker_url} key={i} href={e}>{fliter(e)}</a>
	  ))}
	</div>
      </details>      
    )
  } else {
    return <div />;
  }
}

export default class Articles extends React.Component {
  state = {
    page: 0,
    articles: { data: [] }
  }

  componentDidMount() {
    this.data(0).then(r => {
      this.setState({ page: 0, articles: r });
    })
  }

  data(page) {
    let w = new MedLinker(abi,'0x391e627b6251724469ef8e51b7e21071573564b3');
    return w.getList(page, 10);
  }
  
  prev() {
    if(this.state.page == 0) {
      return 
    } else {
      this.data(this.state.page - 1).then(r => {
	this.setState({
	  page: this.state.page - 1, articles: r
	})
      })
    }
  }

  next() {
    this.data(this.state.page + 1).then(r => {
      this.setState({
	page: this.state.page + 1, articles: r
      })
    })
  }
  
  render() {
    return (
      <main>
	<section className={ss.body}>
	  {
	    this.state.articles.data.map((e, i) => (
	      <Article className={ss.article} key={i} data={e} />
	    ))
	  }
	</section>
	<hr/>
	<section className={ss.footer}>
	  <button className={ss.btn} onClick={this.prev.bind(this)}>上一页</button>
	  <button className={ss.btn} onClick={this.next.bind(this)}>下一页</button>
	</section>
      </main>
    )
  }
}
