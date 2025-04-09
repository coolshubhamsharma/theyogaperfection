import { assets } from "../../assets/ClientInfo";
import { MdDelete } from "react-icons/md";

type Props = {
  BlogId: string;
  deleteBlog: (id: string) => void;
  author: string;
  authorImg?: string;
  title: string;
  date: string;
};

const BlogTableItem: React.FC<Props> = ({ deleteBlog, author, authorImg, title, date, BlogId }) => {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <tr className="bg-white border-b">
      <th scope="row" className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        <img width={40} height={40} src={authorImg || assets.upload_area} alt="" />
        {author}
      </th>
      <td className="px-6 py-4">
        {title || "No Title"}
      </td>
      <td className="px-6 py-4">
        {formattedDate}
      </td>
      <td onClick={() => deleteBlog(BlogId)} className="px-6 py-4 cursor-pointer text-red-500 hover:text-red-700">
      <MdDelete />
      </td>
    </tr>
  );
};

export default BlogTableItem;
