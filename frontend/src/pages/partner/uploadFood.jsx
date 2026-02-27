



import { useContext, useEffect, useState } from "react";
import api from "../../api/axios";
import { AuthContext } from "../../context/AuthContext";

export default function UploadFood() {
  const { role, loading } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (!loading && role !== "partner") {
      alert("Only food partners can upload food");
      window.location.href = "/partner/login";
    }
  }, [role, loading]);

  // const handleUpload = async () => {
  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("description", description);
  //   formData.append("video", video);

  //   try {
  //     await api.post("/food", formData, {
  //       headers: { "Content-Type": "multipart/form-data" }
  //     });
  //     alert("Food uploaded");
  //   } catch (err) {
  //     alert(err.response?.data?.message || "Upload failed");
  //   }
  // };

  const handleUpload = async () => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("video", video);

  try {
    await api.post("/food", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    });

    alert("Food uploaded");
  } catch (err) {
    alert(err.response?.data?.message || "Upload failed");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 p-4">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/30">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow-lg">
          🍔 Upload Food Reel
        </h2>

        {/* Food Name */}
        <input
          type="text"
          placeholder="Food name"
          onChange={e => setName(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white transition"
        />

        {/* Description */}
        <input
          type="text"
          placeholder="Description"
          onChange={e => setDescription(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white transition"
        />

        {/* File Upload */}
        <label className="block mb-4">
          <span className="text-white text-sm mb-1 block">Upload food video</span>
          <input
            type="file"
            onChange={e => setVideo(e.target.files[0])}
            className="w-full text-white file:mr-4 file:py-2 file:px-4
              file:rounded-xl file:border-0
              file:bg-white/80 file:text-black
              hover:file:bg-white transition cursor-pointer"
          />
        </label>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="w-full py-3 rounded-xl font-semibold text-lg text-white
          bg-gradient-to-r from-yellow-400 to-orange-500
          hover:scale-105 hover:shadow-xl
          transition transform duration-300"
        >
          🚀 Upload Food
        </button>

      </div>
    </div>
  );
}
