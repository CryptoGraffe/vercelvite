

import {reply} from "./helper.js";

// @ts-expect-error not using req
export default async function handler(req: VercelRequest, res: VercelResponse) {
    // console.log(req);
    res.status(200).send({hello:reply});
}
