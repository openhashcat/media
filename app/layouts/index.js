import ss from '@/styles/index.css';

export default function(props) {
  return (
    <main>
      <section className={ss.header}>
	  <div>MedLinker</div>
	</section>
	<hr />
	{ props.children }
    </main>
  );
}
