// Usage link
var UsageLink = React.createClass({
    render: function() {
        var url = "https://github.com/JobBrander/jobs-" + this.props.providerName + "#usage";
        return (
            <p>For more detailed usage and documentation, see <a href={url} target="_blank">this project's readme</a></p>
        )
    }
})

var usageElement = document.getElementById('usage');
if (usageElement) {
    ReactDOM.render(
      <UsageLink providerName={usageElement.getAttribute("providerName")} />,
      usageElement
    );
}

// Demo Code HTML
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

var demoCodeElement = document.getElementById('demo');
if (demoCodeElement) {
    ReactDOM.render(
      <DemoCode providerName={demoCodeElement.getAttribute("providerName")} />,
      demoCodeElement
    );
}
