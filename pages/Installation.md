<p>If you are using NodeJS, you can install Persevere with NPM. Simply add Persevere packages as dependencies to your application's package.json and run <code>npm install</code>. To install the example wiki, you can simply install the example wiki package:
</p><pre>
mkdir node_modules
cd node_modules
npm install persevere-example-wiki
</pre>
And then to start it:
<pre>cd persevere-example-wiki
node index.js
</pre>
<p></p>
<p>
If you want to run Persevere on Rhino, Persevere is built to work with RingoJS. Persevere packages can be installed with the ringo-admin package installation tool. Download RingoJS, and then install the packages:
(note that errors about removing files are common with ringo-admin for some reason)
</p><pre>bin\ringo-admin install kriszyp/perstore
bin\ringo-admin install kriszyp/pintura
bin\ringo-admin install kriszyp/promised-io
bin\ringo-admin install kriszyp/templify
bin\ringo-admin install kriszyp/patr
bin\ringo-admin install kriszyp/rql
bin\ringo-admin install kriszyp/tunguska
bin\ringo-admin install kriszyp/json-schema
</pre>
And to install the example wiki:
<pre>bin\ringo-admin install kriskowal/wiky
bin\ringo-admin install kriszyp/persevere-example-wiki
</pre>
Download require.js to packages/requirejs/require.js (sorry, ringo-admin fails to install this package)
<pre>cd packages/persevere-example-wiki
..\..\bin\ringo -l persevere-example-wiki/ringo-index.js
</pre>
(make sure to start ringo in legacy mode, Persevere uses advanced JavaScript features that are disabled by default in Ringo)