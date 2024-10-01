export default function Skills(){
  return (
    <section className="bg-home py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h1 className="text-white font-mono pb-10 text-2xl font-bold">Programming Skills</h1>
            {renderSkill("C", 75)}
            {renderSkill("Java", 75)}
            {renderSkill("Python", 80)}
            {renderSkill("PHP", 60)}
            {renderSkill("C++", 40)}
          </div>

          <div>
            <h1 className="text-white font-mono pb-10 text-2xl font-bold">DataBase Skills</h1>
            {renderSkill("Sql", 60)}
            {renderSkill("MongoDB", 50)}
            {renderSkill("ANSI Sql", 50)}
            {renderSkill("PostgreSql", 45)}
            
          </div>

          <div>
            <h1 className="text-white font-mono pb-10 text-2xl font-bold">Tools && OS</h1>
            {renderSkill("Linux", 80)}
            {renderSkill("Git", 85)}
            {renderSkill("PostMan", 60)}
            {renderSkill("Arduino", 70)}
            {renderSkill("vs code", 80)}
          </div>

          <div>
            <h1 className="text-white font-mono pb-10 text-2xl font-bold">IOT Skills</h1>
            {renderSkill("Arduino", 60)}
            {renderSkill("ESP8266", 70)}
            {renderSkill("Embedded C", 50)}
          </div>
        </div>
      </div>
    </section>

    
  );
}

function renderSkill(skill, percentage, color = "blue") {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-white">{skill}</span>
        <span className="text-sm font-medium text-white">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="h-2.5 rounded-full"
          style={{
            width: `${percentage}%`,
            backgroundColor: color === "blue" ? "#3b82f6" : color === "purple" ? "#a855f7" : "#3b82f6",
          }}
        ></div>
      </div>
    </div>
  );
}