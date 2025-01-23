"use client"
import { createCategory } from "@/actions/category";
import { useState } from "react";

export default function CreateCategoryButton() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  
  const handleSave = async (e) => {
    e.preventDefault();
    if (!name || !slug) {
      alert("Both fields are required!");
      return;
    }
    await createCategory({ name, slug });
    setName("");
    setSlug("");
    setModalOpen(false);
  };
  const onClose =(e)=>{
    e.preventDefault();
    setModalOpen(false)
  }
  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Create Category
      </button>
      {isModalOpen &&
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4 text-black">Create Category</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                Slug
              </label>
              <input
                type="text"
                id="slug"
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
}
