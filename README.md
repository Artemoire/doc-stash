# doc-stash

CLI tool that runs a lightweight document (in-memory) store server locally

### API
- ```GET  /``` - information about server
- ```GET  /_stash/{stashId}``` - information about stash
- ```POST /_stash/{stashId}/_doc``` - add document to stash
- ```GET  /_stash/${stashId}/_doc/{docId}``` - get doc by id
- ```GET  /_stash/${stashId}/_doc/_search?[from=<number>][&size=<number>|10]``` - query method
