var Navbar = React.createClass({
  render: function() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
          <NavbarHeader />
          <NavbarCollapse />
          </div>
        </nav>
    );
  }
});

var NavbarHeader = React.createClass({
  render: function() {
    return (
        <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" navbar-toggle="collapse"
          data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img className="img-brand" src="static/img/KeyMailLogo.png"></img>
          KeyMail
        </a>
      </div>
    )
  }
});

var NavbarCollapse = React.createClass({
  render: function() {
    return (
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <NavbarItem link="#" text="Settings" />
            <NavbarItem link="#" text="Accounts" />
            <NavbarItem link="#" text="About" />
          </ul>
        </div>
    )
  }
});

var NavbarItem = React.createClass({
  render: function() {
    return (
        <li><a href={this.props.link}>{this.props.text}</a></li>
    )
  }
});
