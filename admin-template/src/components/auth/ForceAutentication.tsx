import Image from "next/image"
import Loading from "../../../public/images/loading.gif"
import useAuth from "@/src/data/hook/useAuth"
import router from 'next/router';
import Head from "next/head";

export default function ForceAuthentication(props: any) {
  const {user, loading} = useAuth();

  function renderContent() {
    return (
      <>
        <Head>
          <script dangerouslySetInnerHTML={{
            __html: `
              if(!document.cookie?.includes("admin-template-auth")) {
                window.location.href = "/autenticacao";
              }
            `
          }}/>
        </Head>
        {props.children}
      </>
    )
  }

  function renderLoading() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-800">
        <Image src={Loading} alt="Loading..."/>
      </div>
    )
  }

  if(!loading && user?.email) {
    return renderContent();
  } else if(loading) {
    return renderLoading();
  } else {
    router.push('/autenticacao');
    return null;
  }
}