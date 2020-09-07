# Database scaling

1. identify inefficient queries
   - only request what you need
   - use indexing to improve the query
     - indexing is a way of sorting a number of records on multiple fields. So if I create an index on a field that is age of the users table it creates a new copy of that data structure which holds the field value and a pointer to the record that it relates to.
     - `CREATE INDEX index_name ON table_name (column_name)`
1. increase memory
1. vertical scaling (redis, memchached)
   - add caching with redis
1. sharding
   - breakup the data in to pisces
   - caution: it's difficult to do and can rase problems
   - example: break up the data to user younger than 18 and older than 18
1. more database
   - add more database to distribute the load
1. database types
