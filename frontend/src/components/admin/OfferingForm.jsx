import React, { useState, useEffect } from "react";

const emptyForm = {
  tag: "",
  imageUrl: "",
  title: "",
  location: "",
  description: "",
  totalPrice: "",
  getPrice: "",
  securityType: "",
  investmentMultiple: "",
  maturity: "",
  minInvestment: ""
};

const OfferingForm = ({ onSubmit, selected }) => {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (selected) setForm(selected);
    else setForm(emptyForm);
  }, [selected]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      className="space-y-5 text-xs border rounded-lg p-4 bg-white shadow-md"
      onSubmit={handleSubmit}
    >
      {/* Row 1: Tag + Card image */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-slate-700 text-[11px]">
            Tag
          </label>
          <input
            name="tag"
            placeholder="e.g. House"
            value={form.tag}
            onChange={handleChange}
            className="border border-gray-200 px-2 py-1 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-slate-700 text-[11px]">
            Card Image URL
          </label>
          <input
            name="imageUrl"
            placeholder="https://example.com/image.jpg"
            value={form.imageUrl}
            onChange={handleChange}
            className="border border-gray-200 px-2 py-1 rounded"
          />
        </div>
      </div>

      {/* Row 2: Title + Location */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-slate-700 text-[11px]">
            Title
          </label>
          <input
            name="title"
            placeholder="Oxalis"
            value={form.title}
            onChange={handleChange}
            className="border border-gray-200 px-2 py-1 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-slate-700 text-[11px]">
            Location
          </label>
          <input
            name="location"
            placeholder="Brooklyn, NY"
            value={form.location}
            onChange={handleChange}
            className="border border-gray-200 px-2 py-1 rounded"
          />
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-slate-700 text-[11px]">
          Description
        </label>
        <textarea
          name="description"
          placeholder="Short overview of the project..."
          value={form.description}
          onChange={handleChange}
          rows={3}
          className="border border-gray-200 px-2 py-1 rounded resize-none"
        />
      </div>

      {/* Row 3: Get price + Total price */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-slate-700 text-[11px]">
            Get Price
          </label>
          <input
            type="number"
            name="getPrice"
            placeholder="57990"
            value={form.getPrice}
            onChange={handleChange}
            className="border border-gray-200 px-2 py-1 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-slate-700 text-[11px]">
            Total Price
          </label>
          <input
            type="number"
            name="totalPrice"
            placeholder="1000000"
            value={form.totalPrice}
            onChange={handleChange}
            className="border border-gray-200 px-2 py-1 rounded"
          />
        </div>
      </div>

      {/* Row 4: Security Type + Investment Multiple */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-slate-700 text-[11px]">
            Security Type
          </label>
          <input
            name="securityType"
            placeholder="Revenue Sharing Note"
            value={form.securityType}
            onChange={handleChange}
            className="border border-gray-200 px-2 py-1 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-slate-700 text-[11px]">
            Investment Multiple
          </label>
          <input
            name="investmentMultiple"
            placeholder="1.4x"
            value={form.investmentMultiple}
            onChange={handleChange}
            className="border border-gray-200 px-2 py-1 rounded"
          />
        </div>
      </div>

      {/* Row 5: Maturity + Min Investment */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-slate-700 text-[11px]">
            Maturity
          </label>
          <input
            name="maturity"
            placeholder="48 Months"
            value={form.maturity}
            onChange={handleChange}
            className="border border-gray-200 px-2 py-1 rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-slate-700 text-[11px]">
            Min. Investment
          </label>
          <input
            type="number"
            name="minInvestment"
            placeholder="100"
            value={form.minInvestment}
            onChange={handleChange}
            className="border border-gray-200 px-2 py-1 rounded"
          />
        </div>
      </div>

      {/* ----- CLEAR VISIBLE SUBMIT BUTTON ----- */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-2.5 bg-brandPink tracking-wide text-white text-xs font-semibold rounded shadow hover:bg-brandPink/90 transition"
        >
          {selected ? "Update Offering" : "Add Offering"}
        </button>
      </div>
    </form>
  );
};

export default OfferingForm;
