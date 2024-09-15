
import React from 'react';

interface ChangelogEntry {
  version: string;
  date: string;
  changes: { type: string; description: string }[];
}

const Changelog: React.FC<{ entries: ChangelogEntry[] }> = ({ entries }) => {
  return (
    <div className="mt-10 space-y-10 ">
      {entries.map((entry, index) => (
        <div key={index} className="p-6 glassmorphism rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">
            Version {entry.version} - {entry.date}
          </h2>
          <ul className="mt-4 list-disc list-inside text-white/80">
            {entry.changes.map((change, i) => (
              <li key={i}>
                {change.type} {change.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Changelog;
