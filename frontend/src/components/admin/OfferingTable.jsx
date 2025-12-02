import React from "react";

const OfferingTable = ({ offerings, onEdit, onDelete }) => (
  <table className="w-full text-xs border">
    <thead className="bg-slate-50">
      <tr>
        <th className="p-2 border">Title</th>
        <th className="p-2 border">Location</th>
        <th className="p-2 border">Tag</th>
        <th className="p-2 border">Min Investment</th>
        <th className="p-2 border">Actions</th>
      </tr>
    </thead>
    <tbody>
      {offerings.map((o) => (
        <tr key={o._id} className="hover:bg-slate-50">
          <td className="p-2 border">{o.title}</td>
          <td className="p-2 border">{o.location}</td>
          <td className="p-2 border">{o.tag}</td>
          <td className="p-2 border">₹{o.minInvestment}</td>
          <td className="p-2 border space-x-2">
            <button
              onClick={() => onEdit(o)}
              className="px-2 py-1 rounded bg-secondary text-white"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(o._id)}
              className="px-2 py-1 rounded bg-red-500 text-white"
            >
              Del
            </button>
          </td>
        </tr>
      ))}
      {offerings.length === 0 && (
        <tr>
          <td className="p-2 border text-center" colSpan={5}>
            No offerings yet
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default OfferingTable;
