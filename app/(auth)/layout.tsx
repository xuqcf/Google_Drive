import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand p-10">
        <div>
          <img src="/favicon.ico" alt="logo" width={16} className="h-auto" />

          <div className="space-y-5 text-white">
            <h1 className="h1"> Manage your files the best way </h1>
            <p className="body-1">
              This is a place where you can store all your documents
            </p>
          </div>
        </div>
      </section>
      {children}
    </div>
  );
};

export default layout;
