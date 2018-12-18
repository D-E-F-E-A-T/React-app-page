
import React, { Component } from 'react';
import time_data from '../../../data/time.json';

class Detail extends Component {
  constructor(props) {
      super(props);
      this.state = {
          data: []
      }
  }
    componentDidMount() {
      console.log('this.prosps', this.props, 'this.prosps')
      var datas;
      if(this.props.params.page == 'news') datas = time_data
      console.log('here is datas:D', datas)
      this.setState({data: datas})
    }


  render() {
    console.log('this is setState:', this.state)
    return (
      <div>
        {
          this.state.data.map(item => {
            return (
              <section key={item.source.id}>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <img className="card-img-top"src={item.urlToImage} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-content">{item.content}</p>
                  <a href={`${item.url}`} target="_blank" >link to the article</a>
                  <p className="card-author">Author: {item.author}</p>
                </div>
              </section>
            )
          })
        }
      </div>
    )
  }
}


export default Detail;
