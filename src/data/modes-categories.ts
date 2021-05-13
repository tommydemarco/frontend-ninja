import { schoolOutline } from "ionicons/icons";

export interface ModeCategories {
  category: string;
  icon: any;
  path: string;
  description: string;
}

export interface ModesCategories {
  quizzes: ModeCategories[]
}

export const modesCategory = {
  quizzes: [
    { category: "CSS", icon: schoolOutline, path: "css", },
    { category: "JS", icon: schoolOutline, path: "js", },
    { category: "React", icon: schoolOutline, path: "react",},
    { category: "Vue", icon: schoolOutline, path: "vue",},
    { category: "Angular", icon: schoolOutline, path: "angular",},
    { category: "All", icon: schoolOutline, path: "all", },
  ]
}