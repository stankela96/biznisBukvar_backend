import Form from "../models/form";
import nodemailer from "nodemailer";
const dotenv = require("dotenv").config();

export const formSubmission = async (req, res, next) => {
  try {
    const {
      name,
      address,
      zipCode,
      email,
      city,
      phone,
      quantity,
      approach,
    } = req.body;

    const data = new Form({
      name: name,
      address: address,
      zipCode: zipCode,
      email: email,
      city: city,
      phone: phone,
      quantity: quantity,
      approach: approach,
    });
    await data.save();

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILUSERNAME,
        pass: process.env.MAILPASSWORD,
      },
    });

    var mailingList = [process.env.MAILUSERNAME, process.env.TESTMAIL];

    let mailOptions = {
      from: process.env.MAILUSERNAME,
      to: mailingList,
      subject: "hello",
      text: "Hello world?",
    };

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
    });

    return res.status(201).json("FORM SUBMITTED");
  } catch (error) {
    throw new Error("ERROR WITH FORM SUBMISSION");
  }
};
