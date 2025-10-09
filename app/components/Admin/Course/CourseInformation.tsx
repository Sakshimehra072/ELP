import { styles } from '@/app/styles/style';
import React, { FC, useState } from 'react'
import Image from "next/image";


type CourseInfo = {
  name: string;
  description: string;
  price: number | string;
  estimatedPrice?: number | string;
  tags: string;
  level: string;
  demoUrl: string;
  thumbnail?: string | ArrayBuffer | null;
};


type Props = {
  courseInfo: CourseInfo;
  setCourseInfo: (courseInfo: CourseInfo) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseInformation: FC<Props> = ({
  courseInfo,
  setCourseInfo,
  active,
  setActive,
}) => {

  const [dragging, setDragging] = useState(false);
  // const [categories, setCategories] = useState([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setCourseInfo({ ...courseInfo, thumbnail: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault(); 
    setDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setCourseInfo({ ...courseInfo,thumbnail : reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setActive(active + 1);
  };


  return (
    <div className="w-[80%] m-auto mt-24" >
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="" className={`${styles.label}`}>
            Course Name
          </label>
          <input
            type="name"
            name=""
            required
            value={courseInfo.name}
            // onChange={(e: any) => {
            //   setCourseInfo({ ...courseInfo, name: e.target.value });
            // }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCourseInfo({ ...courseInfo, name: e.target.value })
}
            id="name"
            placeholder="MERN stack LMS platform with next 13"
            className={`${styles.input}`}
          />
        </div>
        <br />
        <div className="mb-5">
          <label htmlFor="" className={`${styles.label}`}>
            Course Description
          </label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={8}
            placeholder="Write something amazing..."
            className={`${styles.input} !h-min !py-2`}
            value={courseInfo.description}
            // onChange={(e: any) =>
            //   setCourseInfo({ ...courseInfo, description: e.target.value })
            // }
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setCourseInfo({ ...courseInfo, description: e.target.value })
              }

          ></textarea>
        </div>
        <br />
        <div className="w-full flex justify-between">
          <div className="w-[48%]">
            <label htmlFor="" className={`${styles.label}`}>
              Course Price
            </label>
            <input
              type="number"
              name=""
              required
              value={courseInfo.price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCourseInfo({ ...courseInfo, price: e.target.value });
              }}
              id="price"
              placeholder="29"
              className={`${styles.input}`}
            />
          </div>
          <div className="w-[48%]">
            <label htmlFor="" className={`${styles.label}`}>
              Estimated Price (optional)
            </label>
            <input
              type="number"
              name=""
              required
              value={courseInfo.estimatedPrice}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCourseInfo({
                  ...courseInfo,
                  estimatedPrice: e.target.value,
                });
              }}
              id="price"
              placeholder="79"
              className={`${styles.input}`}
            />
          </div>
        </div>

        <br />
        <div>
          <label htmlFor="" className={`${styles.label}`}>
            Course Tags
          </label>
          <input
            type="text"
            name=""
            required
            value={courseInfo.tags}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setCourseInfo({ ...courseInfo, tags: e.target.value });
            }}
            id="tags"
            placeholder="MERN, Next 13, Socket io, Tailwind css, LMS"
            className={`${styles.input}`}
          />
        </div>
        <br />
        <div className="w-full flex justify-between">
          <div className="w-[48%]">
            <label htmlFor="" className={`${styles.label}`}>
              Course Level
            </label>
            <input
              type="text"
              name=""
              required
              value={courseInfo.level}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCourseInfo({ ...courseInfo, level: e.target.value });
              }}
              id="level"
              placeholder="Beginner/Intermediate/Expert"
              className={`${styles.input}`}
            />
          </div>
          <div className="w-[48%]">
            <label htmlFor="" className={`${styles.label}`}>
              Demo URL
            </label>
            <input
              type="text"
              name=""
              required
              value={courseInfo.demoUrl}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCourseInfo({
                  ...courseInfo,
                  demoUrl: e.target.value,
                });
              }}
              id="demoUrl"
              placeholder="http://"
              className={`${styles.input}`}
            />
          </div>
        </div>

        <br />
        <div className="w-full">
          <input
            type="file"
            accept="iamge/*"
            id="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            className={`w-full min-h-[10vh] dark:border-white border-[#00000026] p-3 border flex items-center justify-center ${dragging ? "bg-blue-500" : "bg-transparent"
              }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {/* {
              courseInfo.thumbnail ? (
                <Image
                src={courseInfo.thumbnail} 
                alt="image not available"
                width={500}
                height={300}
                className="max-h-full w-full object-cover"
                />
              ) : (
                <span className="text-black dark:text-white">
                  Drag and drop your thumbnail here or click to browse
                </span>
              )
            } */}

            {courseInfo.thumbnail ? (
  typeof courseInfo.thumbnail === "string" ? (
    <Image
      src={courseInfo.thumbnail}
      alt="Course Thumbnail"
      width={500}
      height={300}
      className="max-h-full w-full object-cover"
    />
  ) : null
) : (
  <span className="text-black dark:text-white">
    Drag and drop your thumbnail here or click to browse
  </span>
)}
          </label>
        </div>

        <br />
        <div className="w-full flex items-center justify-end">
          <input
            type="submit"
            value="Next"
            className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          />
        </div>
        <br />
        <br />

      </form>

    </div>
  )
}

export default CourseInformation