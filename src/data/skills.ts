export interface SkillCategory {
  category: string;
  categoryEs: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    categoryEs: "Lenguajes",
    skills: ["Python", "TypeScript", "SQL", "R", "JavaScript", "Dart"],
  },
  {
    category: "AI & Machine Learning",
    categoryEs: "IA y Aprendizaje Automático",
    skills: [
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "RAG",
      "Hugging Face",
      "scikit-learn",
      "LLMs",
      "MLflow",
      "Embeddings",
      "Vector Stores",
      "Computer Vision",
    ],
  },
  {
    category: "Cloud & DevOps",
    categoryEs: "Nube y DevOps",
    skills: [
      "AWS",
      "GCP",
      "Azure",
      "Microsoft Fabric",
      "Databricks",
      "Docker",
      "Kubernetes",
      "Vercel",
    ],
  },
  {
    category: "Data & Databases",
    categoryEs: "Datos y Bases de Datos",
    skills: [
      "Pandas",
      "Spark",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Airflow",
      "dbt",
      "Prefect",
      "Elasticsearch",
    ],
  },
  {
    category: "Web Development",
    categoryEs: "Desarrollo Web",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "FastAPI",
      "Flutter",
      "Streamlit",
      "Tailwind CSS",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    category: "Automation",
    categoryEs: "Automatización",
    skills: ["n8n", "Make"],
  },
  {
    category: "Business Intelligence",
    categoryEs: "Inteligencia Empresarial",
    skills: [
      "Tableau",
      "Power BI",
      "Data Warehousing",
      "ETL",
      "Snowflake",
      "Data Visualization",
      "KPI Design",
      "Analytics",
    ],
  },
];
