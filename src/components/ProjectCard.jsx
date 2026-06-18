//export default function ProjectCard({ project }) {
return (
    <div className="p-4 border rounded-lg">
        <h3 className="font-bold">{project.title}</h3>
        <p>{project.description}</p>
    </div>
);
}