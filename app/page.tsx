import About from "@/components/about"
import Intro from "@/components/intro"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-[20rem] p-4 sm:p-24">
      <Intro />
      <About />
      <Projects />
    </main>
  )
}
