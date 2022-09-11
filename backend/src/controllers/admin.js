const path = require ("path");

const dashboard = async (req, res) => {
  res.sendFile(path.join(__dirname + "/../../dist/admin/dashboard.html"));
};

module.exports = { dashboard };
