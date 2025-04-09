import React, { useState } from 'react';

type SubtitleData = {
  subtitle: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  image: File | null;
};

type FormData = {
  mainTitle: string;
  mainContent: string;
  mainImage: File | null;
  subtitles: SubtitleData[];
};

const BlogForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    mainTitle: '',
    mainContent: '',
    mainImage: null,
    subtitles: [],
  });

  const handleMainChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;

    if (target instanceof HTMLInputElement && target.type === 'file') {
      const file = target.files?.[0] || null;
      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubChange = (
    index: number,
    field: keyof SubtitleData,
    value: string | File | null
  ) => {
    const newSubtitles = [...formData.subtitles];
    newSubtitles[index] = {
      ...newSubtitles[index],
      [field]: value,
    };
    setFormData({ ...formData, subtitles: newSubtitles });
  };

  const addSubtitle = () => {
    setFormData((prev) => ({
      ...prev,
      subtitles: [
        ...prev.subtitles,
        {
          subtitle: '',
          paragraph1: '',
          paragraph2: '',
          paragraph3: '',
          image: null,
        },
      ],
    }));
  };

  const removeSubtitle = (index: number) => {
    const newSubtitles = formData.subtitles.filter((_, i) => i !== index);
    setFormData({ ...formData, subtitles: newSubtitles });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic (e.g., FormData + POST request)
    console.log('Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold">Create Blog</h2>

      {/* Main Title */}
      <div>
        <label className="block font-semibold mb-1">Main Title</label>
        <input
          type="text"
          name="mainTitle"
          value={formData.mainTitle}
          onChange={handleMainChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      {/* Main Content */}
      <div>
        <label className="block font-semibold mb-1">Main Content</label>
        <textarea
          name="mainContent"
          value={formData.mainContent}
          onChange={handleMainChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      {/* Main Image */}
      <div>
        <label className="block font-semibold mb-1">Main Image</label>
        <input
          type="file"
          name="mainImage"
          onChange={handleMainChange}
          className="w-full"
        />
      </div>

      {/* Subtitles */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Subtitles</h3>
          <button
            type="button"
            onClick={addSubtitle}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            + Add Subtitle
          </button>
        </div>

        {formData.subtitles.map((subtitle, idx) => (
          <div
            key={idx}
            className="border rounded p-4 mb-4 bg-gray-50 space-y-3 relative"
          >
            <button
              type="button"
              onClick={() => removeSubtitle(idx)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm"
            >
              ✕
            </button>

            <div>
              <label className="block font-semibold mb-1">Subtitle</label>
              <input
                type="text"
                value={subtitle.subtitle}
                onChange={(e) =>
                  handleSubChange(idx, 'subtitle', e.target.value)
                }
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {[1, 2, 3].map((p) => (
              <div key={p}>
                <label className="block font-semibold mb-1">
                  Paragraph {p}
                </label>
                <textarea
                  value={(subtitle as any)[`paragraph${p}`]}
                  onChange={(e) =>
                    handleSubChange(idx, `paragraph${p}` as any, e.target.value)
                  }
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            ))}

            <div>
              <label className="block font-semibold mb-1">Image</label>
              <input
                type="file"
                onChange={(e) =>
                  handleSubChange(
                    idx,
                    'image',
                    e.target.files?.[0] || null
                  )
                }
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Submit Blog
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
