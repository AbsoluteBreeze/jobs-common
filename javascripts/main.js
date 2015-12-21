// Render header
ReactDOM.render(
    <div>
        <h1><a href="/">Jobs Common</a></h1>
        <p>Easily integrate job board APIs into your PHP application</p>

        <p className="view"><a href="https://github.com/JobBrander/jobs-common">View the Project on GitHub <small>JobBrander/jobs-common</small></a></p>

        <ul>
          <li><a href="https://github.com/JobBrander/jobs-common/zipball/master">Download <strong>ZIP File</strong></a></li>
          <li><a href="https://github.com/JobBrander/jobs-common/tarball/master">Download <strong>TAR Ball</strong></a></li>
          <li><a href="https://github.com/JobBrander/jobs-common">View On <strong>GitHub</strong></a></li>
        </ul>
    </div>,
    document.getElementById('header')
);

// Render footer
ReactDOM.render(
    <div>
        <p>This project is maintained by <a href="https://github.com/JobBrander">JobBrander</a></p>
        <p><small>Hosted on GitHub Pages &mdash; Theme by <a href="https://github.com/orderedlist">orderedlist</a></small></p>
    </div>,
    document.getElementById('footer')
);

// Render Demo Code HTML
var DemoContent = React.createClass({
  render: function() {
    var providerName = this.props.providerName;
    var demoUrl = "http://demo.jobbrander.com/search/" + this.props.providerName;
    if (providerName) {
        return (
            <p>See a demo and code sample at <a href={ demoUrl } target='_blank'>demo.jobbrander.com/{ providerName }</a>.</p>
        );
    } else {
        return (
            <p>Not available for this provider.</p>
        );
    }
  }
});

var DemoCode = React.createClass({
  render: function() {
    var providerName = this.props.providerName;
    return (
        <div>
            <h3>Demo and Code Sample</h3>
            <DemoContent providerName={providerName} />
        </div>
    );
  }
});

var demoCodeElement = document.getElementById('demo');
if (demoCodeElement) {
    ReactDOM.render(
      <DemoCode providerName={demoCodeElement.getAttribute("providerName")} />,
      demoCodeElement
    );
}
