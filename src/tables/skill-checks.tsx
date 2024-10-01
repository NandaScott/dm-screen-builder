const data = {
  strength: ['Athletics'],
  dexterity: ['Acrobatics', 'Sleight of Hand', 'Stealth'],
  intelligence: ['Arcana', 'History', 'Investigation', 'Nature', 'Religion'],
  wisdom: ['Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival'],
  charisma: ['Deception', 'Intimidation', 'Performance', 'Persuasion'],
};

export default function SkillChecks() {
  return (
    <div className='flex flex-col gap-4'>
      {Object.entries(data).map(([cat, skills]) => (
        <div key={cat} className='divide-y border border-black divide-black'>
          <div className='capitalize p-1 px-4 font-oswald border-b border-black'>
            {cat}
          </div>
          {skills.map((skill) => (
            <div key={skill} className='p-1 px-4 pl-8 font-arial'>
              {skill}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
