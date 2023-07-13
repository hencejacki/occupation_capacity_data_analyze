import request from "@/utils/request";

export default async function handler(req, res) {
    const resp = await request.post('/mail', {
        "to": JSON.parse(req.body).to
    });

    res.status(200).json({
        "msg": resp.msg
    })
}