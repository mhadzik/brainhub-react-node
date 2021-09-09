module.exports = (app) => {
  app.get("/api/get_events", (req, res) => {
    res.redirect("/events");
  });
};
