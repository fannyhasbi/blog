import React from 'react';

const imgUrl = 'https://wallpapershome.com/images/pages/pic_hs/11926.jpg';

const Header = (props) => (
  <header className="intro-header" style={{backgroundImage: "url('"+ imgUrl +"')"}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div className="site-heading">
              <h1>{props.title}</h1>
              <hr className="small" />
              <span className="subheading">{props.subTitle}</span>
            </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;