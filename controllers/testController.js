const redisClient = require("../helpers/helper");

// Controller for Redis cache test
const redisTestController = async (req, res) => {
  try {
    const key = "testData";

    // Check if the data is in the cache
    const cachedData = await redisClient.get(key);

    if (cachedData) {
      console.log("Cache Hit");
      return res.send({
        message: "Data from cache",
        data: JSON.parse(cachedData),
      });
    } else {
      console.log("Cache Miss");

      // Data to cache
      const newData = { message: "Hello from Redis cache!" };

      // Set the new data in the cache with a TTL of 60 seconds
      await redisClient.setEx(key, 60, JSON.stringify(newData));

      return res.send({ message: "Data set to cache", data: newData });
    }
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).send({ error: "An error occurred" });
  }
};

module.exports = redisTestController;
