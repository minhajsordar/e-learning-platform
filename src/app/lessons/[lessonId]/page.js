import { getLessonById } from "@/actions/lesson";
import DeleteLessonButton from "@/components/DeleteLesson";
import EditLessonButton from "@/components/EditLessonButton";
import MarkdownText from "@/components/MarkDownText";

export default async function Page({ params }) {
  const lessonId = params?.lessonId;
  const lesson = await getLessonById(lessonId);
  console.log({ lesson });

  return (
    <div className="container mx-auto flex flex-col gap-10 w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl capitalize">{lesson?.name}</h1>
        <div className="flex gap-4">
          <EditLessonButton lesson={lesson} categoryid={lesson?.category} />
          <DeleteLessonButton lesson={lesson} />
        </div>
      </div>
      <MarkdownText value={lesson?.content} />
    </div>
  );
}
