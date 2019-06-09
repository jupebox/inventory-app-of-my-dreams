class Item extends React.Component {
    static async getInitialProps({ query }) {
      console.log('id', query.id);
      return {};
    }
    render() {
      return <h1>An item in my inventory : {'query id'}</h1>;
    }
  }
  
  export default Item;
  