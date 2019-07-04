import React from 'react';
import abi from '../utils/abi';
import ss from '@/styles/index.css';
import MedLinker from '../utils/index';
import fliter from '@/utils/fliter';

const bb = 'https://rinkeby.etherscan.io/tx/'
const Article = (props) => {
  let { data } = props;
  if (data.name) {
    return (
      <details className={ss.linker_item}>
	<summary>{data.name}</summary>
	<div className={ss.linker_box}>
	  <a className={ss.linker_url} href={bb + data.id}>{data.id.slice(0, 9)}</a>
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
    articles: {
      data: []
    }
  }

  componentDidMount() {
    this.data(0).then(r => {
      console.log(r);
      this.setState({ page: 0, articles: r });
    })
  }

  data(page) {
    let w = new MedLinker(abi,'0x62b3895ff4c275adcd11c4ac76ab45f5f517d133');
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
