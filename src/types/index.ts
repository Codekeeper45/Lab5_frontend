// Определение формы данных для приложения
export interface User {
    name: string;
    email: string;
    age: number;
    skills: Skill[];
}

// тип для фиксированных навыков
export type SkillLevel = "beginner" | "intermediate" | "Expert";

// Интерфейс для отдельного навыка пользователя
export interface Skill {
    id: number;
    name: string;
    level: SkillLevel;
}
