const validateValues = (req, res, next) => {
  const {
    item_name,
    amount,
    date,
    from,
    category,
  } = req.body;
  if (
    typeof item_name !== "string" ||
    typeof Number(amount) !== "number" ||
    typeof date !== "string" ||
    typeof from !== "string" ||
    typeof category !== "string"
  ) {
    res.status(404).redirect("/error");
  } else {
    next();
  }
};

module.exports = {validateValues}