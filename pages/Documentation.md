Persevere is a web framework for building HTTP/RESTful web applications, and is specifically
designed for Ajax-style applications that benefit from a consistent end-to-end JSON/JavaScript
data and coding. Persevere is composed of several different distinct packages that 
coherently combine to robust framework for quickly and easily building JSON-centric
web applications. Persevere's framework allows you to focus on building well-organized 
data models, and exposing these to your client side user interface with a minimum of effort.

See the <a href="Installation">installation page</a> for installation instructions. 

The basic usage of Persevere is to create a data model with a Perstore data model and 
expose it through the Pintura web stack. For example:

    var Model = require("perstore/model").Model,
    	// create a store using MongoDB
    	store = require("perstore/mongodb").MongoDB("Product");
   	// create the data model
    Product = Model(store, {
        properties: {
            name: String
        }
    }); 
	// expose the data model through Pintura's HTTP REST interface 
	require("pintura/pintura").getDataModel = function(request){
		return {
			Product: Product
		};
	};

And then we could access the data in our database using standard HTTP methods:

* GET /{model}/{id} - Gets the object with the given id from the model store.
* PUT /{model}/{id} - Updates or creates object with the given id in the model store.
* DELETE /{model}/{id} - Deletes the object with the given id from the model store.
* POST /{model}/ - Creates or incrementally updates an object in model store. 

This is a very simple condensed example of using Persevere. To learn more, you can take
a look at each of the packages that make up Persevere:

## <a href="pintura/">Pintura</a>
The external interface of Persevere that provides the gateway to the web is <a href="pintura/">Pintura</a>.
Pintura handles HTTP and WebSocket requests, processing these requests by querying and manipulating
the underlying data model. Pintura is made up of a JSGI middleware stack providing 
authorization, content negotiation, sessions, cross-domain access and protection, and 
error handling in an HTTP standards compliant manner. This package allows you to automatically expose
your data model through JSON and other media types with an out-of-the-box setup 
that can easily be customized for specific needs. 

## <a href="perstore/">Perstore</a>
<a href="rql/">Perstore</a> provides a the data persistence and modeling layer of Persevere. Perstore
provides several data stores that allow it connect with different backends like
SQL DBs, MongoDB, CouchDB, in-memory, and others. Perstore then provides the 
facilities for layering data models on top of these stores that enfore data integrity
constraints and adds model logic.

## <a href="rql/">RQL</a>
Resource Query Language (RQL) is the query language used by Persevere, and is designed specifically for use in
querying JSON-oriented DBs through URLs. The <a href="rql/">documentation</a for the RQL package
defines query language, describing the syntax and various operators that can be used
in queries (which are available through HTTP requests and direct in-code calls). The
RQL package also includes various modules for parsing and constructing queries, although
you probably won't need to directly interact with these much unless you are extending
the query language or creating new stores.

## <a href="promised-io/">Promised-IO</a>
Promised-IO provides a promise-based library with cross-platform access to file, network, and other OS IO facilities
through a consistent API. Promised-IO provides a promise module for working with
promises with various convenience utility functions. Promised-IO normalizes the access to IO
for Rhino and NodeJS, making it possible to build applications that run on both platforms.

## <a href="tunguska/">Tunguska</a>
<a href="tunguska/">Tunguska</a> is a comet-based distributed publish/subscribe hub 
and enables building applications around a pubsub paradigm with real-time message delivery
to browsers. This is used by Pintura to send data in real-time to clients.

## <a href="patr/">Patr</a>
<a href="patr/">Patr</a> is a promise-based testing framework that is used by Persevere.

## <a href="jsgi-node/">JSGI-Node</a>
<a href="jsgi-node/">JSGI-Node</a> is a JSGI container for Node, providing efficient
asynchronous execution of Pintura's JSGI middleware stack.

## <a href="templify/">Templify</a>
<a href="templify/">Templify</a> is a templating tool for generating HTML from data
objects.

The source code and bug trackers for these packages are available [here](https://github.com/persvr/).
 
Documentation for Persevere 1.0 is <a href="http://docs.persvr.org">available here</a>.
