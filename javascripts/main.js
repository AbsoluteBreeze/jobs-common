// Render header
var Header = React.createClass({
  render: function() {
    return (  
        <div>
            <h1><a href="/">Jobs Common</a></h1>
            <p>Easily integrate job board APIs into your PHP application</p>

            <p className="view"><a href="https://github.com/JobBrander/jobs-common">View the Project on GitHub <small>JobBrander/jobs-common</small></a></p>

            <ul>
              <li><a href="https://github.com/JobBrander/jobs-common/zipball/master">Download <strong>ZIP File</strong></a></li>
              <li><a href="https://github.com/JobBrander/jobs-common/tarball/master">Download <strong>TAR Ball</strong></a></li>
              <li><a href="https://github.com/JobBrander/jobs-common">View On <strong>GitHub</strong></a></li>
            </ul>
        </div>
    );
  }
});

var headerElement = document.getElementById('header');
if (headerElement) {
    ReactDOM.render(
      <Header />,
      headerElement
    );
}

// Render footer
var Footer = React.createClass({
  render: function() {
    return (
        <div>
            <p>This project is maintained by <a href="https://github.com/JobBrander">JobBrander</a></p>
            <p><small>Hosted on GitHub Pages &mdash; Theme by <a href="https://github.com/orderedlist">orderedlist</a></small></p>
        </div>
    );
  }
});

var footerElement = document.getElementById('footer');
if (footerElement) {
    ReactDOM.render(
      <Footer />,
      footerElement
    );
}
