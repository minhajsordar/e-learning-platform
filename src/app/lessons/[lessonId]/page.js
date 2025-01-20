import Link from "next/link";
import { getLessonById } from "@/actions/lesson";
import CreateLessonButton from "@/components/CreateLessonButton";
export default async function Page({ params }) {
    const lessonId = (await params)?.lessonId
    const lesson = await getLessonById(lessonId);

    return (
        <div className=" container mx-auto">

            {
                lesson?.content
            }
        </div>
    );
}
