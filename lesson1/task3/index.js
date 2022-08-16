
const rootElement = document.querySelector('#root');


const element = (
<div className="greeting">
  <div className="greeting__title">Hello, world!</div>
  <div className="greeting__text">I'm arning React!</div>
</div>
);



ReactDOM.render(element, rootElement);