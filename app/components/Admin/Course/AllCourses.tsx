// "use client"; 
// import React, { useEffect, useState, FC } from "react";
// import { AiOutlineDelete } from "react-icons/ai";
// import { Box, Button, Modal } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { useTheme } from "next-themes";
// import { FiEdit2 } from "react-icons/fi";
// import toast from "react-hot-toast";
// import Link from "next/link";
// import { useDeleteCourseMutation, useGetAllCoursesQuery } from "@/redux/features/courses/coursesApi";
// import Loader from "../../Loader/Loader";
// import { styles } from "@/app/styles/style";
// import {format} from "timeago.js"
// import { GridRenderCellParams } from '@mui/x-data-grid';

// interface Course {
//   _id: string;
//   name: string;
//   purchased: number;
//   ratings: number;
//   createdAt: string;
// }


// const AllCourses: FC = () => {
//   const { theme } = useTheme();
//   const [open, setOpen] = useState(false);
//   const [courseId, setCourseId] = useState("");
//   const { isLoading, data, refetch } = useGetAllCoursesQuery(
//     {},
//     { refetchOnMountOrArgChange: true }
//   );
//   const [deleteCourse, { isSuccess, error: errorDelete }] =
//     useDeleteCourseMutation({});

//   const columns = [
//     { field: "id", headerName: "ID", flex: 0.5 },
//     { field: "title", headerName: "Course Title", flex: 1 },
//     { field: "ratings", headerName: "Ratings", flex: 0.5 },
//     { field: "purchased", headerName: "Purchased", flex: 0.5 },
//     { field: "created_at", headerName: "Created At", flex: 0.5 },
//     {
//       field: "  ",
//       headerName: "Edit",
//       flex: 0.2,
//       renderCell: (params: GridRenderCellParams) => {
//         return (
//           <>
//           <>
//           <>
//             <Link
//               href={`/admin/edit-course/${params.row.id}`}
//               style={{ display: "block", marginTop: "16px" }}
//               onClick={(e) => e.stopPropagation()} // ✅ Prevent row selection
//             >
//               <FiEdit2 className="dark:text-white text-black" size={20} />
//             </Link>
//           </>
//         );
//       },
//     },
//     {
//       field: " ",
//       headerName: "Delete",
//       flex: 0.2,
//       renderCell: (params: GridRenderCellParams) => {
//         return (
//           <>
//             <Button
//               onClick={(e) => {
//                 e.stopPropagation(); // ✅ Prevent row selection
//                 setOpen(!open);
//                 setCourseId(params.row.id);
//               }}
//             >
//               <AiOutlineDelete
//                 className="dark:text-white text-black"
//                 size={20}
//               />
//             </Button>
//           </>
//         );
//       },
//     },
//   ];

//   {/* const rows: any = [
//   {
//       id : "1234",
//       title : "React",
//       purchased : "30",
//       ratings: "5",
//       created_at : "12/12/12"
//     }
//   ]; */}

//   const rows : Course= [];

//   // { 
//   //   data && data.courses.forEach((item: Course) => {
//   //       rows.push({
//   //         id: item._id,
//   //         title: item.name,
//   //         purchased: item.purchased,
//   //         ratings: item.ratings,
//   //         created_at: format(item.createdAt),
//   //         // created_at: format(item.createdAt), // Format properly
//   //       });
//   //     });
//   // }

//   if (data) {
//   data.courses.forEach((item: Course) => {
//     rows.push({
//       id: item._id,
//       title: item.name,
//       purchased: item.purchased,
//       ratings: item.ratings,
//       created_at: format(item.createdAt),
//     });
//   });
// }

//   useEffect(() => {
//     if (isSuccess) {
//       refetch();
//       toast.success("Course deleted successfully");
//       setOpen(false);
//     }
//     if (errorDelete) {
//       if ("data" in errorDelete) {
//         const errorMessage = errorDelete as any;
//         toast.error(errorMessage.data.message);
//       }
//     }
//   }, [isSuccess, errorDelete, refetch]);

//   const handleDelete = async () => {
//     const id = courseId;
//     await deleteCourse(id);
//   };

