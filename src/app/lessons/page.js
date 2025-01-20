import Link from "next/link";
import { getLessonsByCategory } from "@/actions/lesson";
import CreateLessonButton from "@/components/CreateLessonButton";
export default async function Page({ searchParams }) {
    const categoryid = (await searchParams)?.category
    const lessons = await getLessonsByCategory(categoryid);

    return (
        <div className=" container mx-auto">
            <div className="flex justify-between items-center">
                <div>Lesson List</div>
                <div><CreateLessonButton categoryid={categoryid} /></div>
            </div>
            {
                Array.isArray(lessons) && lessons.map((lesson, index) => (
                    <div key={lesson.slug + index}>
                        <Link href={`lessons/${lesson._id}`}>{lesson.name}</Link>
                    </div>
                ))
            }
        </div>
    );
}
