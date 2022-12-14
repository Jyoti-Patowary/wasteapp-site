const asyncHandler = require("express-async-handler");
const Ticket = require("../models/ticket.model");
const { sendAcceptedEmail } = require("../config/emailAccount");
const { default: ShortUniqueId } = require("short-unique-id");

let uid = new ShortUniqueId(4);

const postTicket = asyncHandler(async (req, res) => {
  /**Check if user already has a open request */

  try {
    const existingOpenTicket = await Ticket.count({
      raiser: req.user.id,
      status: "isOpen",
    });
    if (existingOpenTicket) {
      res.status(403).json({
        message:
          "You already have a open ticket. You can only raise a ticket if there is no open ticket",
      });
    } else {
      const ticket = new Ticket({
        ...req.body,
        raiser: req.user.id,
        ticketNo: uid(),
      });

      await ticket.save();
      res.status(201).send(ticket);
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

const getAllTicket = async (req, res) => {
  try {
    const search = req.query.search;
    const filter = req.query.filter;
    let condition = {};
    if (search) {
      condition = { ...condition, ticketNo: new RegExp(search, "gi") };
    }
    if (filter) {
      condition = { ...condition, status: filter };
    }
    const ticket = await Ticket.find(condition).sort({ _id: -1 });
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
    // await sendAcceptedEmail(req.user.email, req.user.firstname);
    res.status(200).send({ ...ticket });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

const closeTicket = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const ticket = await Ticket.findByIdAndUpdate(id, {
      $set: {
        receiver: req.user.id,
        status: "isClosed",
      },
    }).lean();
    // await sendCloseEmail(req.user.email, req.user.firstname);
    res.status(200).send({ ...ticket });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

const pendingTicket = async (req, res) => {
  try {
    let pending = await User.find({ status: "inProgress" }).exec();
    // let allUsers = await User.find({ role: req.params.role }).exec();
    res.json([
      ...pending,
      // token: generateToken(allUsers._id),
    ]);
    console.log("Hello", ...pending);
  } catch (e) {
    res.status(400);
    throw new Error("Enable Find Users");
  }
};

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

const getTicketsByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const tickets = await Ticket.findByRaiserId(id);
    res.send(tickets);
  } catch (error) {
    return Promise.reject(new Error(error));
  }
};

const getTicketsCount = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const noOfOpenOrders = await Ticket.count({
      status: "isOpen",
    });

    const noOfAcceptedOrders = await Ticket.count({
      raiser: id,
      status: "isAssigned",
    });

    const totalAcceptedOrders = await Ticket.count({
      $or: [{ status: "isAssigned" }, { status: "isClosed" }],
    });

    const responseToSend = {
      noOfOpenOrders,
      noOfAcceptedOrders,
      totalAcceptedOrders,
    };

    res.send(responseToSend);
  } catch (error) {
    return Promise.reject(new Error(error));
  }
};

module.exports = {
  getAllTicket,
  getTicket,
  modifyTicket,
  deleteTicket,
  postTicket,
  acceptTicket,
  getTicketsByUserId,
  getTicketsCount,
  closeTicket,
};
