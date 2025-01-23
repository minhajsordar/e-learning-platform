import Link from "next/link";
import { getLessonsByCategory } from "@/actions/lesson";
import CreateLessonButton from "@/components/CreateLessonButton";
export default async function Page({ searchParams }) {
  const categoryid = (await searchParams)?.category;
  const lessons = await getLessonsByCategory(categoryid);
  
  console.log({ lessons });
  return (
    <div className=" container mx-auto flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <div>Lesson List</div>
        <div>
          <CreateLessonButton categoryid={categoryid} />
        </div>
      </div>
      <div>
        {Array.isArray(lessons) &&
          lessons.map((lesson, index) => (
            <div key={lesson.slug + index} className="border border-gray-600 p-2">
              <Link href={`lessons/${lesson._id}`}>{lesson.name}</Link>
            </div>
          ))}
      </div>
    </div>
  );
}
