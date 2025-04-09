'use client';

import BlogTableItem from './BlogTableItem';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type Blog = {
  id: string;
  title: string;
  author: string;
  authorImg?: string;
  date: string;
};

const ShowBlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:8000/blog'); // ✅ fixed URL
      setBlogs(response.data);
    } catch (err) {
      toast.error("Failed to fetch blogs");
    }
  };

  const deleteBlog = async (BlogId: string) => {
    try {
      const response = await axios.delete('/api/blog', {
        params: { id: BlogId },
      });
      toast.success(response.data.message);
      fetchBlogs();
    } catch (err) {
      toast.error("Failed to delete blog");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-xl font-bold">All Blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Author name
              </th>
              <th scope="col" className="px-6 py-3">
                Blog Title
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, index) => (
              <BlogTableItem
                key={index}
                deleteBlog={deleteBlog}
                BlogId={item.id}
                title={item.title}
                author={item.author}
                authorImg={item.authorImg}
                date={item.date}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowBlogList;
