import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import OfferingForm from "../components/admin/OfferingForm.jsx";
import OfferingTable from "../components/admin/OfferingTable.jsx";
import NewsletterTable from "../components/admin/NewsletterTable.jsx";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [offerings, setOfferings] = useState([]);
  const [selected, setSelected] = useState(null);
  const [subs, setSubs] = useState([]);
  const [tab, setTab] = useState("offerings");
  const navigate = useNavigate();

  const fetchData = async () => {
    const [offRes, subRes] = await Promise.all([
      axios.get("/offerings"),
      axios.get("/newsletter")
    ]);
    setOfferings(offRes.data);
    setSubs(subRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (form) => {
    if (selected) {
      await axios.put(`/offerings/${selected._id}`, form);
    } else {
      await axios.post("/offerings", form);
    }
    setSelected(null);
    fetchData();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this offering?")) return;
    await axios.delete(`/offerings/${id}`);
    fetchData();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-lightBg">
      <header className="bg-white shadow flex justify-between items-center px-6 py-3">
        <h1 className="font-semibold text-lg">Admin Panel</h1>
        <div className="flex gap-3 items-center text-sm">
          <button
            onClick={() => setTab("offerings")}
            className={`px-3 py-1 rounded-full ${
              tab === "offerings" ? "bg-primary text-white" : "bg-slate-100"
            }`}
          >
            Offerings
          </button>
          <button
            onClick={() => setTab("newsletter")}
            className={`px-3 py-1 rounded-full ${
              tab === "newsletter" ? "bg-primary text-white" : "bg-slate-100"
            }`}
          >
            Newsletter
          </button>
          <button
            onClick={logout}
            className="px-3 py-1 rounded-full bg-red-500 text-white"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {tab === "offerings" && (
          <>
            <div className="bg-white rounded-2xl shadow p-4 mb-4">
              <h2 className="font-semibold mb-2 text-sm">
                {selected ? "Edit offering" : "Add new offering"}
              </h2>
              <OfferingForm onSubmit={handleSubmit} selected={selected} />
            </div>
            <div className="bg-white rounded-2xl shadow p-4">
              <h2 className="font-semibold mb-2 text-sm">All offerings</h2>
              <OfferingTable
                offerings={offerings}
                onEdit={setSelected}
                onDelete={handleDelete}
              />
            </div>
          </>
        )}

        {tab === "newsletter" && (
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="font-semibold mb-2 text-sm">
              Newsletter subscribers
            </h2>
            <NewsletterTable subs={subs} />
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
