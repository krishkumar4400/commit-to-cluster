const healthCheck = (req, res) => {
  try {
    res.set("Cache-Control", "no-store");
    return res.status(200).json({
      message: "Server is up and running",
      success: true,
      status: "OK",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export default healthCheck;
