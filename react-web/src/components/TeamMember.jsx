import React from "react";

function TeamMember({ member }) {
  return (
    <div className="group bg-zinc-900 rounded-4xl p-6 pt-9 border border-white/10 shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden animate-fade-in">
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary-500 rounded-t-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="w-20 h-20 rounded-full bg-zinc-800 border-2 border-white/10 overflow-hidden mb-5 group-hover:scale-105 transition-transform duration-300">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center gap-1.5 mb-2">
        <span className="text-caption font-bold text-white bg-primary-500 px-2.5 py-0.5 rounded-md">
          {member.role}
        </span>
      </div>

      <h3 className="text-heading-md font-extrabold text-white mb-2">
        {member.name}
      </h3>
      <p className="text-body text-white/60 leading-relaxed mb-5 mt-auto whitespace-pre-wrap">
        {member.description}
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-6 mt-auto">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="text-caption font-medium text-white bg-white/10 px-3 py-1 rounded-md border border-white/10"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="w-full h-px bg-white/10 mb-4 mt-auto" />

      <a
        href={member.github}
        className="flex items-center gap-2.5 w-full text-caption text-white/50 px-3 py-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
      >
        🔗 {member.github}
      </a>
      <a
        href={`mailto:${member.email}`}
        className="flex items-center gap-2.5 w-full text-caption text-white/50 px-3 py-1.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors mt-1"
      >
        ✉️ {member.email}
      </a>
    </div>
  );
}

export default TeamMember;
