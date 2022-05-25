function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const API_url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';



class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      quotes: [{
        quote: "Definiteness of purpose is the starting point of all achievement.",
        author: "W. Clement Stone" }],

      index: 0 });_defineProperty(this, "getRandomIndex",












    () => {
      const { quotes } = this.state;

      if (quotes.length > 0) {
        const index = Math.floor(Math.random() * quotes.length);
        this.setState({
          index });

      }
    });}componentDidMount() {fetch(API_url).then(res => res.json()).then(res => {this.setState({ quotes: res.quotes }, this.getRandomIndex);});}


  render() {
    const { quotes, index } = this.state;

    const quote = quotes[index];

    return /*#__PURE__*/(
      React.createElement("div", { className: "wrapper d-flex  align-items-center  justify-content-center bg-primary" }, /*#__PURE__*/

      React.createElement("div", { className: " col-md-6 box  p-4 rounded border border-primary border-3 bg-white", id: "quote-box" }, /*#__PURE__*/

      React.createElement("p", { className: "", id: "text" }, quote.quote), /*#__PURE__*/
      React.createElement("div", { className: "text-end" }, /*#__PURE__*/
      React.createElement("i", null, "-"), /*#__PURE__*/React.createElement("i", { className: "", id: "author" }, quote.author)), /*#__PURE__*/

      React.createElement("div", { class: "d-flex justify-content-between" }, /*#__PURE__*/
      React.createElement("a", { className: "btn btn-primary ", target: "_top", href: "https://twitter.com/intent/tweet?text=", id: "tweet-quote" }, /*#__PURE__*/
      React.createElement("i", { class: "fab fa-twitter" }), "Tweet"), /*#__PURE__*/

      React.createElement("button", { class: " btn btn-dark", id: "new-quote", onClick: this.getRandomIndex }, /*#__PURE__*/
      React.createElement("i", { class: "fas fa-random" }), "Get Quote")))));








  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));