import express from "express";
import { urlModel } from "../model/shortUrl";


export const createUrl = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { fullUrl } = req.body
    const urlFound = await urlModel.find({ fullUrl })
    if (urlFound.length > 0) {
      return res.status(409).json({ message: "URL already exists" });
    } else {
      const shortUrl = await urlModel.create({ fullUrl });
      return res.status(201).json(shortUrl);
    }

  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}


export const getAllUrl = async (
  req: express.Request,
  res: express.Response
) => {
 

}

export const getUrl = async (
  req: express.Request,
  res: express.Response
) => {

}

export const deleteUrl = async (
  req: express.Request,
  res: express.Response
) => {

}
