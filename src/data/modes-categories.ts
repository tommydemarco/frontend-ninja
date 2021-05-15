import { planet, logoCss3, logoAngular, logoStencil, logoNodejs, logoReact, logoVue, logoJavascript } from "ionicons/icons";

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
    { category: "CSS", icon: logoCss3, path: "css", },
    { category: "JS", icon: logoJavascript, path: "js", },
    { category: "React", icon: logoReact, path: "react",},
    { category: "Vue", icon: logoVue, path: "vue",},
    { category: "Angular", icon: logoAngular, path: "angular",},
    { category: "Stenciljs", icon: logoStencil, path: "stencil",},
    { category: "Node.js", icon: logoNodejs, path: "nodejs",},
    { category: "All", icon: planet, path: "all", },
  ]
}