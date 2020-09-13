import Form from "../models/formModel";
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
      name,
      address,
      zipCode,
      email,
      city,
      phone,
      quantity,
      approach,
    });
    await data.save();

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILUSERNAME,
        pass: process.env.MAILPASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.MAILUSERNAME,
      to: process.env.MAILUSERNAME,
      subject: "Hvala što ste kupili knjigu",
      text: "Hvala što ste kupili knjigu",
    };

    const userData = {
      name,
      address,
      zipCode,
      email,
      city,
      phone,
      quantity,
      approach,
    };

    let customerData = {
      from: process.env.MAILUSERNAME,
      to: process.env.MAILUSERNAME,
      subject: "Podaci o kupcu",
      html: userData,
    };

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
    });

    await transporter.sendMail(customerData, (error, info) => {
      if (error) {
        return console.log(error);
      }
    });

    return res.status(201).json("FORM SUBMITTED");
  } catch (error) {
    throw new Error("ERROR WITH FORM SUBMISSION");
  }
};
