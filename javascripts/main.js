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

// Render List of Providers
ReactDOM.render(
    <ul>
        <li>
            <a href="/providers/simplyhired.html">SimplyHired</a> | 
            <a href="https://github.com/JobBrander/jobs-simplyhired">Github</a>
        </li>
        <li>
            <a href="/providers/indeed.html">Indeed</a> | 
            <a href="https://github.com/JobBrander/jobs-indeed">Github</a>
        </li>
        <li>
            <a href="/providers/dice.html">Dice</a> | 
            <a href="https://github.com/JobBrander/jobs-dice">Github</a>
        </li>
    </ul>,
    document.getElementById('providersList')
);

// Render footer
ReactDOM.render(
    <div>
        <p>This project is maintained by <a href="https://github.com/JobBrander">JobBrander</a></p>
        <p><small>Hosted on GitHub Pages &mdash; Theme by <a href="https://github.com/orderedlist">orderedlist</a></small></p>
    </div>,
    document.getElementById('footer')
);
