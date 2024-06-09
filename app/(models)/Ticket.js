import mongoose, { Schema } from "mongoose";
require("dotenv").config();

mongoose.connect(
  "mongodb+srv://admin:Eu1snXSN2qFJ8VHt@ticketapp.fi8jdbe.mongodb.net/TicketDB"
);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
