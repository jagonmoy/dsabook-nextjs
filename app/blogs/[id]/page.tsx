import { PencilIcon} from "@heroicons/react/24/outline";
import DeleteModal from "@components/DeleteModal";

export default function Page({ params }: { params: { id: string } }) {
  console.log(params.id);
  return (
    <div>
      <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">asdasdasd</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mb-4">asdasdasd
      </p>
      <DeleteModal/>
      <button>
        <PencilIcon className="h-8 w-8 text-black hover:text-orange-500" />
      </button>
    </div>
  );
}