var body = document.getElementById('body');
var providerName = body.getAttribute("providerName");
var demo = body.getAttribute("demo");
var docsLink = body.getAttribute("docsLink");
var example = document.getElementById('example').textContent;

// Repo/Packagist links
var GithubLink = React.createClass({
    render: function() {
        var githubLink = "https://github.com/JobBrander/jobs-" + providerName;
        return (
            <span><a href={githubLink} target="_blank">Github</a></span>
        )
    }
});

var PackagistLink = React.createClass({
    render: function() {
        var packagistLink = "https://packagist.org/packages/JobBrander/jobs-" + providerName;
        return (
            <span> | <a href={packagistLink} target="_blank">Packagist</a></span>
        )
    }
});

var DocsLink = React.createClass({
    render: function() {
        if (docsLink) {
            return (
                <span> | <a href={docsLink} target="_blank">API Docs</a></span>
            )
        } else {
            return (<span></span>)
        }
    }
});

var RepoLinks = React.createClass({
    render: function() {
        return (
            <p>
                <GithubLink />
                <PackagistLink />
                <DocsLink />
            </p>
        )
    }
});

var linksElement = document.getElementById('links');
if (linksElement) {
    ReactDOM.render(
      <RepoLinks />,
      linksElement
    );
}
                
// Installation instructions
var Installation = React.createClass({
    render: function() {
        return (
            <div>
                <h3>Installation</h3>
                <p>Use composer:</p>
                <pre>composer require jobbrander/jobs-{providerName}</pre>
            </div>
        )
    }
});

var installationElement = document.getElementById('installation');
if (installationElement) {
    ReactDOM.render(
      <Installation providerName={providerName} />,
      installationElement
    );
}

// Usage link
var UsageLink = React.createClass({
    render: function() {
        var url = "https://github.com/JobBrander/jobs-" + providerName + "#usage";
        return (
            <p>For more detailed usage and documentation, see <a href={url} target="_blank">this project's readme</a></p>
        )
    }
});

var UsageDetails = React.createClass({
    render: function() {
        var url = "https://github.com/JobBrander/jobs-" + providerName + "#usage";
        return (
            <div>
                <h3 id="usage">Usage</h3>
                <p>Get the latest project manager jobs in Chicago:</p>
                <pre>{example}</pre>
            </div>
        )
    }
});

var usageElement = document.getElementById('usage');
if (usageElement) {
    ReactDOM.render(
      <div>
          <UsageDetails />
          <UsageLink providerName={providerName} />
      </div>,
      usageElement
    );
}

// Demo Code HTML
var DemoCode = React.createClass({
  render: function() {
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
    var demoUrl = "http://demo.jobbrander.com/search/" + providerName;
    if (demo == "true") {
        return (
            <p>See a demo and code sample at <a href={ demoUrl } target='_blank'>demo.jobbrander.com/search/{ providerName }</a>.</p>
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
      <DemoCode providerName={providerName} />,
      demoCodeElement
    );
}
