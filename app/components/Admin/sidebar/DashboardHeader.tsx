"use client";
import React from "react";

const DashboardPage = () => {
  // Example static data (can be fetched later from API/DB)
  const stats = {
    lessonsCompleted: 24,
    totalLessons: 40,
    quizzesTaken: 12,
    accuracy: "85%",
    streak: 7, // days
  };

  const recentLessons = [
    { title: "Vocabulary: Travel", status: "Completed", score: "90%" },
    { title: "Grammar: Past Tense", status: "Completed", score: "80%" },
    { title: "Listening: Daily Conversations", status: "In Progress", score: "-" },
  ];

  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        English Learning Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Lessons Completed</h3>
          <p className="text-2xl font-bold">{stats.lessonsCompleted}/{stats.totalLessons}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Quizzes Taken</h3>
          <p className="text-2xl font-bold">{stats.quizzesTaken}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Accuracy</h3>
          <p className="text-2xl font-bold">{stats.accuracy}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Streak</h3>
          <p className="text-2xl font-bold">{stats.streak} days 🔥</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Level</h3>
          <p className="text-2xl font-bold">Intermediate</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Overall Progress</h2>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${(stats.lessonsCompleted / stats.totalLessons) * 100}%` }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {stats.lessonsCompleted} of {stats.totalLessons} lessons completed
        </p>
      </div>

      {/* Recent Lessons */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Lessons</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b border-gray-300 dark:border-gray-700">
              <th className="py-2">Lesson</th>
              <th className="py-2">Status</th>
              <th className="py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {recentLessons.map((lesson, idx) => (
              <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-2">{lesson.title}</td>
                <td className="py-2">{lesson.status}</td>
                <td className="py-2">{lesson.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
