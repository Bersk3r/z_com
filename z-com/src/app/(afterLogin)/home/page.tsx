import style from './home.module.css';
import TabProvider from "@/app/(afterLogin)/home/_component/tabProvider";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
          <Tab />
          {/*<PostForm />*/}
          {/*<Post />*/}
          {/*<Post />*/}
          {/*<Post />*/}
          {/*<Post />*/}
          {/*<Post />*/}
          {/*<Post />*/}
          {/*<Post />*/}
          {/*<Post />*/}
      </TabProvider>
    </main>
  )
}
