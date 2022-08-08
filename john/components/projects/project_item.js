import Image from "next/image"

export default function ProjectItem({project}){

  const title = project.properties.Name.title[0].plain_text
  const github = project.properties.Github.url
  const youtube = project.properties.Youtube.url
  const description = project.properties.Description.rich_text[0]?.plain_text
  const periodStart = project.properties.WorkPeriod.date?.start
  const periodEnd = project.properties.WorkPeriod.date?.end
  const imgSrc = project.cover?.file?.url || project.cover?.external?.url
  const sampleSrc = 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
  const tags = project.properties.Tag?.multi_select

  const calculatedPeriod = (start, end) => {
    if (start == undefined) {
      return (
        <span>작업 기간이 없습니다.ㅠㅠ ~</span>
      )
    }
    const startDateStringArray = start.split('-');
    const endDateStringArray = end.split('-');
    
    var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
    var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);
    
    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return (
      <span>({result}일)</span>
    )
  }

  return(
    <div className="project-card">
      
      <Image
        className="rounded-t-xl"
        src={imgSrc ? imgSrc : sampleSrc}
        alt="cover image"
        width="100%"
        height="50%"
        layout="responsive"
        objectFit="cover"
        quality={100}
        priority="false"
      />
      <div className="p-3">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h1 className="font-bold my-1">{periodStart} ~ {periodEnd} {calculatedPeriod(periodStart, periodEnd)}</h1>
        <div className="flex items-start my-2 flex-wrap">
          {tags ? tags.map(tag => (
            <h1 className="px-2 py-1 mr-2 mt-1 rounded-md bg-sky-100 dark:bg-sky-700" key={tag.id}>{tag.name}</h1>
          )) : <h1>No Tags</h1>}
        </div>
        <h3 className="my-5">{description}</h3>
        <a href={github}>Github</a>
        <span className="mt-4"> / </span>
        <a href={youtube}>Youtube</a>
        <span> / </span>
        <a href="#">Notion</a>
      </div>
    </div>
  )
}