import redis from 'redis';
import { promisify } from 'util';

// Create a Redis client
const client = redis.createClient();
// const client = redis.createClient('6379', 'redis');

// Handle connection errors
client.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});

// Handle successful connection
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Create a hash and set values
function createHash() {
  client.hset('HolbertonSchools', 'Portland', 50, redis.print);
  client.hset('HolbertonSchools', 'Seattle', 80, redis.print);
  client.hset('HolbertonSchools', 'New York', 20, redis.print);
  client.hset('HolbertonSchools', 'Bogota', 20, redis.print);
  client.hset('HolbertonSchools', 'Cali', 40, redis.print);
  client.hset('HolbertonSchools', 'Paris', 2, redis.print);
}

// Display hash
function displayHash() {
  client.hgetall('HolbertonSchools', (err, obj) => {
    if (err) {
      console.error(`Error retrieving hash: ${err.message}`);
      return;
    }
    console.log(obj);
  });
}

createHash();
displayHash();
