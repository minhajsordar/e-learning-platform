"use client";

import { deleteLesson } from "@/actions/lesson";
import { useRouter } from "next/navigation";

export default function DeleteLessonButton({ lesson }) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this lesson?"
    );
    if (!confirmDelete) return;

    const response = await deleteLesson(lesson._id);

    if (response.error) {
      alert("Error deleting lesson: " + response.msg);
    } else {
      alert("Lesson deleted successfully!");
      router.push(`/lessons?category=${lesson.category}`);
    }
  };
  return (
    <button
      onClick={handleDelete}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Delete Lesson
    </button>
  );
}
