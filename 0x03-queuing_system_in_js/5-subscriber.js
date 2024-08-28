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
  client.subscribe('holberton school channel');
});

client.on('message', (channel, message) => {
  if (channel === 'holberton school channel') {
    console.log(message);
    if (message === 'KILL_SERVER') {
      client.unsubscribe();
      client.quit();
    }
  }
});
