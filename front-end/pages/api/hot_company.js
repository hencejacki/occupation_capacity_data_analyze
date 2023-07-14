import request from "@/utils/request"

export default async function handler(req, res) {

    const resp = await request.get('/hot_company');
    
    res.status(200).json(
      resp.data
    );
  }
  