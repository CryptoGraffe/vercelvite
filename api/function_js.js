// src/api/helper.ts
var reply = "dude its ok";

// src/api/function_js.ts
async function handler(req, res) {
  res.status(200).send({ hello: reply });
}
export {
  handler as default
};
