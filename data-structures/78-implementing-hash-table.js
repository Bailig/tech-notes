/**
 * @typedef {[string, any]} KeyVal
 * @typedef {KeyVal[]} Bucket
 */

class HashTable {
  constructor(size) {
    /**
     * @type {Bucket[]}
     */
    this.data = new Array(size);
    // this.data = [];
  }

  /**
   * @param {string} key
   */
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  /**
   * @param {string} key
   * @param {any} value
   */
  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  /**
   * @param {string} key
   */
  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket === undefined) return;

    const keyVal = currentBucket.find(([key_]) => key === key_);
    if (keyVal === undefined) return;
    return keyVal[1];
  }

  keys() {
    return this.data.reduce((keys, bucket) => {
      const bucketKeys = bucket.map(([k]) => k);
      keys.push.apply(keys, bucketKeys);
      return keys;
    }, []);
  }
}

const myHashTable = new HashTable(2);
myHashTable.set("apple", 1);
console.log(myHashTable.get("apple"));
myHashTable.set("orange", 2);
console.log(myHashTable.get("orange"));
myHashTable.set("banana", 3);
console.log(myHashTable.get("banana"));
console.log(myHashTable.get("x"));
console.log(myHashTable.keys()); // O(n)
