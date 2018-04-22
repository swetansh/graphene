import React, {Component} from 'react';

class Collaborate extends Component {

    constructor(props) {
        super();
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

  render() {
        return (
            <div className="Collaborate-form-page">
                <div className="container">
                    <div className="details pull-left" style={{border:'none'}}>
                    <h3 className="card-title">COLLABORATE</h3>
                    <h1 className="card-title">WITH US</h1>
                        <p className="card-text">For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
                        <p className="card-text"> For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
                    </div>
                    <div className="form-section pull-right">
                        <div className="text-center">
                            <img src="assets/detail02.png" />
                        </div>
                        <div className="form-page">
                            <form onSubmit={this.handleSubmit}>
                            <div className="details form-group">
                                <label for="name">Name:</label>
                                <input type="text" className="form-control" id="name" onChange={this.handleChange} style={{border:'none',background:'transparent'}} />
                              </div>
                              <div className="details form-group">
                                <label for="surname">Surname:</label>
                                <input type="text" className="form-control" id="surname" onChange={this.handleChange} style={{border:'none',background:'transparent'}} />
                              </div>
                              <div className="details form-group">
                                <label for="phone">PHONE:</label>
                                <input type="number" className="form-control" id="phone" onChange={this.handleChange} style={{border:'none',background:'transparent'}} />
                              </div>
                              <div className="details form-group">
                                <label for="email">Email address:</label>
                                <input type="email" className="form-control" id="email" onChange={this.handleChange} style={{border:'none',background:'transparent'}} />
                              </div>
                
                              <div className="details form-group">
                                  <label for="exp">Experience:</label>
                                  <select className="form-control" id="sel1" style={{height:'auto',border:'none',background:'transparent'}}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                  </select>
                                </div>
                              <div className="details form-group">
                                  <label for="exp">Where did you hear us?:</label>
                                  <select className="form-control" id="sel1" style={{height:'auto',border:'none',background:'transparent'}}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                  </select>
                                </div>
                              <div className="know-more" style={{float:'right'}}>SEND</div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        )
      }
}

export default Collaborate;
