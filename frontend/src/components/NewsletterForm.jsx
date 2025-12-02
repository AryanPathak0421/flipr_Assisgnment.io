import React, { useState } from "react";
import axios from "../api/axios";
import CaretDown from "../assets/icons/caretDown.svg";


const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    try {
      await axios.post("/newsletter", { email });
      setStatus("Subscribed!");
      setEmail("");
    } catch (err) {
      setStatus("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3 md:items-center mt-4"
    >
      <input
        type="email"
        required
        placeholder="Subscribe to our newsletter"
        className="px-4 py-2  bg-white border border-slate-200 text-sm flex-1 outline-none focus:ring-2 focus:ring-primary/40"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="flex items-center gap-2 px-5 py-2 bg-brandPink text-white text-sm font-medium hover:bg-secondary/90 transition">
  <img
    src={CaretDown}
    alt="dropdown icon"
    className="w-3 h-3 object-contain rotate-[270deg] "
  />
</button>

      {status && (
        <span className="text-xs text-slate-500 mt-1 md:mt-0">{status}</span>
      )}
    </form>
  );
};

export default NewsletterForm;
