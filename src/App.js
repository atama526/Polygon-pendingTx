import React, {Component} from 'react';
import './App.css';
const Web3 = require('web3');



class App extends Component {

  // State initiated to keep track of the main data to work with in this app.
  state = { 
      blockNumber:'',
      pending: [],
      endpoint: '',
      message: '' 
  };
  

 //Main function that will be called when the "Enter" button is pressed. Is to retrieve pending transactions from the EVM mempool and display them to the user.

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({message:'loading...'})
    
    
    try{

      // Web3 instance is started with the provider  given by the user and stored in the "endpoint" state.
      // If the wss endpoint is incorrect the function will catch the error and display an error message.   
      const web3 = await new Web3(new Web3.providers.WebsocketProvider(this.state.endpoint));
      const blockNumber = await web3.eth.getBlockNumber()

      this.setState({blockNumber})

      // Subscribes to incoming pending transactions and unsubscribes after 6 seconds, then It pushes each transaction into the txs array
      var txs =[]
      var subscription = web3.eth.subscribe('pendingTransactions',(error, result) => {
        if (!error)
            setTimeout(unsuscribe, 6000);
            txs.push(result)
            
      })
      
         
      // unsubscribes the subscription. This is called after 6 seconds. 
      const unsuscribe = () => { 
        subscription.unsubscribe(function(error, success){
        if(success)
            console.log('Successfully unsubscribed!');

        });

        // Resets the loading message  and stores the pending transactions in the state array "pending" in order  to display them to the user. 
        this.setState({message:''})
        this.setState({pending: txs})
      }
    } catch(error) {
        this.setState({message: "ERROR: Please enter a correct WSS Endpoint"})
        console.log(error);
        throw new Error()
        

    };

  }


  render() {
    
    return (
      <div>
        <header>
          <nav>
            <ul className="menu">
              <li className="logo"><a href="#">Polygon Pending Transactions - Mumbai Testnet</a></li>
            </ul>
          </nav>
        </header>
        <div className="banner">
          <form onSubmit={this.onSubmit}>
            <h4 className="banner-title"> Please enter your provider information </h4> <br /><p className="parrafo"> e.g.  wss://ws-nd-214-862-598.p2pify.com/4ae723430a82c489e6a50607b4e8110a</p>
            
              <label className="banner-desc"> WSS endpoint:  </label>
              <input className="input"
                value={this.state.endpoint}
                onChange={event => this.setState({ endpoint: event.target.value })}
              />
            
            <button className="btn-signup"> Enter </button> 

          </form>

          <h3>
            {this.state.message}
          </h3>
        </div>
        <article className='article'>
          <p> Latest block Number: {this.state.blockNumber} </p>
          <p> Latest Pending Transactions:
        {/* The transactions stored in the "pending" array state are rendered one by one by mapping it */}
            {this.state.pending.map(
              (transaction, index) => <li key={index}>{transaction}</li>
            )} </p>
        </article>

        
      </div>


    );
  }
}

export default App;
