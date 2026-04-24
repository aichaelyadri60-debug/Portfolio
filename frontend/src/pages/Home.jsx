import MainLayouts from "../layouts/MainLayout";

export default function Home({changeCurrentPage}){

  return(
    <>
      <MainLayouts changeCurrentPage={changeCurrentPage}>
        <h1>home</h1>

      </MainLayouts>
    </>
  )
}