import type { Skill } from "../types/index.ts";

interface SkillListProps {
    skills: Skill[];
    // типизированный массив объектов навыков
}

const SkillList = ({ skills }: SkillListProps) => {
    // Персональная стилизация на основе уровня навыков
    const getBadgeStyle = (level: string) => ({
        background: level === 'Expert' ? '#4CAF50' : level === 'intermediate' ? '#FFC107' : '#F44336',
        color: 'white',
        padding: '2px 6px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: 'bold',
        marginLeft: '5px'
    });

    return (
        <ul style={{ paddingLeft: '20px' }}>
            {skills.map((skill) => (
                <li key={skill.id} style={{ marginBottom: '8px' }}>
                    {skill.name} — <span style={getBadgeStyle(skill.level)}>{skill.level}</span>
                </li>
            ))}
        </ul>
    )
};

export default SkillList;