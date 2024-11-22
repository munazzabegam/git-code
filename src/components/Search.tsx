import React, { useState } from 'react';
import Fuse from 'fuse.js';

interface Command {
  name: string;
  description: string;
}

const commands: Command[] = [
  { name: 'git init', description: 'Initialize a new Git repository' },
  { name: 'git clone', description: 'Clone an existing repository' },
  { name: 'git status', description: 'Show the working tree status' },
];

const fuse = new Fuse(commands, { keys: ['name', 'description'] });

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const results = query ? fuse.search(query) : [];

  return (
    <div>
      <input
        type="text"
        placeholder="Search Git commands..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '300px', margin: '20px 0' }}
      />
      <ul>
        {results.map((result) => (
          <li key={result.item.name}>
            <strong>{result.item.name}</strong>: {result.item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
