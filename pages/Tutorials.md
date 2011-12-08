<p> 
Before writing code with Persevere it is helpful to understand the <a href="http://www.sitepen.com/blog/2010/01/22/introducing-pintura/">basic design goals</a>. Persevere is designed to create applications with user interface implemented primarily on the client side and Persevere playing the role as an HTTP-based RESTful data provider. <p>Persevere is not an MVC framework, it is built to be the data model (the "M" in the MVC), such that the the viewer and controller can be <a href="http://www.sitepen.com/blog/2008/07/18/clientserver-model-on-the-web/">cleanly implemented separately</a> (typically on the client side). Persevere works beautifully as the server for Ajax-style JSON-based web applications, and can easily be complimented with other types of user interfaces such as an iPhone app, all using the same convenient server interface. One can certainly add viewer and controller technologies to Persevere, but that is not part of the core infrastructure.
</p><p>
Persevere is a framework composed of several modular autononmous packages that provide different functionality, and cohesively come together to provide a complete RESTful server data storage solution. 
</p><p>
Because Persevere is focused on building data models and providing RESTful access to this data, the basic introductory "Hello World" application of Persevere consists of creating a simple data model and then exposing via the top level web framework within Persevere called Pintura. The <a href="http://www.sitepen.com/blog/2010/01/25/getting-started-with-pintura/">getting started with Pintura article</a> provides the essential first steps to creating your first Persevere application. Pintura is a based on a set of middleware components that provide various web interaction capabilities including authentication, multiple media type handling (serialization and deserialization), cross-site data access, conditional request handling, cross site request forgery protection, and data model delegation.
</p><p>
The getting started article mentioned above also relies on Perstore, the persistence and data modeling library. Next, <a href="http://www.sitepen.com/blog/2010/03/08/object-capability-model-and-facets-in-perstorepintura/">you can walk through how to leverage the data modeling functionality provided by Perstore</a><a> including data validation (using JSON Schema), faceting (for fine grained security/access control), object mapping, link management, query normalization, and more.
</a></p><p><a>
Persevere's </a><a href="http://www.sitepen.com/blog/2010/07/19/real-time-comet-applications-on-node-with-tunguska/">Tunguska library supports Comet capabilities that integrate with the data model</a>, allowing for monitoring of data for changes, making it easy to build real-time application with dynamically updated data views. Tunguska provides the pub/sub infrastructure designed for distribution across multiple processes and server to facilitate truly scalable real-time applications.
</p><p>
These articles should get you started with Persevere. From here, it is recommended that you look at the <a href="Documentation">documentation for each project</a> to get more detailed information about the APIs that are available.
</p>