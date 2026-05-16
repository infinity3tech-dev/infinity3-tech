import { useParams } from "react-router-dom";

const TopicDetails = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-10">
      <h1 className="text-5xl font-bold mb-6">
        {slug.replace(/-/g, " ")}
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-400">
        Here you can teach complete topic step by step.
      </p>
    </div>
  );
};

export default TopicDetails;