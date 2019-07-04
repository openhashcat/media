import ss from '@/styles/index.css';
import React from 'react';
import Link from 'umi/link';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  linker() {
    if (this.props.location.pathname == '/') {
      return '/articles';
    } else {
      return '/';
    }
  }
  
  render() {
    return (
      <main>
	<section className={ss.header}>
	  <Link to={this.linker()} className={ss.linker}>MedLinker</Link>
	</section>
	<hr />
	{ this.props.children }
      </main>
    );
  }
}
