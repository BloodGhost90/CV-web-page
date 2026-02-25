const skills = [
  "React Native",
  "TypeScript",
  "JavaScript (ES6+)",
  "Redux",
  "Expo",
  "REST APIs",
  "GraphQL",
  "Firebase",
  "Git & GitHub",
  "Jest & Testing Library",
  "UI/UX Design",
  "Responsive Design",
];

export default function Skills() {
  return (
    <section className="">
      <h2 className="">Skills</h2>
      <ul className="">
        {skills.map((skill, index) => (
          <li key={index} className="">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
