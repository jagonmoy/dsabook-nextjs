import { PencilIcon} from "@heroicons/react/24/outline";
import DeleteModal from "@components/DeleteModal";
import { getBlog } from "@services/blogs";

export default async function BlogView({ params }: { params: { id: string } }) {
  const blogID = params.id;
  const blog = await getBlog(blogID);
  return (
    <div>
      <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">{blog.blogHeadline}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mb-4">{blog.blogDescription}
      </p>
      <DeleteModal/>
      <button>
        <PencilIcon className="h-8 w-8 text-black hover:text-orange-500" />
      </button>
    </div>
  );
}