<<<<<<< HEAD
import { styles } from "@/app/styles/style";
import React, { FC } from "react";
import toast from "react-hot-toast";
import { MdAddCircleOutline } from "react-icons/md";
=======
import { styles } from '@/app/styles/style';
import React, { FC } from 'react'
import toast from 'react-hot-toast';
import { IoMdAddCircleOutline } from 'react-icons/io';
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef

type Props = {
  benefits: { title: string }[];
  setBenefits: (benefits: { title: string }[]) => void;
  prerequisites: { title: string }[];
  setPrerequisites: (prerequisites: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
<<<<<<< HEAD
};

const CourseData: FC<Props> = ({
=======
}

const CourseData: FC<Props>= ({
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
  benefits,
  setBenefits,
  prerequisites,
  setPrerequisites,
  active,
  setActive,
}) => {
<<<<<<< HEAD
=======

>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
  const handleBenefitChange = (index: number, value: any) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index] = { ...updatedBenefits[index], title: value }; // Buat salinan objek dan ubah propertinya
    setBenefits(updatedBenefits);
  };

  const handlePrerequisiteChange = (index: number, value: any) => {
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites[index] = {
      ...updatedPrerequisites[index],
      title: value,
    };
    setPrerequisites(updatedPrerequisites);
  };

  const handleAddBenefits = () => {
    setBenefits([...benefits, { title: "" }]);
  };

  const handleAddPrerequisites = () => {
    setPrerequisites([...prerequisites, { title: "" }]);
  };

  const prevButton = () => {
    setActive(active - 1);
  };
  const handleOptions = () => {
<<<<<<< HEAD
    if (
=======
    if ( 
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
      benefits[benefits.length - 1]?.title !== "" &&
      prerequisites[prerequisites.length - 1]?.title !== ""
    ) {
      setActive(active + 1);
    } else {
      toast.error("Please fill the fields for go to next!");
    }
  };

<<<<<<< HEAD
  return (
    <div className="w-[80%] m-auto mt-24 block">
      <div>
        <label htmlFor="email" className={`${styles.label} text-[20px]`}>
          What are the benefits for starting this course
        </label>
        <br />
        {benefits.map((benefit: any, index: number) => (
          <input
            type="text"
            key={index}
            name="benefits"
            placeholder="You will be able to build a full stack LMS Platform"
            required
            className={`${styles.input} my-2`}
            value={benefit.title}
            onChange={(e) => handleBenefitChange(index, e.target.value)}
          />
        ))}
        <MdAddCircleOutline
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
          onClick={handleAddBenefits}
        />
=======

  return (
    <div className="w-[80%] m-auto mt-24 block">
      <div>
      <label htmlFor="email" className={`${styles.label} text-[20px]`}>
          What are the benefits for starting this course
        </label>
        <br />

        {
          benefits.map((benefit: any, index: number) => (
            <input
              type="text"
              key={index}
              name="benefits"
              placeholder="You will be able to build a full stack LMS Platform"
              required
              className={`${styles.input} my-2`}
              value={benefit.title}
              onChange={(e) => handleBenefitChange(index, e.target.value)}
            />
          ))
        }
        <IoMdAddCircleOutline
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
          onClick={handleAddBenefits}
        />

>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
      </div>
      <br />
      <div>
        <label htmlFor="email" className={`${styles.label} text-[20px]`}>
          What are the prerequisites for starting this course
        </label>
        <br />
        {prerequisites.map((prerequisite: any, index: number) => (
          <input
            type="text"
            key={index}
            name="prerequisites"
            placeholder="You need basic knowledge of MERN stack"
            required
            className={`${styles.input} my-2`}
            value={prerequisite.title}
            onChange={(e) => handlePrerequisiteChange(index, e.target.value)}
          />
        ))}
<<<<<<< HEAD
        <MdAddCircleOutline
=======
        <IoMdAddCircleOutline
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
          onClick={handleAddPrerequisites}
        />
      </div>
<<<<<<< HEAD
=======


>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
      <div className="w-full flex items-center justify-between">
        <div
          className="w-full 800px:w-[180px] flex justify-center items-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => prevButton()}
        >
          Prev
        </div>
        <div
          className="w-full 800px:w-[180px] flex justify-center items-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => handleOptions()}
        >
          Next
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
};

export default CourseData;
=======
  )
}

export default CourseData
>>>>>>> bc4c904da31581c701dce1b672f7afd58c3668ef
