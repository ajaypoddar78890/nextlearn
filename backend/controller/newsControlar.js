import News from "../Scema/news.js"; // Ensure the path matches your actual file structure

// Create a new news item
export const createNews = async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ message: "Error creating news item", error });
  }
};

//  get news

// Fetch all news items
export const getAllNews = async (req, res) => {
  try {
    const news = await News.find(); // Fetch all news items from the database
    res.status(200).json(news); // Send the fetched news items as a JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching news items", error });
  }
};

// Fetch a single news item by ID
export const getNewsById = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the request parameters
    const news = await News.findById(id); // Find a news item by ID
    if (!news) {
      return res.status(404).json({ message: "News item not found" }); // Handle case where news item is not found
    }
    res.status(200).json(news); // Send the fetched news item as a JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching news item", error });
  }
};
