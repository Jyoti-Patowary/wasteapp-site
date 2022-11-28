const asyncHandler = require("express-async-handler");
const Ticket = require("../models/ticket.model");

const postTicket = asyncHandler(async (req, res) => {
  console.log("user", req.user);
  const ticket = new Ticket({ ...req.body, raiser: req.user.id });

  try {
    await ticket.save();
    res.status(201).send(ticket);
  } catch (e) {
    res.status(400).send(e);
  }
});

const getAllTicket = async (req, res) => {
  try {
    const ticket = await Ticket.find({});
    res.send(ticket);
  } catch (e) {
    res.status(400).send();
  }
};

const getTicket = async (req, res) => {
  try {
    const data = await Ticket.findById(req.params.id);
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send("No Records Found");
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

const acceptTicket = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const ticket = await Ticket.findByIdAndUpdate(id, {
      $set: {
        receiver: req.user.id,
        status: "isAssigned",
      },
    }).lean();
    res.status(200).send({ ...ticket });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

const modifyTicket = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["firstname", "lastname", "email", "password"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!ticket) {
      return res.status(404).send();
    }

    res.send(ticket);
  } catch (e) {
    res.status(400).send(e);
  }
};

const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);

    if (!ticket) {
      return res.status(404).send();
    }

    res.send(ticket);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = {
  getAllTicket,
  getTicket,
  modifyTicket,
  deleteTicket,
  postTicket,
  acceptTicket,
};
