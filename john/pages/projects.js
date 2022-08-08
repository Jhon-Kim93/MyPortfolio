import Head from "next/head";
import Layout from "../components/layout";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project_item";

export default function Projects({projects}) {
  console.log(projects)

  return (
    <Layout>
      <div className="flex flex-col items-center justify-start min-h-screen px-5 py-5">
        <Head>
          <title>Welcome to John's portfolio!</title>
          <meta name="description" content="Introducing myself and projects" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-5xl">{projects.length}개의 프로젝트가 있습니다!</h1>
        <div className="grid grid-cols-1 py-10 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectItem key={project.id} project={project}/>
          ))}
        </div>
      </div>
    </Layout>
  )
}

// 빌드타임에 1회 호출
export async function getStaticProps() {

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({page_size: 100})
  };
  
  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
  
  const res_json = await res.json()
  const projects = res_json.results

  return {
    props: { projects }
  }
}