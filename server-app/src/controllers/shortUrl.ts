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
  try {
    const shortUrls = await urlModel.find()
    if (shortUrls.length < 0) {
      res.status(404).send({ message: "short Urls not found" })
    } else {
      res.status(200).json(shortUrls)
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" })
  }
}

export const getUrl = async (
  req: express.Request,
  res: express.Response
) => {
 try {
  const shortUrl = await urlModel.findOne({ shortUrl: req.params.id })
  if (!shortUrl) {
    return res.status(404).send({ message: "Full URL not found" })
  } else {
    shortUrl.clicks++;
    shortUrl.save();
    res.redirect(`${shortUrl.fullUrl}`)
  }
 } catch (error) {
  res.status(500).send({ message:"something went wrong" })
 }
}

export const deleteUrl = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const shortUrl = await urlModel.findByIdAndDelete({ _id: req.params.id })
    if (shortUrl) {
      return res.status(204).send({ message: "Requested url successfully deleted" })
    } 
  } catch (error) {
  res.status(500).send({ message:"something went wrong" })
    
  }
}
