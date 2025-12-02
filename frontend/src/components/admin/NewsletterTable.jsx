import React from "react";


const NewsletterTable = ({ subs }) => (
  <table className="w-full text-xs border">
    <thead className="bg-slate-50">
      <tr>
        <th className="p-2 border">Email</th>
        <th className="p-2 border">Subscribed at</th>
      </tr>
    </thead>
    <tbody>
      {subs.map((s) => (
        <tr key={s._id} className="hover:bg-slate-50">
          <td className="p-2 border">{s.email}</td>
          <td className="p-2 border">
            {new Date(s.createdAt).toLocaleString()}
          </td>
        </tr>
      ))}
      {subs.length === 0 && (
        <tr>
          <td className="p-2 border text-center" colSpan={2}>
            No subscribers yet
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default NewsletterTable;
