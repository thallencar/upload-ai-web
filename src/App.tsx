import { Button } from "./components/ui/button";

export function App() {
  

  return (
    <div className="px-6 pv-3 flex items-center justify-between border-b">
      <h1 className="text-xl font-bold">upload.ai</h1>

      <div className=" flex items-center gap-3">
        <span className="text-sm font-thin text-muted-foreground">Desenvolvido com 💜 no NLW da Rocketseat</span>
        <Button variant={"secondary"}>Github</Button>
      </div>
    </div>
  )
}