With cross-platform promise-driven pluggable storage based on W3C's DB API, use MongoDB, CouchDB, in-memory, JSON-files, SQL, and more, layered with conflict resolution, inheritance, aggregation, and modification events. Persevere's persistence framework, Perstore, is built using a modular layered approach for data models to build on top of a pluggable storage system, so you can build applications on top of heterogeneous databases with a consistent API and the flexibility to choose and switch to the optimal storage solution for each situation.

Perstore includes store layers that add various functionality to data stores like replication, subscriptions to data change events, pseudo inheritance, data types, and aggregation of stores. All stores are based on the W3C Indexed DB API. This means your model code is not based on a proprietary API, but is standards based and portable, the same API is being used in the new generation of browser based databases, making it very easy to share model code between the browser and server. The store API is object oriented, making it very natural to use and is also very simple to implement for custom storage systems (basically just implement get, put, and delete methods).