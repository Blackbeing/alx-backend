import redis from 'redis';

// Create a Redis client
const client = redis.createClient();

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

// Display the value of a school
function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, reply) => {
    if (err) {
      console.error(`Error retrieving value for ${schoolName}: ${err.message}`);
      return;
    }
    console.log(`Value for ${schoolName}: ${reply}`);
  });
}
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
