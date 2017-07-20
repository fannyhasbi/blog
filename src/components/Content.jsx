import React from 'react';

class Content extends React.Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div className="post-preview">
              <a href="#a">
                <h2 className="post-title">Perkenalan Time</h2>
                <h3 className="post-subtitle">Ini post pertama saya, so saya akan memperkenalkan diri dulu</h3>
              </a>
              <p className="post-meta">Posted on 21 Juli 2017</p>
            </div>
            <hr />
            {/* Older post
            <ul className="pager">
              <li className="next"><a href="#">Older Posts &rarr;</a></li>
            </ul>
            */}
          </div>
        </div>
      </div>
    );
  }
}

export default Content;