import request from "@/utils/request"

export default async function handler(req, res) {

    const resp = await request.get('city_salary');

    res.status(200).json(
        resp.data
    )
}