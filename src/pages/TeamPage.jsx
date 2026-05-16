import React from "react";
import Team from "../components/Team";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";

const TeamPage = () => {
  return (
    <>
      <div className="bg-gray-50 pt-20 dark:bg-gray-900">
        
        {/* HEADER */}
        <PageHeader title="Team"/>
        <Team showHeader={false} />
         <CTA />
      </div>
    </>
  );
};

export default TeamPage;
