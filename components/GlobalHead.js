import Head from "next/head";

export default function GlobalHead(props) {
  return (
    <Head>
      <title>Eirene: {props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      <meta name="description" content="Levando famílias à harmonia" />
      <meta name="keywords" content="Família, psicologia, cursos" />
      <link rel="shortcut icon" href="./favicon.ico" />
    </Head>
  )
}