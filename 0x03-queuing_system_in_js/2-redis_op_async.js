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

// Set a new school value
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

// Display the value of a school (use promisify)
async function displaySchoolValue(schoolName) {
  const getAsync = promisify(client.get).bind(client);
  try {
    const value = await getAsync(schoolName);
    console.log(`Value for ${schoolName}: ${value}`);
    } catch (err) {
    console.error(`Error retrieving value for ${schoolName}: ${err.message}`);
    }
  }

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
