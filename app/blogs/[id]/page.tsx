'use client'
import { useGetBlogQuery } from "@redux/slices/apiSlice";
import { Loading } from "@components/Loading";
import { PencilIcon,TrashIcon } from "@heroicons/react/24/outline";
import DeleteModal from "@components/DeleteModal";

export default function Page({ params }: { params: { id: string } }) {
  const { data: blog, isError, isSuccess, isLoading } = useGetBlogQuery(params.id);
  if (isLoading) return <Loading />
  return (
    <div>
      <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">{blog.blogHeadline}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mb-4">{blog.blogDescription}
      </p>
      {/* <button>
        <TrashIcon className="h-8 w-8 text-black mr-4 hover:text-orange-500" />
      </button> */}
      <DeleteModal/>
      <button>
        <PencilIcon className="h-8 w-8 text-black hover:text-orange-500" />
      </button>
    </div>
  );
}