//   return (
//     <div className="mt-[120px]">
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <Box m="20px">
//           <Box
//             m="40px 0 0 0"
//             height="80vh"
//             sx={{
//               "& .MuiDataGrid-root": {
//                 border: "none",
//                 outline: "none",
//               },
//               "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
//                 color: theme === "dark" ? "#fff" : "#000",
//               },
//               "& .MuiDataGrid-sortIcon": {
//                 color: theme === "dark" ? "#fff" : "#000",
//               },
//               "& .MuiDataGrid-row": {
//                 color: theme === "dark" ? "#fff" : "#000",
//                 borderBottom:
//                   theme === "dark"
//                     ? "1px solid #ffffff30!important"
//                     : "1px solid #ccc!important",
//               },
//               "& .MuiTablePagination-root": {
//                 color: theme === "dark" ? "#fff" : "#000",
//               },
//               "& .MuiDataGrid-cell": {
//                 borderBottom: "none",
//               },
//               "& .name-column-cell": {
//                 color: theme === "dark" ? "#fff" : "#000",
//               },
//               "&.MuiDataGrid-root .MuiDataGrid-columnHeaders": {
//                 //   color: theme === "dark" ? "#fff" : "#000",
//                 borderBottom: "none",
//                 //   backgroundColor: theme === "dark" ? "#3e4396" : "#a4a9fc",
//                 //   backgroundColor: "#a4a9fc",
//               },
//               "& .MuiDataGrid-virtualScroller": {
//                 backgroundColor: theme === "dark" ? "#1f2a40" : "#f2f0f0",
//               },
//               "& .MuiDataGrid-footerContainer": {
//                 color: theme === "dark" ? "#fff" : "#000",
//                 borderTop: "none",
//                 backgroundColor: theme === "dark" ? "#3e4396" : "#a4a9fc",
//               },
//               "& .MuiCheckbox-root": {
//                 color:
//                   theme === "dark" ? `#b7ebde !important` : `#000 !important`,
//               },
//               "& .MuiDataGrid-toolbarContainer .MuiButton-next": {
//                 color: `#fff !important`,
//               },
//             }}
//           >
//             <DataGrid checkboxSelection rows={rows} columns={columns} />
//           </Box>
//           {open && (
//             <Modal
//               open={open} 
//               onClose={() => setOpen(!open)}
//               aria-labelledby="modal-modal-title"
//               aria-describedby="modal-modal-description"
//             >
//               <Box className="absolute top-[50%] left-[50%] -translatex-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
//                 <h1 className={`${styles.title}`}>
//                   Are you sure you want to delete this course?
//                 </h1>

//                 <div className="flex w-full items-center justify-between mb-6 mt-4">
//                   <div
//                     className={`${styles.button} !w-[120px] h-[30px] bg-[#57c7a3]`}
//                     onClick={() => setOpen(!open)}
//                   >
//                     Cancel
//                   </div>
//                   <div
//                     className={`${styles.button} !w-[120px] h-[30px] bg-[#d63f3f]`}
//                     onClick={handleDelete}
//                   >
//                     Delete
//                   </div>
//                 </div>
//               </Box>
//             </Modal>
//           )}
//         </Box>
//       )}
//     </div>
//   );
// };

// export default AllCourses;





"use client";
import React, { useEffect, useState, FC } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Box, Button, Modal } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useTheme } from "next-themes";
import { FiEdit2 } from "react-icons/fi";
import toast from "react-hot-toast";
import Link from "next/link";
import {
  useDeleteCourseMutation,
  useGetAllCoursesQuery,
} from "@/redux/features/courses/coursesApi";
import Loader from "../../Loader/Loader";
import { styles } from "@/app/styles/style";
import { format } from "timeago.js";

interface Course {
  _id: string;
  name: string;
  purchased: number;
  ratings: number;
  createdAt: string;
}
interface Row {
  id: string;
  title: string;
  purchased: number;
  ratings: number;
  created_at: string;
}

