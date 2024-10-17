const redis = require("redis");

// Create Redis client
const redisClient = redis.createClient({
  password: "h2kbcg91axbYI2IN0n216dXKmkEJhsaq",
  socket: {
    host: "redis-19296.c252.ap-southeast-1-1.ec2.redns.redis-cloud.com",
    port: 19296,
  },
});

// Handle connection events
redisClient.on("connect", () => {
  console.log("Connected to Redis");
});

redisClient.on("error", (err) => {
  console.log("Redis connection error:", err);
});

// Connect the client
redisClient.connect().catch((err) => {
  console.error("Failed to connect to Redis:", err);
});

module.exports = redisClient;