const AllCourses: FC = () => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [courseId, setCourseId] = useState("");
  const { isLoading, data, refetch } = useGetAllCoursesQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  const [deleteCourse, { isSuccess, error: errorDelete }] =
    useDeleteCourseMutation({});

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "title", headerName: "Course Title", flex: 1 },
    { field: "ratings", headerName: "Ratings", flex: 0.5 },
    { field: "purchased", headerName: "Purchased", flex: 0.5 },
    { field: "created_at", headerName: "Created At", flex: 0.5 },
    {
      field: "edit",
      headerName: "Edit",
      flex: 0.2,
      renderCell: (params: GridRenderCellParams) => (
        <Link
          href={`/admin/edit-course/${params.row.id}`}
          style={{ display: "block", marginTop: "16px" }}
          onClick={(e) => e.stopPropagation()} // ✅ Prevent row selection
        >
          <FiEdit2 className="dark:text-white text-black" size={20} />
        </Link>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 0.2,
      renderCell: (params: GridRenderCellParams) => (
        <Button
          onClick={(e) => {
            e.stopPropagation(); // ✅ Prevent row selection
            setOpen(true);
            setCourseId(params.row.id);
          }}
        >
          <AiOutlineDelete className="dark:text-white text-black" size={20} />
        </Button>
      ),
    },
  ];

  // ✅ FIXED: rows should be array, not a single Course
  // const rows: any[] = [];
  const rows: Row[] = [];


  if (data) {
    data.courses.forEach((item: Course) => {
      rows.push({
        id: item._id,
        title: item.name,
        purchased: item.purchased,
        ratings: item.ratings,
        created_at: format(item.createdAt),
      });
    });
  }

  // useEffect(() => {
  //   if (isSuccess) {
  //     refetch();
  //     toast.success("Course deleted successfully");
  //     setOpen(false);
  //   }
  //   if (errorDelete) {
  //     if ("data" in errorDelete) {
  //       const errorMessage = errorDelete as any;
  //       toast.error(errorMessage.data.message);
  //     }
  //   }
  // }, [isSuccess, errorDelete, refetch]);

  interface ErrorResponse {
  data?: {
    message: string;
  };
}

  useEffect(() => {
  if (isSuccess) {
    refetch();
    toast.success("Course deleted successfully");
    setOpen(false);
  }
  if (errorDelete) {
    const err = errorDelete as ErrorResponse;
    if (err.data?.message) {
      toast.error(err.data.message);
    }
  }
}, [isSuccess, errorDelete, refetch]);

  const handleDelete = async () => {
    const id = courseId;
    await deleteCourse(id);
  };

  return (
    <div className="mt-[120px]">
      {isLoading ? (
        <Loader />
      ) : (
        <Box m="20px">
          <Box
            m="40px 0 0 0"
            height="80vh"
            sx={{
              "& .MuiDataGrid-root": { border: "none", outline: "none" },
              "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-sortIcon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-row": {
                color: theme === "dark" ? "#fff" : "#000",
                borderBottom:
                  theme === "dark"
                    ? "1px solid #ffffff30!important"
                    : "1px solid #ccc!important",
              },
              "& .MuiTablePagination-root": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-cell": { borderBottom: "none" },
              "& .name-column-cell": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "&.MuiDataGrid-root .MuiDataGrid-columnHeaders": {
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: theme === "dark" ? "#1f2a40" : "#f2f0f0",
              },
              "& .MuiDataGrid-footerContainer": {
                color: theme === "dark" ? "#fff" : "#000",
                borderTop: "none",
                backgroundColor: theme === "dark" ? "#3e4396" : "#a4a9fc",
              },
              "& .MuiCheckbox-root": {
                color:
                  theme === "dark" ? `#b7ebde !important` : `#000 !important`,
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-next": {
                color: `#fff !important`,
              },
            }}
          >
            <DataGrid checkboxSelection rows={rows} columns={columns} />
          </Box>

          {/* ✅ Modal for delete confirmation */}
          {open && (
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
                <h1 className={`${styles.title}`}>
                  Are you sure you want to delete this course?
                </h1>

                <div className="flex w-full items-center justify-between mb-6 mt-4">
                  <div
                    className={`${styles.button} !w-[120px] h-[30px] bg-[#57c7a3]`}
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </div>
                  <div
                    className={`${styles.button} !w-[120px] h-[30px] bg-[#d63f3f]`}
                    onClick={handleDelete}
                  >
                    Delete
                  </div>
                </div>
              </Box>
            </Modal>
          )}
        </Box>
      )}
    </div>
  );
};

export default AllCourses;
